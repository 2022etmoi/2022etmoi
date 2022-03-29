import { candidates } from "../data/Candidates";
import { CandidateMock } from "../tests/mocks";
import { CandidateAnswer, CandidateID, PropositionID, UserAnswer } from "../types";
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

    it("how the set of questions differentiate candidates", function () {
        const ids = Object.keys(CandidateID);

        for (let i = 0; i < ids.length - 1; i ++) {
            const answers: [PropositionID, UserAnswer][] = [];
            const candidate = candidates.get(<CandidateID>ids[i]);
            expect(candidate).toBeDefined();
            if (candidate === undefined) return;

            candidate.opinion.forEach((answer, pid) => {
                switch (answer.value) {
                case CandidateAnswer.NO:
                    answers.push([pid, UserAnswer.NO]);
                    break;
                case CandidateAnswer.YES:
                    answers.push([pid, UserAnswer.YES]);
                    break;
                case CandidateAnswer.NEUTRAL:
                    break;
                }
            });

            for (let j = i + 1; j < ids.length; j ++) {
                const score = ScoringService.getInstance().computeScoreWithAnswers(candidates.get(<CandidateID>ids[j])!.opinion, answers);
                console.log(`${ids[i]} ${ids[j]} -> ${score.score}`);
            }
        }
    });
});
