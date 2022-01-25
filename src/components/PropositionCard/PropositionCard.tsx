import "./PropositionCard.scss";

import { useCallback, useState } from "react";

import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services/StorageService";
import { PropositionID, UserAnswer } from "../../types";
import { AnswerSlider } from "../AnswerSlider";

interface PropositionCardProps {
    /** The current PropositionID */
    propositionID: PropositionID;
    /** The callback to call when clicked */
    onClick: () => void;
}

/**
 * A component showing the given proposition.
 * @param proposition. The current Proposition.
 */
export function PropositionCard({ propositionID, onClick }: PropositionCardProps) {
    const [answer, setAnswer] = useState(UserAnswer.SKIP);
    const storageService = StorageService.getInstance();
    const proposition = propositions.filter(p => p.id == propositionID)[0];
    if (proposition == undefined) return null;

    const handlePropositionVote = useCallback(() => {
        storageService.saveAnswer(proposition, answer);
        onClick();
    }, [storageService]);

    return (
        <div className="proposition-card">
            <header>
                {
                    proposition.content
                }
            </header>
            <div className="proposition-card__card">
                <h3 className="proposition-card__card-title">Votre avis sur cette proposition</h3>
                <div className="proposition-card__card-answer">
                    <img aria-hidden className="proposition-card__card-answer__icon" src={`/images/${answer.toLowerCase()}.png`}/>
                    <span className="proposition-card__card-answer__label">Je ne sais pas encore.</span>
                </div>
                <AnswerSlider onChange={userAnswer => setAnswer(userAnswer)} />
            </div>
            <button onClick={handlePropositionVote}>Sauvegarder ma réponse</button>
        </div>
    );
}
