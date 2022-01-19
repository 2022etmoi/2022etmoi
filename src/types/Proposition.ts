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
    content: string;
    description: string;
    answers: Map<CandidateID, Answer>;
    revision: number;

    constructor(id: PropositionID, content: string, description: string, answers: Map<CandidateID, Answer>, revision = 1.0) {
        this.id = id;
        this.content = content;
        this.description = description;
        this.answers = answers;
        this.revision = revision;
    }
}
