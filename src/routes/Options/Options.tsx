import "./Options.scss";

import { useCallback, useEffect, useState } from "react";

import { Button } from "../../components";
import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services/";
import { PropositionID, UserAnswer } from "../../types";

// interface OptionsProps {
//
// }

/**
 * A route to display options.
 */
export function Options() {

    const storageService = StorageService.getInstance();

    const [savedAnswers, setSavedAnswers] = useState<[PropositionID, UserAnswer][]>([]);
    const refresh = useCallback(() => setSavedAnswers(storageService.getAnswers() || []), []);
    useEffect(() => refresh(), []);
    return (
        <div className="route-options">
            <h1>Options</h1>
            <div className="option-card">
                <pre>
                PROPOSITIONS :({Array.from(propositions).length})
                    <ul>
                        {Array.from(propositions).map((p,i) => <li key={i}>{p.content}</li>)}
                    </ul>
                    {
                        savedAnswers.length === Array.from(propositions).length ? "ALL PROPOSITIONS ANSWERED" : "KEEP ANSWERING PROPOSALS"
                    }
                    <br/>
                    <Button onClick={refresh}>Refresh answers</Button>
                    <br/>
                    <Button type="secondary" onClick={()=> storageService.clear()}>Reset app</Button>
                </pre>
            </div>
        </div>
    );
}
