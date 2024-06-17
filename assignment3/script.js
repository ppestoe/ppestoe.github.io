// let draggedElement = null;

// const colorBlob = document.querySelector(".blob");
// const resultBlob = document.querySelector("#result");

// colorBlob.addEventListener("dragstart", startDrag);

// function startDrag() {
//   draggedElement = colorBlob;
// }

// resultBlob.addEventListener("dragover", endDrag);

// function endDrag(event) {
//   event.preventDefault();
// }

// resultBlob.addEventListener("drop", handleDrop);

// function handleDrop() {
//   if (draggedElement) {
//     const color = window
//       .getComputedStyle(draggedElement)
//       .getPropertyValue("background-color");
//     // const color = draggedElement.style.backgroundColor;
//     resultBlob.style.backgroundColor = color;
//     resultBlob.textContent = "Dropped!";
//     draggedElement = null;
//   }
// }