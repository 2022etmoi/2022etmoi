import { Candidate, CandidateID, PropositionID } from "../../types";
import { getMockAnswer } from "./AnswerMock";

const mockAnswers = new Map();
for (const id in PropositionID) {
    mockAnswers.set(id, getMockAnswer());
}

export const CandidateMock: Candidate = new Candidate(
    CandidateID.ZEMMOUR,
    "foo",
    "bar",
    mockAnswers,
);
