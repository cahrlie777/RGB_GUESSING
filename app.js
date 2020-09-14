let colors = generateRandomColor();

let squares = document.querySelectorAll(".square");
let pickedColor = pickeColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++){
  //add inital colors to squares
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", () => {
    //grab color of clicked square
    let clickedColor = squares[i].style.backgroundColor;
    //compare color ta pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    }
    else{
      squares[i].style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try again";
    }
  });
}

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
  for(let i = 0; i < num; i++)
  {

  }
}

function RandomColor(){

}
