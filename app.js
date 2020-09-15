let numberOfSquare = 6;
let colors = []
let squares = document.querySelectorAll(".square");
let pickedColor;
let h1 = document.querySelector("h1");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message")
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){

  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){

for(let i =0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click",() =>
    {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[i].classList.add("selected");
      modeButtons[i].textContent === "Easy" ? numberOfSquare = 3 : numberOfSquare = 6;
      reset();

    });
  }
}

function setupSquares(){
//event listeners
for(let i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", () => {
    //grab color of clicked square
    let clickedColor = squares[i].style.backgroundColor;
    //compare color ta pickedColor
    if(clickedColor === pickedColor){
      h1.style.backgroundColor = clickedColor;
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent ="Play Again?"
    }
    else{
      squares[i].style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

}

function reset(){
  colors = generateRandomColor(numberOfSquare);
  pickedColor = pickeColor();
  colorDisplay.textContent = pickeColor();
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  for(let i = 0; i < squares.length; i++){
    if(colors[i]){

    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
      }
    else{
    squares[i].style.display = "none";
    }
  }

  h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", () => {
  reset();
});


const changeColors = (color) => {
  for(let i=0; i< squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickeColor(){
let random =  Math.floor(Math.random() * colors.length );
  return colors[random];
}

function generateRandomColor(num){
 let arr = [];
  for(let i = 0; i < num; i++)  {
    arr.push(RandomColor());
  }
  return arr;
}

function RandomColor(){
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

  return  "rgb(" + r + ", " + g + ", " + b + ")";

}
