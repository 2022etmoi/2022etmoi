import "./CandidateScore.scss";

import { candidates } from "../../data/Candidates";
import { CandidateID } from "../../types";

interface CandidateScoreProps {
    candidateID: string,
    score: number,
}

/**
 * A component showing the given candidate.
 * @param id. The current Candidate.
 */
export function CandidateScore({ candidateID, score }: CandidateScoreProps) {
    const candidate = candidates.get(candidateID as CandidateID);
    if (candidate == undefined) return null;

    return (
        <div className="candidate-score">
            <div className="candidate-score__name">{candidate.name}</div>
            <div className="candidate-score__score">{Math.round(score)}</div>
        </div>
    );
}
