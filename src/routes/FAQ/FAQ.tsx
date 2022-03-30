import "./FAQ.scss";

import { Link } from "react-router-dom";

import { smileyForAgreements } from "../../types";

/**
 * A route with common questions.
 */
export function FAQ() {
    return (
        <div className="route-faq">
            <div className="route-faq__top">
                <h1>FAQ</h1>
            </div>
            <div className="route-faq__wrapper">
                <ul className="questions-list">
                    <details className="questions-list__item">
                        <summary>Des données sont-elles collectées et/ou revendues&nbsp;?</summary>
                        <p>
                            Non. Aucune information n&apos;est collectée.<br/>
                            Les réponses aux questions sont sauvegardées en local sur votre navigateur et peuvent être
                            effacées depuis la section <Link to="../options">Options</Link>.
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Comment est calculé le score&nbsp;?</summary>

                        <p>
                            Le candidat peut être pour une proposition, contre, ou neutre.
                            L&apos;utilisateur a plus de nuances et peut être vraiment pour ou vraiment
                            contre.<br/><br/>
                            Un accord avec le candidat rapporte un point (pour/pour, contre/contre)
                            et un accord important deux points (vraiment pour/pour, vraiment contre/contre).
                            Les désaccords sont comptés négativement.<br/><br/>
                            Le pourcentage est l&apos;expression du total de points sous forme de pourcentage.<br/>
                            Les réponses neutres ne sont pas prises en compte, le pourcentage peut alors avoir moins de
                            sens
                            (par exemple si on se prononce sur une seule proposition les scores possibles sont 0%, 50%
                            et 100%).<br/>
                            50% est le score neutre (les accords et désaccords se compensent).
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Le pourcentage indiqué est-il fiable&nbsp;?</summary>
                        <p>
                            Non.
                            Pour connaître la proximité réelle avec tous les programmes, il faudrait poser des questions
                            sur
                            tous les sujets et connaître l&apos;opinion de tous les candidats sur tous les sujets.
                            C&apos;est impossible.<br/><br/>
                            Il ne faut pas prendre les scores trop au sérieux, il est peut-être plus intéressant de
                            regarder les accords et désaccords importants, ou bien de comparer les candidats.<br/><br/>
                            Ce test ne remplace pas la lecture des programmes.
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>À quoi correspondent
                            les {smileyForAgreements(true)} et {smileyForAgreements(false)} dans les résultats&nbsp;?
                        </summary>
                        <p>
                            Il s&apos;agit des accords et désaccords importants.
                            Seules les réponses vraiment pour et vraiment contre sont
                            prises en compte.<br/><br/>
                            Les candidats sont classés par pourcentage, qui prend toutes les réponses en compte.
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Comment les propositions ont-elles été choisies&nbsp;?</summary>
                        <p>
                            Nous avons sélectionné des propositions importantes dans le débat public,
                            des propositions structurantes pour quelques candidats afin de les différencier,
                            et des propositions qui font apparaître un clivage parmi les candidats (gauche/droite,
                            souverainisme, nucléaire…).
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Je trouve qu&apos;une proposition est mal formulée</summary>
                        <p>
                            Vous pouvez consulter le <a
                                href="https://github.com/2022etmoi/2022etmoi/blob/prod/CONTRIBUTING.md">guide des
                            contributions</a> pour
                            nous aider à améliorer les formulations.
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Je pense qu&apos;il manque une proposition&nbsp;!</summary>
                        <p>
                            Vous pouvez consulter le <a
                                href="https://github.com/2022etmoi/2022etmoi/blob/prod/CONTRIBUTING.md">guide des
                            contributions</a> pour
                            proposer une nouvelle proposition.<br/><br/>
                            Si une candidate ou un candidat ne se distingue pas assez des autres,
                            il peut être intéressant de rajouter une proposition liée à son programme.<br/>
                            Si une proposition présente dans le débat public forme un clivage au sein des candidats,
                            cette proposition peut également être intéressante à rajouter.
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>La réponse indiquée pour une candidate ou un candidat est fausse&nbsp;!</summary>
                        <p>
                            Une fois muni de la source justifiant l&apos;erreur, vous pouvez consulter
                            le <a href="https://github.com/2022etmoi/2022etmoi/blob/prod/CONTRIBUTING.md">guide des
                            contributions</a> pour
                            proposer une correction, ou nous contacter pour signaler l&apos;erreur (cf &#34;Comment nous
                            contacter&nbsp;?&#34;).
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Pourquoi n&apos;ai-je pas 0% avec la candidate, le candidat que je déteste&nbsp;?
                        </summary>
                        <p>
                            Il faut interpréter le pourcentage dans le cadre des propositions sélectionées.
                            S&apos;il y avait beaucoup plus de propositions, le pourcentage serait plus précis.
                            Il est difficile de n&apos;être jamais d&apos;accord avec quelqu&apos;un&nbsp;:)
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Qui sommes-nous&nbsp;?</summary>
                        <p>
                            La liste des contributeurs est <a
                                href="https://github.com/2022etmoi/2022etmoi/graphs/contributors">disponible sur GitHub</a>,
                            et vous pouvez même contribuer&nbsp;!
                        </p>
                    </details>

                    <details className="questions-list__item">
                        <summary>Comment nous contacter&nbsp;?</summary>
                        <p>
                            - Sur Twitter : <a href="https://www.twitter.com/louisgrasset">@louisgrasset</a> et <a
                                href="https://www.twitter.com/yopoxdev">@yopoxdev</a> <br/><br/>
                            - Par mail : <a href="mailto:yopox@mailo.fr">yopox@mailo.fr</a>
                        </p>
                    </details>
                </ul>
            </div>
        </div>
    );
}
