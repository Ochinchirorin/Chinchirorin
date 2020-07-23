class Player {
  constructor(name) {
    this.name = name;
    this.point = 0;
    this.score = 0;
    this.rolls = [];
    this.loseStatus = false;
    this.winStatus = false;
    this.rolling();
  }

  rolling() {
    while (this.rolls.length < 3) {
      let dice = [0, 1, 2].map((x) => Math.ceil(Math.random() * 6));
      this.rolls.push(dice);

      let newDice = [...new Set(dice)];

      if (newDice.length === 1 && newDice[0] === 1) {
        return (this.loseStatus = true);
      } else if (newDice.length === 1 && newDice[0] !== 1) {
        return (this.winStatus = true);
      } else if (newDice.length === 2) {
        this.point = Math.max(...newDice);
      } else if (dice[0] === 1 && dice[1] === 2 && dice[2] === 3) {
        this.loseStatus = true;
      } else if (dice[0] === 4 && dice[2] === 5 && dice[2] === 6) {
        this.winStatus = true;
      }
    }
    return this.point;
  }
}

class Play {
  static compare(p1, p2) {
    if (p1.loseStatus === false && p2.loseStatus === false) {
      if (p1.rolling() > p2.rolling()) {
        p1.score += 1;
        return `${p1.name} ${p1.point} : ${p2.point} ${p2.name}, ${p1.name} wins!`;
      } else if (p1.rolling() === p2.rolling()) {
        return `${p1.name} ${p1.point} : ${p2.point} ${p2.name}, Draw!`;
      } else {
        p2.score += 1;
        return `${p1.name} ${p1.point} : ${p2.point} ${p2.name}, ${p2.name} wins!`;
      }
    } else if (p1.loseStatus === true) {
      return `Storm! ${p1.name} lose!`;
    } else if (p2.loseStatus === true) {
      return `Storm! ${p2.name} lose!`;
    } else if (p1.winStatus === true) {
      return `Storm! ${p1.name} wins!`;
    } else if (p2.winStatus === true) {
      return `Storm! ${p2.name} wins!`;
    }
  }
}

let p1 = new Player("Sakra");
let p2 = new Player("Nicko");

console.log(Play.compare(p1, p2));

module.exports = {
  Player,
  Play,
};
