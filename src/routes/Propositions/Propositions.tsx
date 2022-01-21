import "./Propositions.scss";

import { useCallback, useEffect, useState } from "react";

import { PropositionCard } from "../../components";
import { propositions } from "../../data/Propositions";
import { Proposition } from "../../types/Proposition";

interface PropositionsProps {

}

export function Propositions ({}: PropositionsProps) {
    const [remainingPropositions, setRemainingPropositions] = useState(propositions);
    const [proposition, setProposition] = useState<Proposition>();

    const getRandomProposition = useCallback(()=> {
        const id = Math.floor(Math.random() * remainingPropositions.length);
        setProposition(remainingPropositions[id]);
        setRemainingPropositions(remainingPropositions.filter((_, index) => index !== id));
    }, [remainingPropositions]);

    useEffect(()=> getRandomProposition(), []);

    return (
        <div className="route-propositions">
            <h1>Propositions</h1>
            {
                proposition && (
                    <PropositionCard key={proposition.id} proposition={proposition} onClick={getRandomProposition}/>
                )}
        </div>
    );
}
