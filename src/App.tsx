import { useCallback, useEffect, useState } from "react";
import "./App.scss";

import { PropositionCard } from "./components";
import { propositions } from "./data/Propositions";
import { ScoringService, StorageService } from "./services/";
import { PropositionID, UserAnswer } from "./types";

function App() {
    const storageService = StorageService.getInstance();
    const scoringService = ScoringService.getInstance();

    console.log("score:", scoringService.computeScores([1, 1, 2], [[1, - 1, 1]]));

    const [savedAnswers, setSavedAnswers] = useState<[PropositionID,UserAnswer][]>([]);
    const refresh = useCallback(()=> setSavedAnswers(storageService.getAnswers() || []), []);
    useEffect(()=> refresh(), []);

    return (
        <div className="app">
            {
                Array.from(propositions).map(proposition => (
                    <PropositionCard key={proposition.id} proposition={proposition}/>
                ))
            }
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

export default App;
