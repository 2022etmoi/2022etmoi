import "./Propositions.scss";

import { useState } from "react";

import { Button, PropositionCard } from "../../components";
import { StorageService } from "../../services";
import { PropositionID } from "../../types";

// interface PropositionsProps {
//
// }

/**
 * A component to display propositions one by one.
 */
export function Propositions() {
    const [order, setOrder] = useState<PropositionID[]>(StorageService.getInstance().getPropositionsOrder());
    const [propositionNb, setPropositionNb] = useState<number>(0);
    const [proposition, setProposition] = useState<PropositionID>(order[0]);

    const getNextProposition = () => {
        if (propositionNb == order.length - 1) {
            // TODO: Navigate to score page
            setPropositionNb(0);
            setProposition(order[0]);
        } else {
            setPropositionNb(propositionNb + 1);
            setProposition(order[propositionNb + 1]);
        }
    };

    const reset = () => {
        StorageService.getInstance().clear();
        const newOrder = StorageService.getInstance().getPropositionsOrder();
        setOrder(newOrder);
        setPropositionNb(0);
        setProposition(newOrder[propositionNb]);
    };

    return (
        <div className="route-propositions">
            <h1 className="header">Proposition – {propositionNb + 1} / {order.length}</h1>
            {
                proposition && (
                    <PropositionCard key={proposition} propositionID={proposition} onClick={getNextProposition}/>
                )
            }
            <Button type="secondary" onClick={reset}>Reset answers</Button>
        </div>
    );
}
