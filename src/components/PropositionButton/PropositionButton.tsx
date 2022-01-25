import "./PropositionButton.scss";

import { presentableUserAnswer, UserAnswer } from "../../types";

interface PropositionButtonProps {
    /** The onClick callback */
    onClick: (score: UserAnswer) => void;
    /** The score of the button */
    userAnswer: UserAnswer,
    emoji: string,
}

/**
 * A component to display a vote button.
 * @param onClick. The onClick callback.
 * @param userAnswer. The score of the button.
 */
export function PropositionButton ({
    onClick,
    userAnswer,
    emoji,
}: PropositionButtonProps) {
    return (
        <div className="proposition-button" onClick={() => onClick(userAnswer)}>
            <button className="proposition-button__button">{emoji}</button>
            <div className="proposition-button__name">{presentableUserAnswer(userAnswer)}</div>
        </div>
    );
}
