import "./Scores.scss";

import { CandidateScore } from "../../components";
import { ScoringService } from "../../services";
import { CandidateID } from "../../types";

// interface ScoresProps {
//
// }

/**
 * A route to display scores.
 */
export function Scores() {
    return (
        <div className="route-scores">
            {
                (Object.keys(CandidateID) as Array<keyof typeof CandidateID>)
                    // Compute scores
                    .map((id) => {
                        const score = ScoringService.getInstance().computeScore(id as CandidateID);
                        return {
                            candidate: id,
                            score: score?.score ?? - 1,
                        };
                    })
                    // Remove bad entries
                    .filter(value => value.score != - 1)
                    // Sort candidates by score
                    .sort((a, b) => {
                        const seed1 = Math.random() * 100;
                        const seed2 = Math.random() * 100;
                        return (b.score * 100 + seed2) - (a.score * 100 + seed1);
                    })
                    // Candidate components
                    .map((obj) => (
                        <CandidateScore candidateID={obj.candidate} key={obj.candidate}/>
                    )
                    )
            }
        </div>
    );
}
