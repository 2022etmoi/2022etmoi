import { Answer, CandidateAnswer } from "../../types";

export function getMockAnswer() {
    const r = Math.random();
    if (r < 0.4) {
        return new Answer(CandidateAnswer.YES, "reason");
    } else if (r < 0.8) {
        return new Answer(CandidateAnswer.NO, "reason");
    }
    return new Answer(CandidateAnswer.NEUTRAL, "reason");
}
