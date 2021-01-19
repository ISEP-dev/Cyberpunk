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
        const random = Math.random();
        if (random > this.accuracy) {
            return [new FightComment(fightCommentEnum.StrikeFailed, this.nickname, enemy.nickname)];
        }

        const totalDamages = this.damage * this.firerate;
        enemy.life = enemy.life - totalDamages;
        comments = [...comments, new FightComment(fightCommentEnum.Strike, this.nickname, enemy.nickname, totalDamages)];
        if (enemy.life <= 0) {
            enemy.isAlive = false;
            return [...comments, new FightComment(fightCommentEnum.FighterDie, this.nickname, enemy.nickname)];
        }

        return [...comments, new FightComment(fightCommentEnum.PhSummarize, this.nickname, enemy.nickname, totalDamages, enemy.life)];
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
