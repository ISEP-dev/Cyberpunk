export const fightCommentEnum = {
    StrikeFailed : { value: 0 },
    Strike: { value: 1 },
    FighterDie: { value: 2 },
    HPSummarize : { value: 3 },
};

class FightComment {
    constructor(fightCommentEnum, strikerName = "", enemyName= "", hpInflicted = null, enemyHP = null) {
        this.fightCommentEnum = fightCommentEnum;
        this.strikerName = strikerName;
        this.enemyName = enemyName;
        this.hpInflicted = hpInflicted;
        this.enemyHP = enemyHP;
    }
}

export default FightComment;
