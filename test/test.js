import {Character, Bowman} from "../src/add";

test ("test charcter", () => {
// тестирование объекта Character
  let petr = new Character("petr", "Bowman", 25, 25);
  petr.damage(10);
  const received = petr.health;
  const expected = 92.5;

  petr.health = -1;
  petr.damage(10);
  const received1 = petr.health
  const expected1 = -1;

  expect(received).toEqual(expected);
  expect(received1).toEqual(expected1);

// тестирование дочерних объектов
  let bow = new Bowman("Bow");
  const received2 = bow.attack;
  const expected2 = 25;
  expect(received2).toEqual(expected2);

  bow.health = -1;
  bow.damage(20);
  const received3 = bow.health;
  const expected3 = -1;
  expect(received3).toEqual(expected3);

  bow.health = 70;
  bow.levelUp();
  const received4 = bow.health;
  const expected4 = 100;
  const received5 = bow.level;
  const expected5 = 2
  const received6 = bow.attack;
  const expected6 = 30;
  const received7 = bow.defence;
  const expected7 = 30;
  expect(received4).toEqual(expected4);
  expect(received5).toEqual(expected5);
  expect(received6).toEqual(expected6);
  expect(received7).toEqual(expected7);

  bow.health = 0;
  bow.levelUp();
  const received8 = bow.health;
  const expected8 = 0;
  expect(received8).toEqual(expected8);
  // заменить тесты для 3 задачи
})

  
 



