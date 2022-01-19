import "./App.scss";

import { PropositionCard } from "./components";
import { propositions } from "./data/Propositions";
import { computeScores } from "./services/scores";


function App() {

    console.log(computeScores([1, 1, 2], [[1, - 1, 1]]));

    return (
        <div className="app">
            {
                Array.from(propositions).map(proposition => (
                    <PropositionCard key={proposition.id} proposition={proposition}/>
                ))
            }
        </div>
    );
}

export default App;
