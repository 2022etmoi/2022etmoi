/**
 * Represents a Score.
 */
export class Score {
    public score = 50;
    public hearts = 0;
    public skulls = 0;
    public agreements = 0;
    public disagreements = 0;
    public neutral = 0;

    constructor(init?: Score) {
        Object.assign(this, init);
    }
}
