import "./Scores.scss";

import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Button, CandidateScore } from "../../components";
import { ScoringService } from "../../services";
import { CandidateID, smileyForAgreements } from "../../types";

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
                <p>Un pourcentage de 50% est neutre : les accords et désaccords se compensent.</p>
                <div className="route-table__top__caption">
                    <div>{smileyForAgreements(true)} (accords importants) :
                        réponses &ldquo;vraiment pour&rdquo; ou &ldquo;vraiment contre&rdquo; en accord avec le
                        candidat.
                    </div>
                    <div>{smileyForAgreements(false)} (désaccords importants) :
                        réponses &ldquo;vraiment pour&rdquo; ou &ldquo;vraiment contre&rdquo; en désaccord avec le
                        candidat.
                    </div>
                </div>
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
