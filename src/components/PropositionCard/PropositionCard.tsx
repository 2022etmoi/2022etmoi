import "./PropositionCard.scss";

import { useCallback } from "react";
import { Proposition, UserAnswer } from "../../types";
import { PropositionButton } from "../PropositionButton";

interface PropositionCardProps {
    /** The current Proposition */
    proposition: Proposition
}
export function PropositionCard({proposition}:PropositionCardProps) {
    const handlePropositionVote = useCallback((propositionId: Proposition["id"], answer: UserAnswer) => console.log(propositionId, UserAnswer[answer]), []);

    return (<div className="proposition-card">
        <article>
            {
                proposition.content
            }
        </article>
        <PropositionButton key={UserAnswer.MUST_NOT} userAnswer={UserAnswer.MUST_NOT} onClick={answer => handlePropositionVote(proposition.id, answer)}/>
        <PropositionButton key={UserAnswer.NO} userAnswer={UserAnswer.NO} onClick={answer => handlePropositionVote(proposition.id, answer)}/>
        <PropositionButton key={UserAnswer.SKIP} userAnswer={UserAnswer.SKIP} onClick={answer => handlePropositionVote(proposition.id, answer)}/>
        <PropositionButton key={UserAnswer.YES} userAnswer={UserAnswer.YES} onClick={answer => handlePropositionVote(proposition.id, answer)}/>
        <PropositionButton key={UserAnswer.MUST} userAnswer={UserAnswer.MUST} onClick={answer => handlePropositionVote(proposition.id, answer)}/>
    </div>
    );
}