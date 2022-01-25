import "./PropositionCard.scss";

import { useCallback, useMemo, useState } from "react";

import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services/StorageService";
import { PropositionID, UserAnswer } from "../../types";
import { AnswerSlider } from "../AnswerSlider";
import { Button } from "../Button/";

interface PropositionCardProps {
    /** The current PropositionID */
    propositionID: PropositionID;
    /** The callback to call when clicked */
    onClick: () => void;
}

/**
 * A component showing the given proposition.
 * @param proposition. The current PropositionID.
 * @param onClick. The callback to call when clicked.
 */
export function PropositionCard({ propositionID, onClick }: PropositionCardProps) {
    const [answer, setAnswer] = useState(UserAnswer.SKIP);
    const proposition = useMemo(()=>propositions.filter(p => p.id == propositionID)[0], [propositions, propositionID]);

    const storageService = StorageService.getInstance();

    const handlePropositionVote = useCallback(() => {
        storageService.saveAnswer(proposition, answer);
        onClick();
    }, [storageService, proposition, answer, onClick]);

    return (
        proposition &&
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
            <Button onClick={handlePropositionVote}>Sauvegarder ma réponse</Button>
        </div>
    );
}
