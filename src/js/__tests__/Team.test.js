/* eslint-disable no-undef */
import Team from '../Team';
import Character from '../Character';

test('добавляет персонажа в команду', () => {
  const team = new Team();
  const character = new Character(50, 50);
  team.add(character);
  team.toArray();

  expect(team.members).toEqual([
    { attack: 50, defence: 50 },
  ]);
});

test('выдает ошибку при повторном добавлении', () => {
  const team = new Team();
  const character = new Character(50, 50);
  team.add(character);

  expect(() => { team.add(character); }).toThrow('Данный персонаж уже в команде!');
});

test('добавляет несколько персонажей', () => {
  const team = new Team();
  const bowman = new Character(50, 60);
  const zombie = new Character(40, 70);
  const swordsman = new Character(50, 50);
  const magician = new Character(50, 60);
  team.addAll(bowman, zombie, swordsman, magician);
  team.toArray();

  expect(team.members).toEqual([
    { attack: 50, defence: 60 },
    { attack: 40, defence: 70 },
    { attack: 50, defence: 50 },
    { attack: 50, defence: 60 },
  ]);
});

test('игнорирует добавление одних и тех же персонажей', () => {
  const team = new Team();
  const bowman = new Character(50, 60);
  const zombie = new Character(40, 70);
  const swordsman = new Character(50, 50);
  const magician = new Character(50, 60);
  team.addAll(bowman, zombie, swordsman, magician, zombie, swordsman);
  team.toArray();

  expect(team.members).toEqual([
    { attack: 50, defence: 60 },
    { attack: 40, defence: 70 },
    { attack: 50, defence: 50 },
    { attack: 50, defence: 60 },
  ]);
});

test('превращает members в массив', () => {
  const team = new Team();
  const character = new Character(50, 50);
  team.add(character);
  team.toArray();

  expect(team.members).toEqual([{ attack: 50, defence: 50 }]);
});
