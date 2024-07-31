export default class Character {
    constructor(name, type) {
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть мин. 2 символа, макс. 10 символов, тип Строка');
        }

        if (!validTypes.includes(type)) {
            throw new Error(`Типы должны быть такими: ${validTypes.join(', ')}.`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }
}