import "./Scores.scss";

import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Button, CandidateScore } from "../../components";
import { ScoringService } from "../../services";
import { CandidateID, presentableUserAnswer, smileyForAgreements, UserAnswer } from "../../types";

/**
 * A route to display scores.
 */
export function Scores() {
    const scores = useMemo(()=>
        (Object.keys(CandidateID) as Array<keyof typeof CandidateID>)
            .map((id) => {
                const score = ScoringService.getInstance().computeScore(id as CandidateID);
                return {
                    candidate: id,
                    score: {
                        ...score,
                        score: score?.score ?? - 1
                    },
                };
            })
            .filter(value => value.score.score !== - 1)
            .sort((a, b) => {
                const seed1 = Math.random() * 10;
                const seed2 = Math.random() * 10;
                return (b.score.score * 100 + 50 + seed2) - (a.score.score * 100 + 50 + seed1);
            }), []
    );

    return (
        <div className="route-scores">
            <div className="route-scores__top">
                <h1>Scores</h1>
                <p>Visualisez les scores pour chaque candidat, 50% étant le score neutre.</p>
                <p><span className="route-scores__top__smiley">{smileyForAgreements(true)}</span> → <b>accord
                    important</b> (réponse {presentableUserAnswer(UserAnswer.MUST).toLowerCase()} ou {presentableUserAnswer(UserAnswer.MUST_NOT).toLowerCase()} en
                    accord).</p>
                <p><span className="route-scores__top__smiley">{smileyForAgreements(false)}</span> → <b>désaccord
                    important</b> (réponse {presentableUserAnswer(UserAnswer.MUST).toLowerCase()} ou {presentableUserAnswer(UserAnswer.MUST_NOT).toLowerCase()} en
                    désaccord).</p>
            </div>
            <div className="route-scores__wrapper">
                {
                    scores.length ?
                        scores.map((score) => (
                            <CandidateScore candidateID={score.candidate} score={score.score} key={score.candidate}/>
                        ))
                        : <div className="error">
                            <h1>Oups !</h1>
                            <p>Aucune réponse enregistré.</p>
                            <br/>
                            <br />
                            <Link to="/app/propositions">
                                <Button>Voir les propositions</Button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
}
