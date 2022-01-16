export enum CandidateAnswer {
    NO,
    YES,
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

    constructor(value: CandidateAnswer, reason: string = "") {
        this.value = value;
        this.reason = reason;
    }
}