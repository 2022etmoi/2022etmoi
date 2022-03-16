import "./Table.scss";

import React, { ReactElement, useMemo, useState } from "react";

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

interface TableAnswers {
    name: string,
    answers: Map<PropositionID, JSX.Element>,
}

const NO_DATA: TableAnswers = {
    name: "Non sélectionné",
    answers: new Map(),
};

/**
 * A route to display all answers.
 */
export function Table() {
    const candidatesNames = useMemo(() =>
        Object.keys(CandidateID).map(id => (
            <td className="route-table__wrapper__candidate large"
                key={id}>{candidates.get(id as CandidateID)?.name ?? "–"}</td>))
    , []);

    const [c1Data, setC1Data] = useState(NO_DATA);
    const [c2Data, setC2Data] = useState(NO_DATA);

    const answers = StorageService.getInstance().getAnswers();

    const candidatesAnswers = useMemo(() =>
        propositions.map(p => [p.id, (
            <tr key={p.id}>
                <td className="table-content proposition">{p.content}</td>
                {Object.keys(CandidateID).map(id => (
                    <td key={id} className="table-content answer large">{answer(p.id, id as CandidateID)}</td>))}
                <td key="c1" className="table-content answer small">{c1Data.answers.get(p.id)}</td>
                <td key="c2" className="table-content answer small">{c2Data.answers.get(p.id)}</td>
            </tr>
        )])
    , [c1Data, c2Data]);

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
            <>
                <tr>
                    <td className="route-table__wrapper__section">
                        {smileyForUserAnswer(answer)} {presentableUserAnswer(answer)}
                    </td>
                    {candidatesNames}
                    <td className="route-table__wrapper__candidate small" key="c1_name" id="c1_name">{c1Data.name}</td>
                    <td className="route-table__wrapper__candidate small" key="c2_name" id="c2_name">{c2Data.name}</td>
                </tr>
                {filterAnswers(answer)}
            </>
        ) : (<div className="noAnswers">Aucune réponse &quot;{presentableUserAnswer(answer)}&quot;.</div>);
    }

    function selectCandidate(event: React.ChangeEvent<HTMLSelectElement>, c1: boolean) {
        const selectedCandidate = Array.from(candidates.values()).filter(c => c.name === event.target.value);
        if (selectedCandidate.length == 0) {
            c1 ? setC1Data(NO_DATA) : setC2Data(NO_DATA);
            return;
        }
        const candidate = selectedCandidate[0];
        const answerMap = new Map<PropositionID, ReactElement>();
        candidate.opinion.forEach((ans, id) => answerMap.set(id, answer(id, candidate.id)));
        const newData: TableAnswers = {
            name: candidate.name,
            answers: answerMap,
        };
        c1 ? setC1Data(newData) : setC2Data(newData);
    }

    return (
        <div className="route-table">
            <div className="route-table__top">
                <h1>Synthèse</h1>
                <p>Visualisez les réponses des candidats aux propositions, classées selon vos réponses.</p>

                <div className="route-table__top__caption">
                    <div className="route-table__top__caption__line"><Icon file="yes"/> signifie que le candidat est
                        pour.
                    </div>
                    <div className="route-table__top__caption__line"><Icon file="no"/> signifie que le candidat est
                        contre.
                    </div>
                    <div className="route-table__top__caption__line"><Icon file="neutral"/> signifie que le candidat ne
                        se prononce pas ou laissera le peuple trancher.
                    </div>
                </div>

                <div className="route-table__top__combos small">
                    Candidats à afficher :
                    <select name="Candidat #1" id="c1" onChange={x => selectCandidate(x, true)}>
                        <option value="none">Sélectionner un candidat :</option>
                        {Object.keys(CandidateID).map(id => (
                            <option key={id}>{candidates.get(id as CandidateID)!.name}</option>))}
                    </select>
                    <select name="Candidat #2" id="c2" onChange={x => selectCandidate(x, false)}>
                        <option value="none">Sélectionner un candidat :</option>
                        {Object.keys(CandidateID).map(id => (
                            <option key={id}>{candidates.get(id as CandidateID)!.name}</option>))}
                    </select>
                </div>

            </div>
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
