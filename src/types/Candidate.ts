import { Answer, PropositionID } from ".";

export enum CandidateID {
    HIDALGO = "HIDALGO",
    LE_PEN = "LE_PEN",
    MELENCHON = "MELENCHON",
    PECRESSE = "PECRESSE",
    ROUSSEL = "ROUSSEL",
    ZEMMOUR = "ZEMMOUR",
}

export class Candidate {
    id: CandidateID;
    name: string;
    movement: string;
    opinion: Map<PropositionID, Answer>;

    constructor(id: CandidateID, name: string, movement: string, opinion: Map<PropositionID, Answer>) {
        this.id = id;
        this.movement = movement;
        this.name = name;
        this.opinion = opinion;
    }
}
