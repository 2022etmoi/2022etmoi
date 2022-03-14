/**
 * The full list of Candidates possible answers.
 */
export enum CandidateAnswer {
    NO = "NO",
    YES = "YES",
    NEUTRAL = "NEUTRAL",
}

/**
 * The full list of User possible answers.
 */
export enum UserAnswer {
    MUST_NOT = "MUST_NOT",
    NO = "NO",
    NEUTRAL = "NEUTRAL",
    YES = "YES",
    MUST = "MUST",
}

export function presentableUserAnswer(answer: UserAnswer) {
    switch (answer) {
    case UserAnswer.MUST_NOT:
        return "Vraiment contre";
    case UserAnswer.NO:
        return "Contre";
    case UserAnswer.NEUTRAL:
        return "Ne se prononce pas";
    case UserAnswer.YES:
        return "Pour";
    case UserAnswer.MUST:
        return "Vraiment pour";
    }
}

export function smileyForUserAnswer(answer: UserAnswer) {
    switch (answer) {
    case UserAnswer.MUST_NOT:
        return "😡";
    case UserAnswer.NO:
        return "👎";
    case UserAnswer.YES:
        return "👍";
    case UserAnswer.MUST:
        return "❤️";
    case UserAnswer.NEUTRAL:
        return "";
    }
}

export function smileyForAgreements(agree: boolean) {
    return agree ? "😍" : "❌";
}

export function presentableCandidateAnswer(answer: CandidateAnswer) {
    switch (answer) {
    case CandidateAnswer.NO:
        return "Contre";
    case CandidateAnswer.YES:
        return "Pour";
    case CandidateAnswer.NEUTRAL:
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
