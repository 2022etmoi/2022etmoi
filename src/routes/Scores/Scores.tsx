import "./Scores.scss";

import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Button, CandidateScore } from "../../components";
import { ScoringService } from "../../services";
import { CandidateID } from "../../types";

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
                    score: score?.score ?? - 1,
                };
            })
            .filter(value => value.score !== - 1)
            .sort((a, b) => {
                const seed1 = Math.random() * 100;
                const seed2 = Math.random() * 100;
                return (b.score * 100 + seed2) - (a.score * 100 + seed1);
            }), []
    );

    return (
        <div className="route-scores">
            <header>
                <h1>Scores</h1>
            </header>
            <div className="route-scores__wrapper">
                {
                    scores.length ?
                        scores.map((score) => (
                            <CandidateScore candidateID={score.candidate} key={score.candidate}/>
                        ))
                        : <>
                            <h1>Oups !</h1>
                            <p>Aucun vote enregistré.</p>
                            <br>
                            </br><Link to="/app/propositions">
                                <Button>Voir les propositions</Button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
}
