import { Candidate, CandidateID, PropositionID } from "../../types";
import { RandomAnswerMock } from "./AnswerMock";

const mockAnswers = new Map();
for (const id in PropositionID) {
    mockAnswers.set(id, RandomAnswerMock());
}

export const CandidateMock: Candidate = new Candidate(
    CandidateID.ZEMMOUR,
    "foo",
    "bar",
    "@yopoxdev",
    "https://www.2022etmoi.fr",
    mockAnswers,
    "credit"
);
