import "./Table.scss";

import { useMemo } from "react";

import { Icon } from "../../components";
import { candidates } from "../../data/Candidates";
import { propositions } from "../../data/Propositions";
import { StorageService } from "../../services";
import {
    CandidateAnswer,
    CandidateID,
    presentableUserAnswer,
    PropositionID,
    smileyForUserAnswer,
    UserAnswer
} from "../../types";

/**
 * A route to display all answers.
 */
export function Table() {
    const candidatesNames = useMemo(() =>
        Object.keys(CandidateID).map(id => (
            <td className="route-table__wrapper__candidate"
                key={id}>{candidates.get(id as CandidateID)?.name ?? "‼️"}</td>))
    , []);

    const answers = StorageService.getInstance().getAnswers();

    const candidatesAnswers = useMemo(() =>
        propositions.map(p => [p.id, (
            <tr key={p.id}>
                <td className="table-content">{p.content}</td>
                {Object.keys(CandidateID).map(id => (
                    <td key={id} className="table-content">{answer(p.id, id as CandidateID)}</td>))}
            </tr>
        )])
    , []);

    function filterAnswers(answer: UserAnswer) {
        const ids = answers?.filter(v => v[1] === answer);
        const filteredAnswers = ids?.map(v => candidatesAnswers.filter(c => c[0] === v[0]));
        if (filteredAnswers === undefined) return [];
        if (filteredAnswers.length === 0) return [];
        return filteredAnswers.filter(a => a.length > 0).map(a => a[0][1]);
    }

    function tableSegment(answer: UserAnswer) {
        const ans = filterAnswers(answer);
        return ans.length > 0 ? (
            <div>
                <tr>
                    <td className="route-table__wrapper__section">
                        {smileyForUserAnswer(answer)} {presentableUserAnswer(answer)}
                    </td>
                    {candidatesNames}
                </tr>
                {filterAnswers(answer)}
            </div>
        ) : (<div className="noAnswers">Aucune réponse &quot;{presentableUserAnswer(answer)}&quot;.</div>);
    }

    return (
        <div className="route-table">
            <div className="route-table__wrapper">
                <table>
                    <tbody>
                        {tableSegment(UserAnswer.MUST)}
                        {tableSegment(UserAnswer.MUST_NOT)}
                        {tableSegment(UserAnswer.YES)}
                        {tableSegment(UserAnswer.NO)}
                        {tableSegment(UserAnswer.NEUTRAL)}
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
