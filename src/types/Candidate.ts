export enum CandidateID {
    C1,
    C2,
    C3,
    C4,
}

export class Candidate {
    id: CandidateID;
    movement: string;
    name: string;

    constructor(id: CandidateID, movement: string, name: string) {
        this.id = id;
        this.movement = movement;
        this.name = name;
    }
}