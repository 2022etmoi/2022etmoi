enum CandidateID {
    C1,
    C2,
    C3,
    C4,
}

interface Candidate {
    id: CandidateID,
    movement: string,
    name: string,
    answers: Map<PropositionID, Answer>,
}