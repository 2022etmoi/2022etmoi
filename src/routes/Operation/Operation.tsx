import "./Operation.scss";

import { ArrowRightOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { Button, Envelope } from "../../components";
import { CandidateScore } from "../../components/CandidateScore/CandidateScore";
import { RandomScoreMock } from "../../tests/mocks";
import { CandidateID } from "../../types";

/**
 * A route to display how the app works.
 */
export function Operation () {
    const randomCandidateCards = useMemo(()=> {
        const list = Array.from(Object.keys(CandidateID)) as CandidateID[];
        const cards = [];
        for (let count = 0; count < 3; count ++) {
            const index = Math.floor(Math.random() * list.length);
            const [candidateID] = list.slice(index, index + 1);
            cards.push(<CandidateScore key={count} candidateID={candidateID} score={RandomScoreMock()} />);
        }
        return cards;
    }, []);

    return (
        <div className="route-operation">
            <div className="route-operation__wrapper">
                <header className="route-operation-header">
                    <Link to="/">
                        <img src="/images/brand/logo.svg" alt="Logo 2022 et moi .fr" className="route-operation-header__logo"/>
                    </Link>
                    <h1  className="route-operation-header__title">Fonctionnement du site</h1>
                </header>
                <section className="route-operation-section">
                    <Envelope />
                    <div>
                        <h2>Les votes</h2>
                        <p>Pour chaque proposition qui vous semble essentielle, choisissez <b>vraiment pour 😍</b> ou <b>vraiment contre 😡</b> afin qu'elle compte deux fois plus au calcul des scores.</p>
                        <p>Pour les autres propositions, vous pouvez sélectionner <b>pour 👍</b> ou <b>contre 👎</b>.</p>
                        <p>Vous pouvez passer la proposition pour ne pas exprimer d'avis, ou retourner en arrière pour corriger un choix.</p>
                    </div>
                </section>
                <section className="route-operation-section">
                    <div className="route-operation-section__cards">
                        {
                            randomCandidateCards
                        }
                    </div>
                    <div>
                        <h2>Les scores</h2>
                        <p>La barre de couleur indique l'affinité avec un candidat sur les questions proposées.</p>
                        <p>Les ❌ correspondent au nombre de désaccords sur les questions  jugées essentielles.</p>
                        <p>Les 😍 correspondent au nombre d'accords sur les questions jugées essentielles.</p>
                    </div>
                </section>
                <section className="route-operation-section route-operation-section--footer">
                    <h3>Ce quiz ne remplace pas la lecture des programmes des candidats !</h3>
                    <p>Il permet d'avoir une idée des accords et désaccords importants avec les différents programmes.</p>
                    <Link to="/app">
                        <Button>Lancer l'application <ArrowRightOutlined/></Button>
                    </Link>
                </section>
            </div>
        </div>
    );
}
