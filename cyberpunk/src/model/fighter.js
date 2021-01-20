import FightComment, {fightCommentEnum} from "./fightComment";

class Fighter {
    constructor(id, nickname, damage, firerate, accuracy) {
        this.life = 100;
        this.damage = damage;
        this.id = id;
        this.nickname = nickname;
        this.firerate = firerate;
        this.accuracy = accuracy;
        this.isAlive = true;
    }

    strike(enemy) {
        let comments = [];

        for (let i = 0; i < this.firerate; i++) {
            const random = Math.random();
            if (random > this.accuracy) {
                comments = [...comments, new FightComment(fightCommentEnum.StrikeFailed, this.nickname, enemy.nickname)];
                continue;
            }

            enemy.life = enemy.life - this.damage;
            comments = [...comments, new FightComment(fightCommentEnum.Strike, this.nickname, enemy.nickname, this.damage)];

            if (enemy.life <= 0) {
                enemy.isAlive = false;
                 return [...comments, new FightComment(fightCommentEnum.FighterDie, this.nickname, enemy.nickname)];
            }

            comments = [...comments, new FightComment(fightCommentEnum.HPSummarize, this.nickname, enemy.nickname, this.damage, enemy.life)];
        }

        return comments;
    }

    strikeAsync = async (ennemy) => {
        let timeoutToClear;
        const promise =  await new Promise(resolve => {
            timeoutToClear = setTimeout(() => resolve(this.strike(ennemy)), 2000);
        })
        clearTimeout(timeoutToClear);
        return promise;
    }
}

export default Fighter;
