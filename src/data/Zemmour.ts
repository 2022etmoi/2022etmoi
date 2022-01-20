import {Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Zemmour = new Candidate(
    CandidateID.ZEMMOUR,
    "Éric Zemmour",
    "Reconquête !",
    new Map([
        [PropositionID.EOLIENNE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EPR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LOGEMENT, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.PASS, new Answer(CandidateAnswer.YES, "")],
    ]),
);
