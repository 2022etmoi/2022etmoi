import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

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
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BREVETS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LIBRE_ECHANGE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SOINS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CLOUD, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
    ]),
);
