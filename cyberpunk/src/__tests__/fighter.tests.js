import Merc from "../model/merc";
import Henchmen from "../model/henchmen";
import FightComment, {fightCommentEnum} from "../model/fightComment";

describe('[Class test - Fighter]', () => {
    const merc = new Merc(1, "Merc de test", {
        damage: 10,
        firerate: 1,
        accuracy: 100
    });

    const henchmen = new Henchmen(1, "Henchmen de test");

    it('Fighter life', () => {
       const lifeExpected = 100;
       expect(merc.life).toBe(lifeExpected);
       expect(henchmen.life).toBe(lifeExpected);
    });

    it('Fighter begin alive', () => {
        const isAliveExpected = true;
        expect(merc.isAlive).toBe(isAliveExpected);
        expect(henchmen.isAlive).toBe(isAliveExpected);
    });

    it('Fighter strike failed with 0 accuracy', () => {
        const noobMerc = new Merc(1, "the noob", {
            damage: 1000,
            firerate: 1,
            accuracy: 0
        })

        const expectedCommentType = new FightComment(fightCommentEnum.StrikeFailed, noobMerc.nickname, henchmen.nickname);
        const res = noobMerc.strike(henchmen);
        expect(res).toStrictEqual([expectedCommentType]);
    });

    it('Fighter strike firerate multiple', () => {
        const firerateMultipleMerc = new Merc(1, "the noob", {
            damage: 1000,
            firerate: 5,
            accuracy: 0
        })

        const expectedComment = new FightComment(fightCommentEnum.StrikeFailed, firerateMultipleMerc.nickname, henchmen.nickname);
        const res = firerateMultipleMerc.strike(henchmen);
        expect(res).toStrictEqual([expectedComment, expectedComment, expectedComment, expectedComment, expectedComment]);
    });

    it('Fighter basic strike', () => {
        const expectedDamages = merc.damage * merc.firerate;
        const expectedEnemyLife = henchmen.life - expectedDamages;
        const expectedStrikeCommentType = new FightComment(fightCommentEnum.Strike, merc.nickname, henchmen.nickname, merc.damage);
        const expectedHPSummarizeType = new FightComment(fightCommentEnum.HPSummarize, merc.nickname, henchmen.nickname, merc.damage, expectedEnemyLife)

        const res = merc.strike(henchmen);
        expect(henchmen.life).toBe(expectedEnemyLife);
        expect(res).toStrictEqual([expectedStrikeCommentType, expectedHPSummarizeType]);
    });

    it('Fighter kill enemy', () => {
        const hardCoreMerc = new Merc(1, "The hardcore merc", {
            damage: 100000000,
            firerate: 1,
            accuracy: 100
        });

        const expectedDamages = hardCoreMerc.damage * hardCoreMerc.firerate;
        const expectedEnemyLife = henchmen.life - expectedDamages;
        const expectedStrikeCommentType = new FightComment(fightCommentEnum.Strike, hardCoreMerc.nickname, henchmen.nickname, expectedDamages);
        const expectedDeathComment = new FightComment(fightCommentEnum.FighterDie, hardCoreMerc.nickname, henchmen.nickname);


        const res = hardCoreMerc.strike(henchmen);
        expect(henchmen.life).toBe(expectedEnemyLife);
        expect(res).toStrictEqual([expectedStrikeCommentType, expectedDeathComment]);
    });


})
