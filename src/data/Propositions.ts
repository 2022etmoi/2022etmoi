import {Answer, CandidateAnswer, CandidateID , Proposition, PropositionID} from "../types";

export const propositions: Set<Proposition> = new Set([
    new Proposition(
        PropositionID.P1,
        1,
        "Proposition 1",
        "Description 1",
        new Map([
            [CandidateID.C1, new Answer(CandidateAnswer.YES, "")],
            [CandidateID.C2, new Answer(CandidateAnswer.YES, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.NO, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.NO, "")],
        ]),
    ),
    new Proposition(
        PropositionID.P2,
        1,
        "Proposition 2",
        "Description 2",
        new Map([
            [CandidateID.C1, new Answer(CandidateAnswer.YES, "")],
            [CandidateID.C2, new Answer(CandidateAnswer.NO, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.YES, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.NO, "")],
        ]),
    ),
    new Proposition(
        PropositionID.P3,
        1,
        "Proposition 3",
        "Description 3",
        new Map([
            [CandidateID.C1, new Answer(CandidateAnswer.NO, "")],
            [CandidateID.C2, new Answer(CandidateAnswer.NO, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.NO, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.YES, "")],
        ]),
    ),
    new Proposition(
        PropositionID.P4,
        1,
        "Proposition 4",
        "Description 4",
        new Map([
            [CandidateID.C1, new Answer(CandidateAnswer.NO, "")],
            [CandidateID.C2, new Answer(CandidateAnswer.YES, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.YES, "")],
            [CandidateID.C3, new Answer(CandidateAnswer.YES, "")],
        ]),
    ),
]);
