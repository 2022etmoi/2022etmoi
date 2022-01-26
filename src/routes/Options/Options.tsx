import "./Options.scss";

import { useCallback, useEffect, useState } from "react";

import { Button } from "../../components";
import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services/";
import { PropositionID, UserAnswer } from "../../types";

/**
 * A route to display options.
 */
export function Options() {

    const storageService = StorageService.getInstance();

    const [savedAnswers, setSavedAnswers] = useState<[PropositionID, UserAnswer][]>([]);
    const refresh = useCallback(() => setSavedAnswers(storageService.getAnswers() || []), [storageService]);
    useEffect(() => refresh(), [refresh]);
    return (
        <div className="route-options">
            <header>
                <h1>Options</h1>
            </header>
            <div className="route-options__wrapper">
                <div className="option-card">
                    <pre>
                PROPOSITIONS :({Array.from(propositions).length})
                        <ul>
                            {Array.from(propositions).map((p,i) => <li key={i}>{p.content}</li>)}
                        </ul>
                        {
                            savedAnswers.length === Array.from(propositions).length ? "ALL PROPOSITIONS ANSWERED" : "KEEP ANSWERING PROPOSALS"
                        }
                    </pre>
                </div>
                <Button onClick={refresh}>Refresh answers</Button>
                <Button type="secondary" onClick={()=> storageService.clear()}>Reset app</Button>
            </div>
        </div>
    );
}
