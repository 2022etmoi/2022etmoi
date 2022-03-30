import { useCallback } from "react";

import { candidates } from "../../data/Candidates";
import { CandidateID } from "../../types";

export function PhotoCredits () {
    const creditForCandidate = useCallback((candidateID: CandidateID)=> {
        const candidate = candidates.get(candidateID);
        return <li key={candidate?.id}><b>{candidate?.name}</b>: {candidate?.photoCredit}</li>;
    }, []);

    return (
        <ul>
            {
                (Object.keys(CandidateID) as Array<keyof typeof CandidateID>).map((candidateID) => creditForCandidate(candidateID as CandidateID))
            }
        </ul>
    );
}
