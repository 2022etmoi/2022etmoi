import "./Options.scss";

import { useCallback, useEffect, useState } from "react";

import { propositions } from "../../data/Propositions";
import { ScoringService, StorageService } from "../../services/";
import { PropositionID, UserAnswer } from "../../types";

interface OptionsProps {

}

/**
 * A route to display options.
 */
export function Options({}: OptionsProps) {

    const storageService = StorageService.getInstance();
    const scoringService = ScoringService.getInstance();

    const [savedAnswers, setSavedAnswers] = useState<[PropositionID,UserAnswer][]>([]);
    const refresh = useCallback(()=> setSavedAnswers(storageService.getAnswers() || []), []);
    useEffect(()=> refresh(), []);
    return (
        <div className="route-options">
            <h1>Options</h1>
            <pre>
                PROPOSITIONS :({Array.from(propositions).length})
                <ul>
                    {Array.from(propositions).map((p,i) => <li key={i}>{p.content}</li>)}
                </ul>
                {
                    savedAnswers.length === Array.from(propositions).length ? "ALL PROPOSITIONS ANSWERED" : "KEEP ANSWERING PROPOSALS"
                }
                <br/>
                <button onClick={()=> storageService.clear()}>Reset app</button>
                <button onClick={refresh}>Refresh answers</button>
            </pre>
        </div>
    );
}
