import { ScoringService } from "../../services";
import { PropositionID, Score, UserAnswer } from "../../types";
import { RandomAnswerMock, RandomUserAnswerMock } from "./AnswerMock";

export const ScoreMock = new Score();

export function RandomScoreMock(): Score {
    const candidateAnswers = new Map();
    const userAnswers: [PropositionID, UserAnswer][] = [];

    Object.keys(PropositionID).forEach(id => {
        candidateAnswers.set(id, RandomAnswerMock());
        userAnswers.push([id as PropositionID, RandomUserAnswerMock()]);
    });

    return ScoringService.getInstance().computeScoreWithAnswers(candidateAnswers, userAnswers);
}
