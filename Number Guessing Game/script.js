/*------------------ INPUTS  */
let maximum_input = document.getElementById("maximum");
let minumum_input = document.getElementById("minumum");
let answer_input = document.getElementById("answer-input");

minumum_input.value = "1";
maximum_input.value = "10";

/*------------------ PLAY AREAS */
let play_button = document.getElementById("play-button");
let play_box = document.getElementById("play-box");

/*------------------ TEXTS */
let robot_text = document.getElementById("robot-text");
let outcome_text = document.getElementById("outcome-text");
let hint_text = "";

/*------------------- VARIABLES*/
let maximum = 10;
let minumum = 1;
let lives = 5;
let the_Random_Number = 0;

let playing = false;

/*------------------- AUDIO SFX*/
const lose_sound = new Audio("Assets/Drum Lose.mp3");
const UIclick_sound = new Audio("Assets/UI Click.mp3");
const win_sound = new Audio("Assets/Win Sound.mp3");

answer_input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    /*------------------- IF PLAYER GUESS THE RANDOM NUMBER*/
    if (Number(answer_input.value) === the_Random_Number) {
      outcome_text.innerHTML = `🎊Congrats, you correctly guessed the number🎉 <br/> IT'S NUMBER ${the_Random_Number}!`;
      answer_input.value = "";
      win_sound.play();
      PlayManager();
    } else {
      if (answer_input.value > the_Random_Number) {
        hint_text = "Its LESSER than that!";
      } else {
        hint_text = "Its GREATER than that!";
      }
      robot_text.textContent = "Wrong dummy! " + hint_text;
      UIclick_sound.play();

      lives--;
      play_button.textContent = "LIVES: " + lives;
    }
  }

  /*------------------- IF PLAYER LOSS AND DIN'T GUESS THE RIGHT RANDOM NUMBER*/
  if (lives <= 0) {
    PlayManager();
    outcome_text.innerHTML = `🥺Try better next time!😭 <br/> IT WAS NUMBER ${the_Random_Number}!`;
    lose_sound.play();
  }
});

/*------------------- CLICK FUNCTION OF PLAY BUTTON*/
play_button.onclick = function () {
  UIclick_sound.play();
  PlayManager();
};

function PlayManager() {
  if (playing == false) {
    maximum = Number(maximum_input.value);
    minumum = Number(minumum_input.value);

    if (Number.isNaN(minumum) || Number.isNaN(maximum)) {
      ErrorHandler("invalid input, please enter a number!");
      return;
    } else if (minumum > maximum) {
      ErrorHandler("the minumum is greater than the maximum number");
      return;
    } else if (maximum === 0 || minumum === 0) {
      minumum = 1;
      maximum = 10;
      ErrorHandler("invalid input, you cannot enter 0!");
      return;
    }

    console.log(minumum);
    console.log(maximum);

    playing = true;
    lives = 5;

    play_button.style.color = "white";
    play_button.textContent = "LIVES: " + lives;
    play_box.style.display = "flex";

    answer_input.value = "";

    robot_text.textContent = `Guess the number between ${minumum} - ${maximum}!`;
    outcome_text.textContent = "";

    the_Random_Number =
      Math.floor(Math.random() * (maximum - minumum + 1)) + minumum;
  } else {
    playing = false;

    play_button.style.color = "red";
    play_button.textContent = "TRY AGAIN?";
    play_box.style.display = "none";
  }
}

function ErrorHandler(text) {
  outcome_text.textContent = `ERROR | ${text}`;
  minumum_input.value = "1";
  maximum_input.value = "10";
}
