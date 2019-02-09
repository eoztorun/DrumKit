//select all the buttons that represent a part of the drum kit
var drumButtons = document.querySelectorAll(".drum");

//add "click" event listener to all the buttons
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick)
}
//add keydown event listener to the entire document
document.addEventListener("keydown", handleKeyDown);

//function to handle what happens on click event
function handleClick() {
  var buttonInnerHTML = this.textContent;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//function to handle what happens when keyboard key is pressed
function handleKeyDown(event) {
  var key = event.key;
  playSound(key);
  buttonAnimation(key);
}

//play the relevant sound with keyboard or click input
function playSound(userInput) {
  switch (userInput) {
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "d":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "j":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

    case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    default:
        console.log(userInput);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  console.log("key " + currentKey);

  //delay 0.1s to remove the pressed class style from the button
  setTimeout(function() {
    activeButton.classList.remove("pressed");
    console.log("keyreleased");
  }, 100);
}
