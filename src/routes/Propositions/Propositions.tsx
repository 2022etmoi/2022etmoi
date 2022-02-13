import "./Propositions.scss";

import { useCallback, useState } from "react";

import { Counter, PropositionCard } from "../../components";
import { StorageService } from "../../services";
import { PropositionID } from "../../types";

/**
 * A component to display propositions one by one.
 */
export function Propositions() {
    const [order] = useState<PropositionID[]>(StorageService.getInstance().getPropositionsOrder());
    const [propositionNb, setPropositionNb] = useState<number>(firstNonAnswered(order));
    const [proposition, setProposition] = useState<PropositionID>(order[propositionNb]);

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
            <div className="route-propositions__header">
                <h1>
                    <div className="route-propositions__header__prop">Proposition</div>
                    <Counter current={propositionNb + 1} max={order.length}/></h1>
            </div>
            <div className="route-propositions__wrapper">
                {
                    proposition && (
                        <PropositionCard key={proposition} propositionID={proposition} navigate={navigate}/>
                    )
                }
            </div>
        </div>
    );

    function answered(id: PropositionID) {
        const answers = StorageService.getInstance().getAnswers();
        return answers?.filter(a => a[0] == id)?.length !== 0;
    }

    function firstNonAnswered(order: PropositionID[]) {
        const notAnswered = order.filter(id => ! answered(id));
        if (notAnswered.length === 0) return 0;
        return order.indexOf(notAnswered[0]);
    }
}
