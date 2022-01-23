import "./PropositionCard.scss";

import { useCallback } from "react";

import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services/StorageService";
import { PropositionID, UserAnswer } from "../../types";
import { PropositionButton } from "../PropositionButton";

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
    const storageService = StorageService.getInstance();
    const proposition = propositions.filter(p => p.id == propositionID)[0];
    if (proposition == undefined) return null;

    const handlePropositionVote = useCallback((answer: UserAnswer) => {
        storageService.saveAnswer(proposition, answer);
        onClick();
    }, [storageService]);

    return (<div className="proposition-card">
        <article>
            {
                proposition.content
            }
        </article>
        <PropositionButton key={UserAnswer.MUST_NOT} userAnswer={UserAnswer.MUST_NOT} onClick={answer => handlePropositionVote(answer)}/>
        <PropositionButton key={UserAnswer.NO} userAnswer={UserAnswer.NO} onClick={answer => handlePropositionVote(answer)}/>
        <PropositionButton key={UserAnswer.SKIP} userAnswer={UserAnswer.SKIP} onClick={answer => handlePropositionVote(answer)}/>
        <PropositionButton key={UserAnswer.YES} userAnswer={UserAnswer.YES} onClick={answer => handlePropositionVote(answer)}/>
        <PropositionButton key={UserAnswer.MUST} userAnswer={UserAnswer.MUST} onClick={answer => handlePropositionVote(answer)}/>
    </div>
    );
}
