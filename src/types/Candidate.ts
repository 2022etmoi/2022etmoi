import { Answer, PropositionID } from ".";

/**
 * The full list of shown Candidates.
 */
export enum CandidateID {
    ARTHAUD = "ARTHAUD",
    DUPONT_AIGNAN = "DUPONT_AIGNAN",
    HIDALGO = "HIDALGO",
    JADOT = "JADOT",
    LASSALLE = "LASSALLE",
    LE_PEN = "LE_PEN",
    MACRON = "MACRON",
    MELENCHON = "MELENCHON",
    PECRESSE = "PECRESSE",
    POUTOU = "POUTOU",
    ROUSSEL = "ROUSSEL",
    ZEMMOUR = "ZEMMOUR",
}

/**
 * Represents a Candidate.
 */
export class Candidate {
    id: CandidateID;
    name: string;
    movement: string;
    twitter: string;
    program: string;
    opinion: Map<PropositionID, Answer>;
    photoCredit: string;

    constructor(id: CandidateID, name: string, movement: string, twitter: string, program: string, opinion: Map<PropositionID, Answer>,  photoCredit: string) {
        this.id = id;
        this.movement = movement;
        this.name = name;
        this.twitter = twitter;
        this.program = program;
        this.opinion = opinion;
        this.photoCredit = photoCredit;
    }
}
