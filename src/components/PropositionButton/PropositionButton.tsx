import "./PropositionButton.scss";

import { useMemo } from "react";

import { presentableUserAnswer, UserAnswer } from "../../types";
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
    const emoji = useMemo(()=> {
        switch (userAnswer) {
        case UserAnswer.MUST_NOT:
            return "😡";
        case UserAnswer.NO:
            return "👎";
        case UserAnswer.YES:
            return "👍";
        case UserAnswer.MUST:
            return "🥰";
        }
    }, [userAnswer]);

    return (
        <div className="proposition-button" onClick={() => onClick?.(userAnswer)} role="button" aria-label={presentableUserAnswer(userAnswer)}>
            <Button type="secondary" className="proposition-button__button">{emoji}</Button>
            <div className="proposition-button__name">{presentableUserAnswer(userAnswer)}</div>
        </div>
    );
}
