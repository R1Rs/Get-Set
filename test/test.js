import Character from "../src/add";

test ("test character", () => {

  let petr = new Character("petr", "Bowman", 25, 25);

  petr.damage(10);
  const received = petr.health;
  const expected = 92.5;
  expect(received).toEqual(expected);

  petr.health = -1;
  petr.damage(10);
  const received1 = petr.health
  const expected1 = -1;
  expect(received1).toEqual(expected1);

  petr.health = 100;
  petr.levelUp();
  const received2 = petr.level
  const expected2 = 2;
  const received3 = petr.attack;
  const expected3 = 30;
  const received4 = petr.defence;
  const expected4 = 30;

  expect(received2).toEqual(expected2);
  expect(received3).toEqual(expected3);
  expect(received4).toEqual(expected4);

  petr.health = 100;
  petr.powerMode;
  const received6 = petr.attack;
  const expected6 = 60;
  const received7 = petr.defence;
  const expected7 = 60;
  const received8 = petr.health;
  const expected8 = 200;

  expect(received6).toEqual(expected6);
  expect(received7).toEqual(expected7);
  expect(received8).toEqual(expected8);

  petr.powerMode;
  petr.powerMode;
  petr.powerMode;
  const received9 = petr.power;
  const expected9 = false;
  expect(received9).toEqual(expected9);

  petr.health = 0;
  petr.levelUp();
  const received5 = petr.attack
  const expected5 = Error;
  expect(received5).toEqual(expected5);
})

  
 



