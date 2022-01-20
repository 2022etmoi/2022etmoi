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
    ]),
);
