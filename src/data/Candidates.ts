import {Candidate, CandidateID} from "../types/Candidate";

export const candidates: Set<Candidate> = new Set([
    new Candidate(
        CandidateID.C1,
        "Mouvement 1",
        "Candidat 1",
    ),
    new Candidate(
        CandidateID.C2,
        "Mouvement 2",
        "Candidat 2",
    ),
    new Candidate(
        CandidateID.C3,
        "Mouvement 3",
        "Candidat 3",
    ),
    new Candidate(
        CandidateID.C4,
        "Mouvement 4",
        "Candidat 4",
    ),
]);