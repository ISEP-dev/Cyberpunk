import Henchmen from "../../model/henchmen";
import Merc from "../../model/merc";
import {message} from "../notification";

const getHenchmens = (henchmenCount) => {
    let henchmens = [];
    for (let i = 1; i <= henchmenCount; i++) {
        henchmens = [...henchmens, new Henchmen(i, `Henchemen n°${i}`)];
    }
    return henchmens;
}

const fightAsync = async (striker, enemy, setComments) => {
    const commentAdded = await striker.strikeAsync(enemy);
    setComments(commentAdded);
}

const removeHenchmenKilled = (henchmensToFight, henchmenKilled) =>
    henchmensToFight.filter(h => henchmenKilled.id !== h.id);

export const launchFightAsync = async (merc, weapon, job, setComments) => {
    message().info("The fight will start very soon...")
    const mercAsFighter = new Merc(merc.id, merc.nickname, weapon);
    let henchmens = getHenchmens(job.henchmenCount);

    while(!!henchmens.length && mercAsFighter.isAlive) {
        const henchmenToFight = henchmens[0];
        await fightAsync(mercAsFighter, henchmenToFight, setComments);

        if (henchmenToFight.isAlive) {
            await fightAsync(henchmenToFight, mercAsFighter, setComments);
            continue;
        }

        henchmens = removeHenchmenKilled(henchmens, henchmenToFight);
    }

    return mercAsFighter;
}
