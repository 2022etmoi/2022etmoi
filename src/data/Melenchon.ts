import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Melenchon = new Candidate(
    CandidateID.MELENCHON,
    "Jean-Luc Mélenchon",
    "L'Union Populaire",
    new Map([
        [PropositionID.EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.EPR, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LOGEMENT, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BREVETS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LIBRE_ECHANGE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CLOUD, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
    ]),
);
