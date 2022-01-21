import "./CandidateScore.scss";

import { candidates } from "../../data/Candidates";
import { ScoringService } from "../../services";
import { CandidateID } from "../../types";

interface CandidateScoreProps {
    candidateID: string,
}

/**
 * A component showing the given candidate.
 * @param id. The current Candidate.
 */
export function CandidateScore({ candidateID }: CandidateScoreProps) {
    const candidate = candidates.get(candidateID as CandidateID);
    if (candidate == undefined) {
        return null;
    }

    const score = ScoringService.getInstance().computeScore(candidate.opinion);

    return (
        <div className="candidate-score">
            <div className="candidate-score__name">{candidate.name}</div>
            <div className="candidate-score__score">{
                score != null ? Math.round(score.score) : "?"
            }%
            </div>
        </div>
    );
}
