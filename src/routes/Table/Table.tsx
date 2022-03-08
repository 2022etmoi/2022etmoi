import "./Table.scss";

import { useMemo } from "react";

import { Icon } from "../../components";
import { candidates } from "../../data/Candidates";
import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services";
import { CandidateAnswer, CandidateID, PropositionID, UserAnswer } from "../../types";

/**
 * A route to display all answers.
 */
export function Table() {
    const candidatesNames = useMemo(() =>
        Object.keys(CandidateID).map(id => (
            <th className="route-table__wrapper__candidate"
                key={id}>{candidates.get(id as CandidateID)?.name ?? "‼️"}</th>))
    , []);

    const answers = StorageService.getInstance().getAnswers();

    const candidatesAnswers = useMemo(() =>
        propositions.map(p => [p.id, (
            <tr key={p.id}>
                <td>{p.content}</td>
                {Object.keys(CandidateID).map(id => (<td key={id}>{answer(p.id, id as CandidateID)}</td>))}
            </tr>
        )])
    , []);

    function filterAnswers(answer: UserAnswer) {
        const ids = answers?.filter(v => v[1] === answer);
        const filteredAnswers = ids?.map(v => candidatesAnswers.filter(c => c[0] === v[0]));
        if (filteredAnswers === undefined) return null;
        if (filteredAnswers.length === 0) return null;
        return filteredAnswers.filter(a => a.length > 0).map(a => a[0][1]);
    }

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
                            {candidatesNames}
                        </tr>
                    </thead>
                    <tbody>
                        <div className="route-table__wrapper__section">Vraiment pour</div>
                        {filterAnswers(UserAnswer.MUST)}
                        <div className="route-table__wrapper__section">Vraiment contre</div>
                        {filterAnswers(UserAnswer.MUST_NOT)}
                        <div className="route-table__wrapper__section">Pour</div>
                        {filterAnswers(UserAnswer.YES)}
                        <div className="route-table__wrapper__section">Contre</div>
                        {filterAnswers(UserAnswer.NO)}
                        <div className="route-table__wrapper__section">Ne se prononce pas</div>
                        {filterAnswers(UserAnswer.NEUTRAL)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function answer(proposition: PropositionID, id: CandidateID) {
    const candidate = candidates.get(id);
    if (candidate === undefined) return (<Icon file="neutral"/>);

    const answer = candidate.opinion.get(proposition);
    if (answer === undefined) return (<Icon file="neutral"/>);

    switch (answer.value) {
    case CandidateAnswer.NO:
        return (<Icon file="no"/>);
    case CandidateAnswer.YES:
        return (<Icon file="yes"/>);
    case CandidateAnswer.NEUTRAL:
        return (<Icon file="neutral"/>);
    }
}
