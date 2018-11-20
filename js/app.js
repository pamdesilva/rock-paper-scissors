var userPlay;
var computerPlay;
var gameWon = 0;
var gameLost = 0;
var gameDraw = 0;
var gamePlayed = 0;
var userMoveDisplay = $("#user_play");
var computerMoveDisplay = $("#computer_play");
var computerChoices = ["rock", "paper", "scissors"];

////// Listen for user's play

$(".user_move").click(function(e) {
  userPlay = $(this).text().toLowerCase();
  userMoveDisplay.html(" " + userPlay.charAt(0).toUpperCase() + userPlay.slice(1));
  computer_move();
  checkWinner(userPlay, computerPlay);
});

/////// Simulate computer's move

function computer_move() {
  var random_number = Math.floor(Math.random() * 3);
  computerPlay = computerChoices[random_number];
  computerMoveDisplay.html(" " + computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1));
}

/////// Check who won and update scores

function checkWinner(user, computer) {
  gamePlayed++;

  var verdict;

  if (user == computer) {
    gameDraw++;
    verdict = 'draw';
  }
  if (
    user == "paper" && computer == "rock" ||
    user == "rock" && computer == "scissors" ||
    user == "scissors" && computerPlay == "paper"
  ) {
    gameWon++;
    verdict = 'win';
  }
  if (
    computer == "paper" && user == "rock" ||
    computer == "rock" && user == "scissors" ||
    computer == "scissors" && user == "paper"
  ) {
    gameLost++;
    verdict = 'lose';
  }

  $("#game_won").html(" " + gameWon);
  $("#game_lost").html(" " + gameLost);
  $("#game_draw").html(" " + gameDraw);
  $("#game_played").html(" " + gamePlayed);
  $("#game-result").html("You " + verdict + "!");

}

/////// Reset game and scores

$("#reset").click(function(){
  gameWon = 0;
  gameDraw = 0;
  gameLost = 0;
  gamePlayed = 0;

  $("#game_won").html(" " + gameWon);
  $("#game_lost").html(" " + gameLost);
  $("#game_draw").html(" " + gameDraw);
  $("#game_played").html(" " + gamePlayed);
  $("#game-result").html("");
  userMoveDisplay.html("");
  computerMoveDisplay.html("");
});
