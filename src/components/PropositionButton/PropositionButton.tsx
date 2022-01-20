import "./PropositionButton.scss";

import { UserAnswer } from "../../types";

interface PropositionButtonProps {
    /** The onClick callback */
    onClick: (score: UserAnswer) => void;
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
    userAnswer
}: PropositionButtonProps) {
    return (
        <button className="proposition-button" onClick={()=>onClick(userAnswer)}>{UserAnswer[userAnswer]}</button>
    );
}
