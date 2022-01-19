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
    static getInstance() : ScoringService{
        if (! ScoringService.instance) {
            ScoringService.instance = new ScoringService();
        }
        return ScoringService.instance;
    }

    public computeScores(myscores: number[], candidates: number[][]) {
        return candidates.map((c) => this.computeOneScore(myscores, c));
    }

    public computeOneScore(myscores: number[], candidate: number[]) {
        const abs = Math.abs;
        const sign = Math.sign;
        let norm = 0;
        let sum = 0;
        let nonzero = 0;

        for (let i = 0; i < myscores.length; i ++) {
            const m = myscores[i];
            const c = candidate[i];
            if (m != 0 && c != 0) {
                const a = abs(m);
                nonzero += 1;
                norm += a;
                sum += a * abs(c) * (sign(m) == sign(c) ? 1 : - 1);
            }
        }

        /**
         * To avoid dividing by zero when we divide by norm, we replace norm by 1
         * This should not impact the final result as in this case sum should
         * be null also. We choose the score 50 if all answers are null.
         */
        if (norm == 0) norm = 1;

        return {
            score: 50 * (1 + sum / norm),
            representativeness: 100 * nonzero / myscores.length,
        };
    }
}
