import Henchmen from "../model/henchmen";

describe('[Class test - Henchmen]', () => {
    const henchmen = new Henchmen(1, "Henchmen de test");

    it('Henchmen accuracy', () => {
        const accuracyExpected = 100;
        expect(henchmen.accuracy).toBe(accuracyExpected);
    })

    it('Henchmen firerate', () => {
        const firerateExpected = 1;
        expect(henchmen.firerate).toBe(firerateExpected);
    })

    it('Henchmen damages', () => {
        const damagesExpected = 10;
        expect(henchmen.damage).toBe(damagesExpected);
    })
})
