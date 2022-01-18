import { Proposition, PropositionID } from "../../types";
import { CandidateID } from "../../types/Candidate";
import { AnswerMock } from "./AnswerMock";

export const PropositionMock: Proposition = new Proposition(
    PropositionID.P1,
    "Proposition content",
    "Proposition description",
    new Map([[CandidateID.C1, AnswerMock]])
);
