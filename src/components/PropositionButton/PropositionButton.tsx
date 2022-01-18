import { UserAnswer } from "../../types";
import "./PropositionButton.scss";

interface PropositionButtonProps {
    /** The onClick callback */
    onClick: (score: number) => void;
    /** The score of the button */
    userAnswer: UserAnswer
}

export function PropositionButton ({
    onClick,
    userAnswer
}: PropositionButtonProps) {
    return (
        <button className="proposition-button" onClick={()=>onClick(userAnswer)}>{UserAnswer[userAnswer]}</button>
    );
}
