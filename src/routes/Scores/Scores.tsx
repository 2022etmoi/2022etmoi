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
                            valid: score != null,
                            score: score != null ? score.score : 0,
                        };
                    })
                    // Sort candidates by score
                    .sort((a, b) => b.score - a.score)
                    // Candidate components
                    .map((obj) => (
                        <CandidateScore candidateID={obj.candidate} score={obj.score} key={obj.candidate}/>
                    )
                    )
            }
        </div>
    );
}
