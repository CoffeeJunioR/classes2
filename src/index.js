import Bowerman from "./heroes/bowerman";
import Swordsman from "./heroes/swordsman";
import Magician from "./heroes/magician";
import Daemon from "./heroes/daemon";
import Undead from "./heroes/undead";
import Zombie from "./heroes/zombie";

try {
    const bowman = new Bowerman('Legolas');
    console.log(bowman);

    const swordsman = new Swordsman('Aragorn');
    console.log(swordsman);

    swordsman.levelUp();
    console.log(swordsman);

    const magician = new Magician('Gandalf');
    console.log(magician);

    magician.damage(30);
    console.log(magician);

    const daemon = new Daemon('Azazel');
    console.log(daemon);

    const undead = new Undead('Voldemort');
    console.log(undead);

    const zombie = new Zombie('ZombieMan');
    console.log(zombie);

    const invalidCharacter = new Bowerman('L');
} catch (error) {
    console.error(error.message);
}

try {
    bowman.levelUp();
    console.log(bowman);
} catch (error) {
    console.error(error.message);
}