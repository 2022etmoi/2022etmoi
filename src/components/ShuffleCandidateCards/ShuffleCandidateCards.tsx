import { useCallback,useEffect, useMemo, useRef, useState } from "react";

import { RandomScoreMock } from "../../tests/mocks";
import { CandidateID } from "../../types";
import { CandidateScore } from "../CandidateScore";

interface ShuffleCandidateCardsProps {
    /** The interval (ms) between two cards */
    interval: number
}

/**
 * A component to show a random candidate card
 * @returns a random candidate card
 */
export function ShuffleCandidateCards({ interval }: ShuffleCandidateCardsProps) {
    const baseList = useMemo(()=> Array.from(Object.keys(CandidateID)) as CandidateID[], []);
    const remainingCandidates = useRef(baseList);

    const [candidateID, setCandidateID] = useState("");

    useEffect(()=> console.log(remainingCandidates.current), []);

    const render = useCallback(()=> {
        // Pick candidate inside remaining candidates or reset list to its default state
        const list = remainingCandidates.current.length > 0 ? Array.from(remainingCandidates.current) : Array.from(baseList);
        const index = Math.floor(Math.random() * list.length);
        setCandidateID(list[index]);
        remainingCandidates.current = list.filter((c, i) => i !== index );
    }, [baseList]);

    useEffect(()=> {
        render();
        const i = setInterval(()=>  render(), interval);
        return () => clearInterval(i);
    }, [baseList, interval, render]);

    return <CandidateScore key={candidateID} candidateID={candidateID} score={RandomScoreMock()} />;
}
