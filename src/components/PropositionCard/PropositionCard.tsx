import "./PropositionCard.scss";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useCallback, useMemo } from "react";

import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services/StorageService";
import { PropositionID, UserAnswer } from "../../types";
import { Button } from "../Button/";
import { PropositionButton } from "../PropositionButton";

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
    const proposition = useMemo(()=>propositions.filter(p => p.id == propositionID)[0], [propositionID]);

    const storageService = StorageService.getInstance();

    const handlePropositionVote = useCallback((answer) => {
        storageService.saveAnswer(proposition, answer);
        onClick();
    }, [storageService, proposition, onClick]);

    const handleSkipProposition = useCallback(() => {
        onClick();
    }, [onClick]);

    return (
        proposition &&
        <div className="proposition-card">
            <header>
                {
                    proposition.content
                }
            </header>
            <div className="proposition-card__card">
                <h3 className="proposition-card__card-title">Details sur cette proposition</h3>
                <div className="proposition-card__card-details">{proposition.description}</div>
            </div>

            <div className="proposition-card__buttons">
                <PropositionButton onClick={handlePropositionVote} userAnswer={UserAnswer.MUST_NOT} emoji={"😡"}/>
                <PropositionButton onClick={handlePropositionVote} userAnswer={UserAnswer.NO} emoji={"👎"}/>
                <PropositionButton onClick={handlePropositionVote} userAnswer={UserAnswer.YES} emoji={"👍"}/>
                <PropositionButton onClick={handlePropositionVote} userAnswer={UserAnswer.MUST} emoji={"🥰"}/>
            </div>

            <div className="proposition-card__actions">
                <Button onClick={() => handlePropositionVote(UserAnswer.SKIP)} type={"transparent"}><ArrowLeftOutlined/>Proposition
                    précédente</Button>
                <Button onClick={handleSkipProposition}>Passer<ArrowRightOutlined/></Button>
            </div>
        </div>
    );
}
