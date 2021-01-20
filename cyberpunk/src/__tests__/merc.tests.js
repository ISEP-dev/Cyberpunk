import Merc from "../model/merc";

describe('[Class test - Mercenary]', () => {
    const expectedWeapon = {
        damage: 1000,
        firerate: 5,
        accuracy: 100
    }
    
    const merc = new Merc(1, "Merc de test", expectedWeapon);

    it('Mercenary accuracy', () => {
        expect(merc.accuracy).toBe(expectedWeapon.accuracy);
    })

    it('Mercenary firerate', () => {
        expect(merc.firerate).toBe(expectedWeapon.firerate);
    })

    it('Mercenary damages', () => {
        expect(merc.damage).toBe(expectedWeapon.damage);
    })
})
