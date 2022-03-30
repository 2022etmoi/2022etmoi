import "./CandidateScore.scss";

import { useMemo } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import { candidates } from "../../data/Candidates";
import { CandidateID, Score, smileyForAgreements } from "../../types";
import { Button } from "../Button";
import { Icon } from "../Icon";

interface CandidateScoreProps {
    candidateID: string,
    score: Score,
}

/**
 * A component showing the given candidate.
 * @param id. The current Candidate.
 * @param score. The current Candidate score.
 */
export function CandidateScore({ candidateID, score }: CandidateScoreProps)  {
    const candidate = candidates.get(candidateID as CandidateID);
    const scoreSum = score == null ? 1 : score.skulls + score.hearts + score.agreements + score.disagreements + score.neutral;

    const imageFileName = useMemo(()=> candidate?.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_").toLowerCase(), [candidate?.name]);
    return (
        <div className="candidate-score">
            {
                candidate && score && (
                    <>
                        <div className="candidate-score__image">
                            <img src={`/images/candidates/${imageFileName}.webp`}/>
                            <a href={candidate.program} target="_blank" className="candidate-score__program"
                                rel="noreferrer">
                                <Icon file="program"></Icon>
                            </a>
                        </div>
                        <div className="candidate-score__details">
                            <div className="candidate-score__details-name">{candidate.name}</div>
                            <div className="candidate-score__details-movement">{candidate.movement}</div>
                            <div className="candidate-score__details-score">{<CountUp delay={0.25}
                                end={Math.round(score.score)}
                                duration={1.5} useEasing/>}</div>
                        </div>
                        <div className="candidate-score__bars">
                            <div className="candidate-score__bars-item candidate-score__bars-item--must_not"
                                style={{ width: (score.skulls / scoreSum * 100) + "%" }}></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--not"
                                style={{ width: (score.disagreements / scoreSum * 100) + "%" }}></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--skip"
                                style={{ width: (score.neutral / scoreSum * 100) + "%" }}></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--yes"
                                style={{ width: (score.agreements / scoreSum * 100) + "%" }}></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--must"
                                style={{ width: (score.hearts / scoreSum * 100) + "%" }}></div>
                        </div>
                        <div className="candidate-score__footer">
                            <div className="candidate-score__chip">
                                <span>{smileyForAgreements(true)}</span> {score.hearts}
                            </div>
                            <div className="candidate-score__chip">
                                <span>{smileyForAgreements(false)}</span> {score.skulls}
                            </div>
                            <Link to="/app/table" state={{ highlight: candidate.id }}>
                                <Button type="transparent">En savoir plus</Button>
                            </Link>
                        </div>
                    </>
                )}
        </div>
    );
}
