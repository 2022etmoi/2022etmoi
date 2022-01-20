import { PropositionID } from "../../types";
import {Candidate, CandidateID } from "../../types/Candidate";
import { AnswerMock } from "./AnswerMock";

export const CandidateMock: Candidate = new Candidate(
    CandidateID.ZEMMOUR,
    "foo",
    "bar",
    new Map([
        [PropositionID.EOLIENNE, AnswerMock]
    ]),
);
