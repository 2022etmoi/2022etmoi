import { Answer, CandidateAnswer, PropositionID, UserAnswer } from "../types";
import { StorageService } from "./StorageService";

const CandidateValues = new Map([
    [CandidateAnswer.NO, - 1],
    [CandidateAnswer.SKIP, 0],
    [CandidateAnswer.YES, 1],
]);

const UserValues = new Map([
    [UserAnswer.MUST_NOT, - 2],
    [UserAnswer.NO, - 1],
    [UserAnswer.SKIP, 0],
    [UserAnswer.YES, 1],
    [UserAnswer.MUST, 2],
]);

/**
 * A service to manage scoring.
 */
export class ScoringService {

    private static instance?: ScoringService;

    /**
     * A static method to retrieve the singleton instance of this service.
     * If the instance doesn't exist, the singleton will initialize.
     * @returns The ScoringService instance.
     */
    static getInstance(): ScoringService {
        if (! ScoringService.instance) {
            ScoringService.instance = new ScoringService();
        }
        return ScoringService.instance;
    }

    /**
     * Compute the score of a candidate using answers stored in the local storage.
     * @param candidate Opinions of the candidate
     */
    public computeScore(candidate: Map<PropositionID, Answer>) {
        // public computeOneScore(myscores: number[], candidate: number[]) {

        const storageService = StorageService.getInstance();
        const answers = storageService.getAnswers();

        console.log(candidate.keys());
        console.log(answers);

        if (answers == undefined) return null;

        const abs = Math.abs;
        const sign = Math.sign;
        let norm = 0;
        let sum = 0;
        // let nonzero = 0;

        candidate.forEach((value, key) => {
            const userAnswer = answers.filter(a => a[0] == key)[0];
            console.log(userAnswer);
            if (userAnswer != undefined) {
                const m = UserValues.get(userAnswer[1])!;
                const c = CandidateValues.get(value.value)!;

                if (m != 0 && c != 0) {
                    const a = abs(m);
                    // nonzero += 1;
                    norm += a;
                    sum += a * abs(c) * (sign(m) == sign(c) ? 1 : - 1);
                }
            }
        });

        /**
         * To avoid dividing by zero when we divide by norm, we replace norm by 1
         * This should not impact the final result as in this case sum should
         * be null also. We choose the score 50 if all answers are null.
         */
        if (norm == 0) norm = 1;

        return {
            score: 50.0 * (1.0 + sum / norm),
            // representativeness: 100 * nonzero / myscores.length,
        };
    }
}
