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
    movement: string;
    name: string;
    opinion: Map<PropositionID, Answer>;

    constructor(id: CandidateID, movement: string, name: string, opinion: Map<PropositionID, Answer>) {
        this.id = id;
        this.movement = movement;
        this.name = name;
        this.opinion = opinion;
    }
}
