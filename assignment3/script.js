// this is so that the other functions can refer to the dragged element
let draggedElement = null;
let droppedElement = null;
// defining the main variables that I'll be working with
const colorBlob = document.querySelector(".blob");
// individually doing the variables for the colors
const redBlob = document.querySelector("#red");
const orangeBlob = document.querySelector("#orange");
const yellowBlob = document.querySelector("#yellow");
const greenBlob = document.querySelector("#green");
const blueBlob = document.querySelector("#blue");
const purpleBlob = document.querySelector("#purple");
const whiteBlob = document.querySelector("#white");
const blackBlob = document.querySelector("#black");
const resultBlob = document.querySelector("#resultblob");
const paint = document.querySelector("#paint");
const code = document.querySelector(".hexcode");
const resetBtn = document.querySelector("#reset");

redBlob.addEventListener("dragstart", redStartDrag);  
orangeBlob.addEventListener("dragstart", orangeStartDrag); 
yellowBlob.addEventListener("dragstart", yellowStartDrag)
greenBlob.addEventListener("dragstart", greenStartDrag);
blueBlob.addEventListener("dragstart", blueStartDrag);
purpleBlob.addEventListener("dragstart", purpleStartDrag);
whiteBlob.addEventListener("dragstart", whiteStartDrag);
blackBlob.addEventListener("dragstart", blackStartDrag);
resetBtn.addEventListener("click", resetColor);

function resetColor(){
  paint.style.fill = "#BC7C68";
}

function redStartDrag() {
  draggedElement = redBlob;
  droppedElement = paint;
}

function orangeStartDrag() {
    draggedElement = orangeBlob;
    droppedElement = paint;
  }
  
  function yellowStartDrag() {
    draggedElement = yellowBlob;
    droppedElement = paint;
  }
  function greenStartDrag() {
    draggedElement = greenBlob;
    droppedElement = paint;
  }
  function blueStartDrag() {
    draggedElement = blueBlob;
    droppedElement = paint;
  }
  function purpleStartDrag() {
    draggedElement = purpleBlob;
    droppedElement = paint;
  }
  function whiteStartDrag() {
    draggedElement = whiteBlob;
    droppedElement = paint;
  }
  function blackStartDrag() {
    draggedElement = blackBlob;
    droppedElement = paint;
  }



paint.addEventListener("dragover", endDrag);

function endDrag(event) {
  event.preventDefault();
}

paint.addEventListener("drop", handleDrop);


function handleDrop() {
  if (draggedElement) {
    const color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("fill");
      paint.style.color = color ;
      paint.style.fill = color ;
    draggedElement = null;
  }
}

