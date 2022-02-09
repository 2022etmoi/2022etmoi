import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Roussel = new Candidate(
    CandidateID.ROUSSEL,
    "Fabien Roussel",
    "PCF",
    new Map([
        [PropositionID.EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.YES, "\"Mettre un point final au présidentialisme\", page 107")],
        [PropositionID.EPR, new Answer(CandidateAnswer.YES, "Proposition 53, page 55")],
        [PropositionID.LOGEMENT, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "Proposition 173, page 125")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "Proposition 127, page 100")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "Proposition 33, page 43")],
        [PropositionID.BREVETS, new Answer(CandidateAnswer.YES, "Proposition 153, page 120")],
        [PropositionID.LIBRE_ECHANGE, new Answer(CandidateAnswer.YES, "Proposition 64, page 60")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "Proposition 93, page 81")],
        [PropositionID.SOINS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.YES, "Proposition 9, page 20")],
        [PropositionID.CLOUD, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.NEUTRAL, "")],
    ]),
);
