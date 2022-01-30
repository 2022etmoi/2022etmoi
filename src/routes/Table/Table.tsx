import "./Table.scss";

import { candidates } from "../../data/Candidates";
import { propositions } from "../../data/Propositions";
import { CandidateAnswer, CandidateID, PropositionID } from "../../types";

/**
 * A route to display all answers.
 */
export function Table() {
    return (
        <div className="route-table">
            <header>
                <h1>Table</h1>
            </header>
            <div className="route-table__wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Proposition</th>
                            {Object.keys(CandidateID).map(id => (
                                <th className="route-table__wrapper__candidate"
                                    key={id}>{candidates.get(id as CandidateID)?.name ?? "‼️"}</th>))}
                        </tr>
                    </thead>
                    {propositions.map(p => (
                        <tbody key={p.id}>
                            <tr>
                                <td>{p.content}</td>
                                {Object.keys(CandidateID).map(id => (<td key={id}>{answer(p.id, id as CandidateID)}</td>))}
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
}

enum TableAnswer {
    YES = "🟢",
    NO = "🔴",
    NEUTRAL = "🤐️",
    MISSING = "⚠️",
}

function answer(proposition: PropositionID, id: CandidateID) {
    const candidate = candidates.get(id);
    if (candidate === undefined) return TableAnswer.MISSING;

    const answer = candidate.opinion.get(proposition);
    if (answer === undefined) return TableAnswer.MISSING;

    switch (answer.value) {
    case CandidateAnswer.NO:
        return TableAnswer.NO;
    case CandidateAnswer.YES:
        return TableAnswer.YES;
    case CandidateAnswer.NEUTRAL:
        return TableAnswer.NEUTRAL;
    }
}
