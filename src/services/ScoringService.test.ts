import { CandidateMock } from "../tests/mocks";
import { CandidateAnswer, PropositionID, UserAnswer } from "../types";
import { ScoringService } from "./ScoringService";

describe("scoring-service", () => {
    let service: ScoringService;

    beforeEach(() => {
        service = ScoringService.getInstance();
    });

    it("should return the instance", () => {
        expect(service).toBeInstanceOf(ScoringService);
    });

    it("should get 100% score", function () {
        const userAnswers: [PropositionID, UserAnswer][] = [];

        CandidateMock.opinion.forEach((value, key) => {
            switch (value.value) {
            case CandidateAnswer.NO:
                userAnswers.push([key, Math.random() < 0.5 ? UserAnswer.NO : UserAnswer.MUST_NOT]);
                break;
            case CandidateAnswer.YES:
                userAnswers.push([key, Math.random() < 0.5 ? UserAnswer.YES : UserAnswer.MUST]);
                break;
            case CandidateAnswer.NEUTRAL:
                userAnswers.push([key, UserAnswer.NEUTRAL]);
                break;
            }
        });

        const score = service.computeScoreWithAnswers(CandidateMock.opinion, userAnswers);
        expect(score.score).toStrictEqual(100);
    });

    it("should get 0% score", function () {
        const userAnswers: [PropositionID, UserAnswer][] = [];

        CandidateMock.opinion.forEach((value, key) => {
            switch (value.value) {
            case CandidateAnswer.YES:
                userAnswers.push([key, Math.random() < 0.5 ? UserAnswer.NO : UserAnswer.MUST_NOT]);
                break;
            case CandidateAnswer.NO:
                userAnswers.push([key, Math.random() < 0.5 ? UserAnswer.YES : UserAnswer.MUST]);
                break;
            case CandidateAnswer.NEUTRAL:
                userAnswers.push([key, UserAnswer.NEUTRAL]);
                break;
            }
        });

        const score = service.computeScoreWithAnswers(CandidateMock.opinion, userAnswers);
        expect(score.score).toStrictEqual(0);
    });

    it("should get 50% score", function () {
        const userAnswers: [PropositionID, UserAnswer][] = [];

        CandidateMock.opinion.forEach((value, key) => {
            userAnswers.push([key, UserAnswer.NEUTRAL]);
        });

        const score = service.computeScoreWithAnswers(CandidateMock.opinion, userAnswers);
        expect(score.score).toStrictEqual(50);
    });
});
