import "./PropositionButton.scss";

import { presentableUserAnswer, smileyForUserAnswer, UserAnswer } from "../../types";
import { Button } from "../Button/Button";

interface PropositionButtonProps {
    /** The onClick callback */
    onClick?: (score: UserAnswer) => void;
    /** The score of the button */
    userAnswer: UserAnswer
}

/**
 * A component to display a vote button.
 * @param onClick. The onClick callback.
 * @param userAnswer. The score of the button.
 */
export function PropositionButton ({
    onClick,
    userAnswer,
}: PropositionButtonProps) {
    return (
        <div className="proposition-button" onClick={() => onClick?.(userAnswer)} role="button" aria-label={presentableUserAnswer(userAnswer)}>
            <Button type="secondary" className="proposition-button__button">{smileyForUserAnswer(userAnswer)}</Button>
            <div className="proposition-button__name">{presentableUserAnswer(userAnswer)}</div>
        </div>
    );
}
