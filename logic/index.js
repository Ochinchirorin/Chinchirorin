class Player {
  constructor(name) {
    this.name = name;
    this.point = 0;
    this.rolls = [];
    this.rolling();
  }

  rolling() {
    while (this.rolls.length < 3) {
      let dice = [0, 1, 2].map((x) => Math.ceil(Math.random() * 6));
      this.rolls.push(dice);

      if ([...new Set(dice)].length === 2) {
        this.point = Math.max(...[...new Set(dice)]);
      }
    }
    return this.point;
  }
}

class Play {
  static compare(p1, p2) {
    if (p1.rolling() > p2.rolling()) {
      return `${p1.name} ${p1.point} : ${p2.point} ${p2.name}, ${p1.name} wins!`;
    } else
      return `${p1.name} ${p1.point} : ${p2.point} ${p2.name}, ${p2.name} wins!`;
  }
}

let p1 = new Player("Sakra");
let p2 = new Player("Nicko");

console.log(Play.compare(p1, p2));
