export enum CandidateAnswer {
    NO,
    YES,
    SKIP
}

export enum UserAnswer {
    MUST_NOT,
    NO,
    SKIP,
    YES,
    MUST,
}

export class Answer {
    value: CandidateAnswer;
    reason: string;

    constructor(value: CandidateAnswer, reason = "") {
        this.value = value;
        this.reason = reason;
    }
}
