import {fightCommentEnum} from "../model/fightComment";


describe('[Class test - FightComment]', () => {

    it('FightComment enum', () => {
        const expectedStrikeFailed = 0;
        const expectedStrike = 1;
        const expectedFighterDie = 2;
        const expectedHPSummarize = 3;

        expect(fightCommentEnum.StrikeFailed.value).toBe(expectedStrikeFailed);
        expect(fightCommentEnum.Strike.value).toBe(expectedStrike);
        expect(fightCommentEnum.FighterDie.value).toBe(expectedFighterDie);
        expect(fightCommentEnum.HPSummarize.value).toBe(expectedHPSummarize);
    });
})
