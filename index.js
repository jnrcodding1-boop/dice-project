function updateNames() {
  let name1 = document.getElementById("player1Name").value;
  let name2 = document.getElementById("player2Name").value;

  if (name1 !== "") {
    document.getElementById("player1Label").textContent = name1;
  }

  if (name2 !== "") {
    document.getElementById("player2Label").textContent = name2;
  }
}

function rollDice() {
  
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;

  
  document
    .querySelector(".img1")
    .setAttribute("src", "image/dice" + random1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "image/dice" + random2 + ".png");


  let name1 = document.getElementById("player1Label").textContent;
  let name2 = document.getElementById("player2Label").textContent;


  let heading = document.getElementById("heading");


  if (random1 > random2) {
    heading.textContent = "🚩 " + name1 + " Wins!";
  } else if (random2 > random1) {
    heading.textContent = "🚩 " + name2 + " Wins!";
  } else {
    heading.textContent = "Draw!";
  }
}