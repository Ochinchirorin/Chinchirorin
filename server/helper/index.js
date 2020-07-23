let dice = [0, 1, 2].map((x) => Math.ceil(Math.random() * 6));

function roll(name) {
  let dice = [0, 1, 2].map((x) => Math.ceil(Math.random() * 6));

  let newDice = [...new Set(dice)];

  let loseStatus = false,
    winStatus = false,
    point = 0;

  if (newDice.length === 1 && newDice[0] === 1) {
    loseStatus = true;
  } else if (newDice.length === 1 && newDice[0] !== 1) {
    winStatus = true;
  } else if (newDice.length === 2) {
    let counts = [];
    for (let i = 0; i < newDice.length; i++) {
      let count = 0;
      let num = 0;
      for (let j = 0; j < dice.length; j++) {
        if (newDice[i] === dice[j]) {
          count++;
          num = newDice[i];
        }
      }
      counts.push({ num: num, count: count });
    }

    x = counts[0].count;
    point = counts[0].num;

    for (let i = 0; i < counts.length; i++) {
      if (counts[i].count < x) {
        point = counts[i].num;
      }
    }
  } else if (dice[0] === 1 && dice[1] === 2 && dice[2] === 3) {
    loseStatus = true;
  } else if (dice[0] === 4 && dice[2] === 5 && dice[2] === 6) {
    winStatus = true;
  }

  return {
    name: name,
    point: point,
    winStatus: winStatus,
    loseStatus: loseStatus,
    roll: dice,
  };
}

// function compare(a, b) {
//   let p1 = roll(a),
//     p2 = roll(b);

//   if (p1.loseStatus === true) {
//     return { p1, msg: "Storm!", msg2: "Lose" };
//   }

//   if (p2.loseStatus === true) {
//     return { p2, msg: "Storm!", msg2: "Lose" };
//   }

//   if (p1.winStatus === true) {
//     return { p1, msg: "Storm!", msg2: "Wins" };
//   }
//   if (p2.winStatus === true) {
//     return { p2, msg: "Storm!", msg2: "Wins" };
//   }

//   if (p1.loseStatus === false && p2.loseStatus === false) {
//     if (p1.point > p2.point) {
//       return p1;
//     } else if (p1.point === p2.point) {
//       return { p1, p2, msg: "Draw" };
//     } else {
//       return p2;
//     }
//   }
// }

module.exports = roll;
