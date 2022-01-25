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

export function presentableUserAnswer(answer: UserAnswer) {
    switch (answer) {
    case UserAnswer.MUST_NOT:
        return "Vraiment contre";
    case UserAnswer.NO:
        return "Contre";
    case UserAnswer.SKIP:
        return "Ne se prononce pas";
    case UserAnswer.YES:
        return "Pour";
    case UserAnswer.MUST:
        return "Vraiment pour";
    }
}

export function presentableCandidateAnswer(answer: CandidateAnswer) {
    switch (answer) {
    case CandidateAnswer.NO:
        return "Contre";
    case CandidateAnswer.YES:
        return "Pour";
    case CandidateAnswer.SKIP:
        return "Ne se prononce pas";
    }
}

export class Answer {
    value: CandidateAnswer;
    reason: string;

    constructor(value: CandidateAnswer, reason = "") {
        this.value = value;
        this.reason = reason;
    }
}
