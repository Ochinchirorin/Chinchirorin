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

function compare(a, b) {
  let objHasil = { name: "", msg: "" }

  if (a.loseStatus === true) {
    objHasil.name = a.name
    objHasil.msg = "Storm-Lose"
  }

  if (b.loseStatus === true) {
    objHasil.name = b.name
    objHasil.msg = "Storm-Lose"
  }

  if (a.winStatus === true) {
    objHasil.name = a.name
    objHasil.msg = "Storm-Win"
  }
  if (b.winStatus === true) {
    objHasil.name = b.name
    objHasil.msg = "Storm-Win"
  }

  if (a.loseStatus === false && b.loseStatus === false) {
    if (a.point > b.point) {
      objHasil.name = a.name
      objHasil.msg = "Win"
    } else if (a.point === b.point) {
      objHasil.name = ""
      objHasil.msg = "Draw"
    } else {
      objHasil.name = b.name
      objHasil.msg = "Win"
    }
  }

  return objHasil
}

function rollStorm(name) {
  let dice = [5, 5, 5]

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


module.exports = { roll, compare, rollStorm };
