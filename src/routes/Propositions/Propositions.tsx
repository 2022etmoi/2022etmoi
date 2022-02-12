import "./Propositions.scss";

import { useCallback, useState } from "react";

import { Counter, PropositionCard } from "../../components";
import { StorageService } from "../../services";
import { PropositionID } from "../../types";

/**
 * A component to display propositions one by one.
 */
export function Propositions() {
    const [order, setOrder] = useState<PropositionID[]>(StorageService.getInstance().getPropositionsOrder());
    const [propositionNb, setPropositionNb] = useState<number>(0);
    const [proposition, setProposition] = useState<PropositionID>(order[0]);

    const navigate = useCallback((dn: number) => {
        const newN = propositionNb + dn;
        if (newN > order.length - 1) {
            // TODO: Navigate to score page
            setPropositionNb(0);
            setProposition(order[0]);
        } else if (newN < 0) {
            setPropositionNb(order.length - 1);
            setProposition(order[order.length - 1]);
        } else {
            setPropositionNb(newN);
            setProposition(order[newN]);
        }
    }, [order, propositionNb]);

    return (
        <div className="route-propositions">
            <header>
                <h1><span>Proposition</span><Counter current={propositionNb + 1} max={order.length}/></h1>
            </header>
            <div className="route-propositions__wrapper">
                {
                    proposition && (
                        <PropositionCard key={proposition} propositionID={proposition} navigate={navigate}/>
                    )
                }
            </div>
        </div>
    );
}
