export function computeScores(myscores: number[], candidates: number[][]) {
    return candidates.map((c) => computeOneScore(myscores, c));
}

let abs = Math.abs;
let sign = Math.sign;

function computeOneScore(myscores: number[], candidate: number[]) {
    var norm = 0;
    var sum = 0;
    var nonzeros = 0;

    for (let i = 0; i < myscores.length; i++) {
        let m = myscores[i];
        let c = candidate[i]
        if (m != 0 && c != 0) {
            let a = abs(m);
            nonzeros += 1;
            norm += a;
            sum += a * abs(c) * (sign(m) == sign(c) ? 1 : -1);
        }
    }

    if (norm == 0) norm = 1;

    return {
        score: 50 * (1 + sum / norm),
        representativity: 100 * nonzeros / myscores.length,
    }
}

