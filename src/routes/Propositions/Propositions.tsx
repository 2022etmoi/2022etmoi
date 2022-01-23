import "./Propositions.scss";

import { useState } from "react";

import { PropositionCard } from "../../components";
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
        console.log(propositionNb);
        console.log("Next");
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
            <h1>Proposition – {propositionNb + 1} / {order.length}</h1>
            <button onClick={reset}>Reset</button>
            {
                proposition && (
                    <PropositionCard key={proposition} propositionID={proposition} onClick={getNextProposition}/>
                )
            }
        </div>
    );
}
