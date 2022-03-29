import "./Table.scss";

import { ReactElement, useCallback,useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

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
    id: string,
    answers: Map<PropositionID, JSX.Element>,
}

const NO_DATA: TableAnswers = {
    name: "Non sélectionné",
    id: "–",
    answers: new Map(),
};

interface Highlight {
    highlight: CandidateID;
}

/**
 * A route to display all answers.
 */
export function Table() {
    const candidatesNames = useMemo(() =>
        Object.keys(CandidateID).map(id => (
            <td className="route-table__wrapper__candidate large"
                key={id}>{candidates.get(id as CandidateID)?.name ?? "–"}</td>))
    , []);

    const [highlight, setHighlight] = useState("");
    const [c1Data, setC1Data] = useState(NO_DATA);
    const [c2Data, setC2Data] = useState(NO_DATA);

    const answers = StorageService.getInstance().getAnswers();

    const answer = useCallback((proposition: PropositionID, id: CandidateID) => {
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
    }, []);

    const candidatesAnswers = useMemo(() =>
        propositions.map(p => [p.id, (
            <tr key={p.id}>
                <td className="table-content proposition">{p.content}</td>
                {Object.keys(CandidateID).map(id => (
                    <td key={id}
                        className={"table-content answer large" + (id == highlight ? " highlight" : "")}>{answer(p.id, id as CandidateID)}</td>))}
                <td key="c1"
                    className={"table-content answer small" + (c1Data.id == highlight ? " highlight" : "")}>{c1Data.answers.get(p.id)}</td>
                <td key="c2"
                    className={"table-content answer small" + (c2Data.id == highlight ? " highlight" : "")}>{c2Data.answers.get(p.id)}</td>
            </tr>
        )])
    , [answer, c1Data.answers, c1Data.id, c2Data.answers, c2Data.id, highlight]);

    const filterAnswers = useCallback((answer: UserAnswer) => {
        const ids: [PropositionID, UserAnswer][] = [];
        answers?.filter(v => v[1] === answer)?.forEach(a => ids.push(a));
        if (answer == UserAnswer.NEUTRAL) {
            if (answers == undefined) {
                Object.keys(PropositionID)
                    .forEach(id => ids.push([id as PropositionID, UserAnswer.NEUTRAL]));
            } else {
                Object.keys(PropositionID)
                    .filter(k => ! answers?.map(a => a[0]).includes(k as PropositionID))
                    .forEach(id => ids.push([id as PropositionID, UserAnswer.NEUTRAL]));
            }
        }
        const filteredAnswers = ids?.map(v => candidatesAnswers.filter(c => c[0] === v[0]));
        if (filteredAnswers === undefined) return [];
        if (filteredAnswers.length === 0) return [];
        return filteredAnswers.filter(a => a.length > 0).map(a => a[0][1]);
    }, [answers, candidatesAnswers]);

    const tableSegment = useCallback((answer: UserAnswer) => {
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
        ) : (<div/>);
    }, [c1Data.name, c2Data.name, candidatesNames, filterAnswers]);

    const selectCandidate = useCallback((candidateName: string, c1: boolean) => {
        const selectedCandidate = Array.from(candidates.values()).filter(c => c.name === candidateName);
        if (selectedCandidate.length == 0) {
            c1 ? setC1Data(NO_DATA) : setC2Data(NO_DATA);
            return;
        }
        const answerMap = new Map<PropositionID, ReactElement>();
        selectedCandidate[0].opinion.forEach((ans, id) => answerMap.set(id, answer(id, selectedCandidate[0].id)));
        const newData: TableAnswers = {
            name: selectedCandidate[0].name,
            id: selectedCandidate[0].id,
            answers: answerMap,
        };
        c1 ? setC1Data(newData) : setC2Data(newData);
    }, [answer]);

    const location = useLocation();
    const data = location.state as Highlight;

    const getHighlightedValue = useCallback(()=> {
        if (highlight == "") return null;
        const name = Array.from(candidates.values()).filter(c => c.id === highlight);
        if (name.length > 0) {
            return name[0].name;
        }
    },[highlight]);

    useMemo(() => {
        if (data != null) {
            setHighlight(data.highlight);
            const name = getHighlightedValue();
            if (name != null) {
                selectCandidate(name, true);
            }
        }
    }, [data, getHighlightedValue, selectCandidate]);

    return (
        <div className="route-table">
            <div className="route-table__top">
                <h1>Synthèse</h1>
                <p>Visualisez les réponses des candidats aux propositions, classées selon vos réponses.</p>

                <p className="route-table__top__caption__line"><Icon file="yes"/> → le candidat est
                    <b>&nbsp;pour</b>.
                </p>
                <p className="route-table__top__caption__line"><Icon file="no"/> → le candidat est
                    <b>&nbsp;contre</b>.
                </p>
                <p className="route-table__top__caption__line"><Icon file="neutral"/> → le candidat
                    <b>&nbsp;ne se prononce pas&nbsp;</b>ou laissera le peuple trancher.
                </p>

                <div className="route-table__top__combos small">
                    Candidats à afficher :
                    <select name="Candidat #1" id="c1" value={getHighlightedValue() ?? ""}
                        onChange={x => selectCandidate(x.target.value, true)}>
                        <option value="none">Sélectionner un candidat :</option>
                        {Object.keys(CandidateID).map(id => (
                            <option key={id}>{candidates.get(id as CandidateID)!.name}</option>))}
                    </select>
                    <select name="Candidat #2" id="c2" onChange={x => selectCandidate(x.target.value, false)}>
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
