import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Jadot = new Candidate(
    CandidateID.JADOT,
    "Yannick Jadot",
    "Europe Écologie Les Verts",
    new Map([
        [PropositionID.EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "\"Un barème progressif sera appliqué qui permettra de baisser la fiscalité sur les petites successions et de l'augmenter pour les plus élevées.\" p. 27")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EPR, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LOGEMENT, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.BREVETS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LIBRE_ECHANGE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CLOUD, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PENALE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TRAITES, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CROISSANCE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.ECOLE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.NO, "\"Le propriétaire d'un gros 4x4 qui utilise beaucoup de carburant va beaucoup gagner avec ce type de mesure, alors que la personne qui a un petit véhicule gagnera peu.\" Source: francetvinfo.fr")],
    ]),
);