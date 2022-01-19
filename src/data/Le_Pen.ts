import {Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";
import { candidates } from "./Candidates";

export var LePen = new Candidate(
    CandidateID.LE_PEN,
    "Marine Le Pen",
    "Rassemblement National",
    new Map([
            [PropositionID.EOLIENNE, new Answer(CandidateAnswer.SKIP, "")],
            [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.YES, "")],
            [PropositionID.SMIC, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.EPR, new Answer(CandidateAnswer.YES, "")],
            [PropositionID.LOGEMENT, new Answer(CandidateAnswer.NO, "")],
            [PropositionID.PASS, new Answer(CandidateAnswer.YES, "")],
    ]),
);