import "./CandidateScore.scss";

import { candidates } from "../../data/Candidates";
import { StorageService } from "../../services";
import { CandidateID } from "../../types";

interface CandidateScoreProps {
    candidateID: string,
}

/**
 * A component showing the given candidate.
 * @param id. The current Candidate.
 */
export function CandidateScore({ candidateID }: CandidateScoreProps) {
    const storageService = StorageService.getInstance();

    const candidate = candidates.get(candidateID as CandidateID);
    if (candidate == undefined) { return null; }

    return (
        <div className="candidate-score">
            <div className="candidate-score__name">{ candidate.name }</div>
        </div>
    );
}
