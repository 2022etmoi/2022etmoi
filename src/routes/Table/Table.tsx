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
                    <tbody>
                        <tr>
                            <td className="route-table__wrapper__section">
                                {smileyForUserAnswer(UserAnswer.MUST)} {presentableUserAnswer(UserAnswer.MUST)}
                            </td>
                            {candidatesNames}
                        </tr>
                        {filterAnswers(UserAnswer.MUST)}

                        <tr>
                            <td className="route-table__wrapper__section">
                                {smileyForUserAnswer(UserAnswer.MUST_NOT)} {presentableUserAnswer(UserAnswer.MUST_NOT)}
                            </td>
                            {candidatesNames}
                        </tr>
                        {filterAnswers(UserAnswer.MUST_NOT)}

                        <tr>
                            <td className="route-table__wrapper__section">
                                {smileyForUserAnswer(UserAnswer.YES)} {presentableUserAnswer(UserAnswer.YES)}
                            </td>
                            {candidatesNames}
                        </tr>
                        {filterAnswers(UserAnswer.YES)}

                        <tr>
                            <td className="route-table__wrapper__section">
                                {smileyForUserAnswer(UserAnswer.NO)} {presentableUserAnswer(UserAnswer.NO)}
                            </td>
                            {candidatesNames}
                        </tr>
                        {filterAnswers(UserAnswer.NO)}

                        <tr>
                            <td className="route-table__wrapper__section">
                                {smileyForUserAnswer(UserAnswer.NEUTRAL)} {presentableUserAnswer(UserAnswer.NEUTRAL)}
                            </td>
                            {candidatesNames}
                        </tr>
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
