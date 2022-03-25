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

    it("the set of questions should differentiate candidates", function () {
        const AGREE_LIMIT = 91;
        Object.keys(CandidateID).forEach(id => {
            const answers: [PropositionID, UserAnswer][] = [];
            const candidate = candidates.get(<CandidateID>id);
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

            Object.keys(CandidateID).forEach(id2 => {
                if (id !== id2) {
                    const score = ScoringService.getInstance().computeScoreWithAnswers(candidates.get(<CandidateID>id2)!.opinion, answers);
                    console.log(`${id} ${id2} -> ${score.score}`);
                    if (score.score > AGREE_LIMIT) {
                        throw new Error(`${id} / ${id2} -> ${score.score} (> ${AGREE_LIMIT})`);
                    }
                }
            });
        });
    });
});
