export enum CandidateAnswer {
    NO = "NO",
    YES = "YES",
    SKIP = "SKIP",
}

export enum UserAnswer {
    MUST_NOT = "MUST_NOT",
    NO = "NO",
    SKIP = "SKIP",
    YES = "YES",
    MUST = "MUST",
}

export class Answer {
    value: CandidateAnswer;
    reason: string;

    constructor(value: CandidateAnswer, reason = "") {
        this.value = value;
        this.reason = reason;
    }
}
