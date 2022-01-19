import {Answer, Candidate, CandidateAnswer, CandidateID, PropositionID} from "../types";
import { candidates } from "./Candidates";

export var Hidalgo = new Candidate(
    CandidateID.HIDALGO,
    "Anne Hidalgo",
    "Parti Socialiste",
    new Map([
            [PropositionID.EOLIENNE, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "")],
            [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.EPR, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.LOGEMENT, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.PASS, new Answer(CandidateAnswer.NO, "")],
    ]),
);