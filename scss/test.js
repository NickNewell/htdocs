var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";
window.onload = init;

function init() {
  allLetters = document.querySelectorAll("table#crossword span");
  currentLetter = allLetters[0];
  var acrossID = currentLetter.dataset.clueA;
  var downID = currentLetter.dataset.clueD;
  acrossClue = document.getElementById(acrossID);
  downClue = document.getElementById(downID);
  formatPuzzle(currentLetter);
  for (var i = 0; i < allLetters.length; i++) {
    allLetters[i].style.cursor = "pointer";
    allLetters[i].onmousedown = function(e) {
      formatPuzzle(e.target);
    }
  }
  document.onkeydown = selectLetter;
  console.log("----init function----\n" + "Current Letter Type: " + typeof currentLetter + " \ncurrentLetter.dataset Type: " + typeof currentLetter.dataset);
}


function formatPuzzle(puzzleLetter) {
  currentLetter = puzzleLetter;
  for (var i = 0; i < allLetters.length; i++) {
    allLetters[i].style.backgroundColor = "";
  }
  acrossClue.style.color = "";
  downClue.style.color = "";

  if (currentLetter.dataset.clueA !== undefined) {
    acrossClue = document.getElementById(currentLetter.dataset.clueA);
    acrossClue.style.color = "blue";
    wordLetters = document.querySelectorAll("[data-clue-a=" + currentLetter.dataset.clueA + "]");
    for (i = 0; i < wordLetters.length; i++) {
      wordLetters[i].style.backgroundColor = "rgb(231,231,255)";
    }
  }
  if (currentLetter.dataset.clueD !== undefined) {
    downClue = document.getElementById(currentLetter.dataset.clueD);
    downClue.style.color = "red";
    wordLetters = document.querySelectorAll("[data-clue-d=" + currentLetter.dataset.clueD + "]");
    for (i = 0; i < wordLetters.length; i++) {
      wordLetters[i].style.backgroundColor = "rgb(255,231,231)";
    }
  }
  if (typeDirection === "right") {
    currentLetter.style.backgroundColor = "rgb(191,191,255)";
  } else {
    currentLetter.style.backgroundColor = "rgb(255,191,191)";
  }
  console.log("----formatPuzzle function----\n" + "Current Letter Type: " + typeof currentLetter + " \ncurrentLetter.dataset Type: " + typeof currentLetter.dataset);
}


function selectLetter(e) {
  var leftLetter = currentLetter.dataset.left;
  var upLetter = currentLetter.dataset.up;
  var rightLetter = currentLetter.dataset.right;
  var downLetter = currentLetter.dataset.down;
  var userKey = e.keyCode;
  console.lo