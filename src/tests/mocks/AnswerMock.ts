import { Answer, CandidateAnswer, UserAnswer } from "../../types";

export function RandomAnswerMock() {
    const r = Math.random();
    if (r < 0.4) {
        return new Answer(CandidateAnswer.YES, "reason");
    } else if (r < 0.8) {
        return new Answer(CandidateAnswer.NO, "reason");
    }
    return new Answer(CandidateAnswer.NEUTRAL, "reason");
}

export function RandomUserAnswerMock(): UserAnswer {
    const r = Math.random();
    if (r < 0.1) {
        return UserAnswer.MUST_NOT;
    } else if (r < 0.2) {
        return UserAnswer.MUST;
    } else if (r < 0.5) {
        return UserAnswer.NO;
    } else if (r < 0.8) {
        return UserAnswer.YES;
    }
    return UserAnswer.NEUTRAL;
}
