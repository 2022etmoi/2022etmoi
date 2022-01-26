import "./PropositionButton.scss";

import { presentableUserAnswer, UserAnswer } from "../../types";

interface PropositionButtonProps {
    /** The onClick callback */
    onClick: (score: UserAnswer) => void;
    /** The score of the button */
    userAnswer: UserAnswer,
    /** The emoji of the button. */
    emoji: string,
}

/**
 * A component to display a vote button.
 * @param onClick. The onClick callback.
 * @param userAnswer. The score of the button.
 * @param emoji. The emoji of the button.
 */
export function PropositionButton ({
    onClick,
    userAnswer,
    emoji,
}: PropositionButtonProps) {
    return (
        <div className="proposition-button" onClick={() => onClick(userAnswer)} role="button" aria-label={presentableUserAnswer(userAnswer)}>
            <button className="proposition-button__button">{emoji}</button>
            <div className="proposition-button__name">{presentableUserAnswer(userAnswer)}</div>
        </div>
    );
}
