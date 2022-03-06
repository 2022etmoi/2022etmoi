import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Melenchon = new Candidate(
    CandidateID.MELENCHON,
    "Jean-Luc Mélenchon",
    "L'Union Populaire",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS_ABROGER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.NO, "\"Le prix de l'énergie ne doit pas être déterminé par le marché. À court terme, il faut bloquer les prix dans le cadre d'une loi d'urgence sociale.\"")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.YES, "")],
    ]),
);
