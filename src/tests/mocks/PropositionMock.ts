import { Proposition, PropositionID } from "../../types";
import { CandidateID } from "../../types/Candidate";
import { AnswerMock } from "./AnswerMock";

export const PropositionMock: Proposition = new Proposition(
    PropositionID.SMIC,
    "Proposition content",
    "Proposition description",
);
