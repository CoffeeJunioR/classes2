import Bowerman from "../src/heroes/Bowerman";
import Daemon from "../src/heroes/daemon";
import Magician from "../src/heroes/magician";
import Swordsman from "../src/heroes/swordsman";
import Undead from "../src/heroes/undead";
import Zombie from "../src/heroes/zombie";

function makeTestClass(testingClass, name) {
    return new testingClass(`${name}`)
}

function makeExpectObject(health, level, attack, defence, name, type) {
    return {
        health: health,
        level: level,
        attack: attack,
        defence: defence,
        name: name,
        type: type
    }
}

test.each([
    {className: 'Bowerman', test: makeTestClass(Bowerman, 'Legolas'), expected: makeExpectObject(100, 1, 25, 25, 'Legolas', 'Bowman')},
    {className: 'Daemon', test: makeTestClass(Daemon, 'Mike'), expected: makeExpectObject(100, 1, 10, 40, 'Mike', 'Daemon')},
    {className: 'Magician', test: makeTestClass(Magician, 'John'), expected: makeExpectObject(100, 1, 10, 40, 'John', 'Magician')},
    {className: 'Swordsman', test: makeTestClass(Swordsman, 'Beck'), expected: makeExpectObject(100, 1, 40, 10, 'Beck', 'Swordsman')},
    {className: 'Undead', test: makeTestClass(Undead, 'Rud'), expected: makeExpectObject(100, 1, 25, 25, 'Rud', 'Undead')},
    {className: 'Zombie', test: makeTestClass(Zombie, 'Peck'), expected: makeExpectObject(100, 1, 40, 10, 'Peck', 'Zombie')}

])('', ({className, test, expected}) => {
    expect(test).toEqual(expected)
})