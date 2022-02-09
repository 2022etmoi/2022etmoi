import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Pecresse = new Candidate(
    CandidateID.PECRESSE,
    "Valérie Pécresse",
    "Les Républicains",
    new Map([
        [PropositionID.EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EPR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LOGEMENT, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BREVETS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LIBRE_ECHANGE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CLOUD, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.NO, "")],
    ]),
);
