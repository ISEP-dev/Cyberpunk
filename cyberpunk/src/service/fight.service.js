import Merc from "../model/merc";
import Henchmen from "../model/henchmen";
import FightComment, {fightCommentEnum} from "../model/fightComment";

class FightService {

    static getHenchmens = (henchmenCount) => {
        let henchmens = [];
        for (let i = 1; i <= henchmenCount; i++) {
            henchmens = [...henchmens, new Henchmen(i, `Henchemen n°${i}`)];
        }
        return henchmens;
    }

    static fightAsync = async (striker, enemy, setComments) => {
        const commentAdded = await striker.strikeAsync(enemy);
        setComments(commentAdded);
    }

    static removeHenchmenKilled = (henchmensToFight, henchmenKilled) =>
        henchmensToFight.filter(h => henchmenKilled.id !== h.id);

    static launchAsync = async (merc, weapon, job, setComments) => {
        const mercAsFighter = new Merc(merc.id, merc.nickname, weapon);
        let henchmens = this.getHenchmens(job.henchmenCount);

        while(!!henchmens.length && mercAsFighter.isAlive) {
            const henchmenToFight = henchmens[0];
            await this.fightAsync(mercAsFighter, henchmenToFight, setComments);

            if (henchmenToFight.isAlive) {
                await this.fightAsync(henchmenToFight, mercAsFighter, setComments);
                continue;
            }

            henchmens = this.removeHenchmenKilled(henchmens, henchmenToFight);
        }

        return mercAsFighter;
    }

}

export default FightService;
