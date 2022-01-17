import "./PropositionButton.scss";

interface PropositionButtonProps {
    /** The onClick callback */
    onClick: () => void;
}

export function PropositionButton ({
    onClick
}: PropositionButtonProps) {
    return (
        <div className="proposition-button" onClick={onClick}>Button</div>
    );
}
