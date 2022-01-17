import { Answer } from "./Answer";
import { CandidateID } from "./Candidate";

export enum PropositionID {
    P1,
    P2,
    P3,
    P4,
}

export class Proposition {
    id: PropositionID;
    content: string;
    description: string;
    answers: Map<CandidateID, Answer>;

    constructor(id: PropositionID, content: string, description: string, answers: Map<CandidateID, Answer>) {
        this.id = id;
        this.content = content;
        this.description = content;
        this.answers = answers;
    }
}
