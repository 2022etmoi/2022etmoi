import "./PropositionCard.scss";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useCallback, useMemo } from "react";

import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services";
import { PropositionID, UserAnswer } from "../../types";
import { Button } from "../Button/";
import { PropositionButton } from "../PropositionButton";

interface PropositionCardProps {
    /** The current PropositionID */
    propositionID: PropositionID;
    /** The navigate function to show proposition n + dn */
    navigate: (dn: number) => void;
}

/**
 * A component showing the given proposition.
 * @param proposition. The current PropositionID.
 * @param navigate. The navigate function to show proposition n + dn.
 */
export function PropositionCard({ propositionID, navigate }: PropositionCardProps) {
    const proposition = useMemo(() => propositions.filter(p => p.id == propositionID)[0], [propositionID]);

    const storageService = StorageService.getInstance();

    const handlePropositionVote = useCallback((answer) => {
        storageService.saveAnswer(proposition, answer);
        navigate(1);
    }, [storageService, proposition, navigate]);

    const handlePropositionNeutral = useCallback(() => {
        storageService.saveAnswer(proposition, UserAnswer.NEUTRAL);
        navigate(1);
    }, [storageService, proposition, navigate]);

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

            <div className="proposition-card__neutral">
                <Button onClick={handlePropositionNeutral}>Ne se prononce pas</Button>
            </div>

            <div className="proposition-card__actions">
                <Button onClick={() => navigate(- 1)} type={"transparent"}><ArrowLeftOutlined/>Précédent</Button>
                <Button onClick={() => navigate(1)} type={"transparent"}>Suivant<ArrowRightOutlined/></Button>
            </div>
        </div>
    );
}
