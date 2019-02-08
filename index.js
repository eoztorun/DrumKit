//select all the buttons that represent a part of the drum kit
var drumButtons = document.querySelectorAll(".drum");

//add "click" event listener to all the buttons
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick);
}

//function to handle what happens on click event
function handleClick() {
  alert("I got clicked");
}
