export const fightCommentEnum = {
    StrikeFailed : { value: 0 },
    Strike: { value: 1 },
    FighterDie: { value: 2 },
    PhSummarize : { value: 3 },
};

class FightComment {
    constructor(fightCommentEnum, strikerName = "", enemyName= "", phInflicted = null, enemyPh = null) {
        this.fightCommentEnum = fightCommentEnum;
        this.strikerName = strikerName;
        this.enemyName = enemyName;
        this.phInflicted = phInflicted;
        this.enemyPh = enemyPh;
    }
}

export default FightComment;
