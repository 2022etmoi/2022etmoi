import { Answer } from "./Answer";
import { CandidateID } from "./Candidate";

export enum PropositionID {
    P1 = "P1",
    P2 = "P2",
    P3 = "P3",
    P4 = "P4",
}

export class Proposition {
    id: PropositionID;
    version: number;
    content: string;
    description: string;
    answers: Map<CandidateID, Answer>;

    constructor(id: PropositionID, version: number, content: string, description: string, answers: Map<CandidateID, Answer>) {
        this.id = id;
        this.version = version;
        this.content = content;
        this.description = content;
        this.answers = answers;
    }
}
