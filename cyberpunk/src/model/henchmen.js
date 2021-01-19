import Fighter from "./fighter.js";

class Henchmen extends Fighter {
    constructor(id, nickname) {
        super(id, nickname, 10, 1, 100);
    }
}
export default Henchmen;
