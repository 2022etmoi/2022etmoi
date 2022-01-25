import "./CandidateScore.scss";

import CountUp  from "react-countup";

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
    if (candidate == undefined) return null;

    const score = ScoringService.getInstance().computeScore(candidateID as CandidateID);
    if (score == null) return null;

    return (
        <div className="candidate-score">
            <div className="candidate-score__score">{<CountUp end={Math.round(score.score)} duration={1.5} useEasing/>}</div>
            <div className="candidate-score__details">
                <div className="candidate-score__details__name">{candidate.name}</div>
                <div className="candidate-score__details__movement">{candidate.movement}</div>
            </div>
            <div className="candidate-score__chip">{score.hearts} ❤️</div>
            <div className="candidate-score__chip">{score.skulls} ☠️️</div>
        </div>
    );
}
