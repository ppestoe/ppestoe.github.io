// this is so that the other functions can refer to the dragged element
let draggedElement = null;
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

redBlob.addEventListener("dragstart", redStartDrag);  
orangeBlob.addEventListener("dragstart", orangeStartDrag); 
yellowBlob.addEventListener("dragstart", yellowStartDrag)
greenBlob.addEventListener("dragstart", greenStartDrag);
blueBlob.addEventListener("dragstart", blueStartDrag);
purpleBlob.addEventListener("dragstart", purpleStartDrag);
whiteBlob.addEventListener("dragstart", whiteStartDrag);
blackBlob.addEventListener("dragstart", blackStartDrag);

function redStartDrag() {
  draggedElement = redBlob;
}

function orangeStartDrag() {
    draggedElement = orangeBlob;
  }
  
  function yellowStartDrag() {
    draggedElement = yellowBlob;
  }
  function greenStartDrag() {
    draggedElement = greenBlob;
  }
  function blueStartDrag() {
    draggedElement = blueBlob;
  }
  function purpleStartDrag() {
    draggedElement = purpleBlob;
  }
  function whiteStartDrag() {
    draggedElement = whiteBlob;
  }
  function blackStartDrag() {
    draggedElement = blackBlob;
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
      paint.style.fill = color ;

    draggedElement = null;
  }
}