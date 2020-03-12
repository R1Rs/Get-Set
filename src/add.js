export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.level = 1;
    this.health = 100;
    this.power = false;
    this.attackValue = 0;
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.level ++;
      this.attack = this.attack / 100 * 120;
      this.defence = this.defence / 100 * 120;
      this.health = 100;
    } else {
      throw Error("нельзя повысить уровень умершего");
    }
  }
  
  get powerMode() {
    if (this.attackValue < 3) {
      this.power = true; 
      this.attackValue ++; 
      this.attack = this.attack * 2;
      this.defence = this.defence * 2;
      this.health = this.health * 2;
    } else {
      this.power = false;
    }
  }
}


