import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const LePen = new Candidate(
    CandidateID.LE_PEN,
    "Marine Le Pen",
    "Rassemblement National",
    new Map([
        [PropositionID.EOLIENNE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EPR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LOGEMENT, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BREVETS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LIBRE_ECHANGE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CLOUD, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.PENALE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.TRAITES, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.CROISSANCE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ECOLE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.GUERRE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.YES, "\"Baisser la TVA de 20% à 5.5% sur les produits énergétiques (carburants, fioul, gaz et électricité) en tant que biens de première nécessité.\"")],
    ]),
);
