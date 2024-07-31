import Character from "../src/heroes/mainCharacter";

test('проверка создания класса', () => {
    const expectedCharacter = {
        name: 'Kuznets',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0,
    };
    const testCharacter = new Character('Kuznets', 'Bowman');
    expect(expectedCharacter).toEqual(testCharacter);
})
test('проверка вывода ошибки из-за имени героя', () => {
    const testCharacter = new Character('a','Bowman')
    expect(testCharacter).toThrow('Имя должно быть мин. 2 символа, макс. 10 символов, тип Строка')
})
test('проверка вывода ошибки из-за типа героя', () => {
    const testCharacter = new Character('Kuznets', 'Bow');
    expect(expectedCharacter).toThrow(`Типы должны быть такими: ${validTypes.join(', ')}.`);
})