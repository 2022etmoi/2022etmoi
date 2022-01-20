import { Answer, PropositionID } from ".";

export enum CandidateID {
    MELENCHON = "MELENCHON",
    HIDALGO = "HIDALGO",
    PECRESSE = "PECRESSE",
    LE_PEN = "LE_PEN",
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
