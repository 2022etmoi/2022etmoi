import "./Landing.scss";

import { ArrowDownOutlined } from "@ant-design/icons";

import { Button, FrequentlyAskedQuestions } from "../../components";
/**
 * A route to display the app landing page.
 */
export function Landing() {
    return (
        <div className="route-landing">
            <div className="route-landing__wrapper">
                <div className="hero">
                    <div className="hero__left">
                        <img className="hero__logo" src="/images/brand/mark.svg" alt="Logo de 2022 et moi .fr" />
                        <h1 className="hero__title">
                            <span className="hero__title-first">2022</span>
                            <span className="hero__title-second">et<span className="hero__title-me"> moi </span>.fr</span>
                        </h1>
                        <p className="hero__content">Testez votre proximité avec les principaux candidats à la présidentielle sur une trentaine de propositions.</p>
                        <Button>
                            Découvrir l'app
                            <ArrowDownOutlined />
                        </Button>
                    </div>
                    <div className="hero__right">
                        <svg width="655" height="592" viewBox="0 0 655 592" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_i_170_351)">
                                <path d="M8.44801 284.508C-62.7709 49.2602 333.802 -3.0921 540.99 0.13779C640.675 1.69179 647.499 245.076 653.469 284.508C660.932 333.799 648.138 389.831 451.967 528.014C255.795 666.197 97.4716 578.569 8.44801 284.508Z" fill="#EEF7FF"/>
                            </g>
                            <defs>
                                <filter id="filter0_i_170_351" x="-9.53674e-07" y="0" width="655" height="596" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="21.5"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.298039 0 0 0 0 0.45098 0 0 0 0 0.607843 0 0 0 0.09 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_170_351"/>
                                </filter>
                            </defs>
                        </svg>

                    </div>
                </div>
                <section className="section-argument">
                    <h2>Sécurité, transparence</h2>
                </section>
                <section className="section-questions">
                    <h2>Questions récurrentes</h2>
                    <FrequentlyAskedQuestions />
                </section>
            </div>
        </div>
    );
}
