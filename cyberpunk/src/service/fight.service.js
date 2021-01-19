import Merc from "../model/merc";
import Henchmen from "../model/henchmen";

class FightService {

    static getHenchmens = (henchmenCount) => {
        let henchmens = [];
        for (let i = 1; i <= henchmenCount; i++) {
            henchmens = [...henchmens, new Henchmen(i, `Henchemen n°${i}`)];
        }
        return henchmens;
    }

    static fightAsync = async (striker, enemy, setComment) => {
        setComment( `${striker.nickname} attack ${enemy.nickname} !`);
        const comment = await striker.strikeAsync(enemy);
        setComment(comment);
    }

    static removeHenchmenKilled = (henchmensToFight, henchmenKilled) =>
        henchmensToFight.filter(h => henchmenKilled.id !== h.id);

    static launchAsync = async (merc, weapon, job, setComment) => {
        const mercAsFighter = new Merc(merc.id, merc.nickname, weapon);
        let henchmens = this.getHenchmens(job.henchmenCount);

        while(!!henchmens.length && mercAsFighter.isAlive) {
            const henchmenToFight = henchmens[0];
            await this.fightAsync(mercAsFighter, henchmenToFight, setComment);

            if (henchmenToFight.isAlive) {
                await this.fightAsync(henchmenToFight, mercAsFighter, setComment);
                continue;
            }

            henchmens = this.removeHenchmenKilled(henchmens, henchmenToFight);
        }

        const endMessage = mercAsFighter.isAlive
            ? "Yeahhhhh, very good. You congratulated the job !"
            : "Sorry boy, you are a noob...";

        setComment(endMessage);
    }

}

export default FightService;
