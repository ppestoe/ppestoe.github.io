// this is so that the other functions can refer to the dragged element
let draggedElement = null;
let paintHex = null; 
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
const code = document.querySelector(".rgbcode");
const hCode = document.querySelector(".hexcode");
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
  code.textContent = " ";
  hCode.textContent = " ";
}

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
  let rgb2 = window
  .getComputedStyle(draggedElement)
  .getPropertyValue("fill");


let colors = ["red", "green", "blue"] 

// Getting the index of "(" and ")"  
// by using the indexOf() method 

let colorArr2 = rgb2.slice( 
rgb2.indexOf("(") + 1,  
rgb2.indexOf(")") 
).split(", "); 


let obj2 = new Object(); 

// Insert the values into obj 


colorArr2.forEach((k, i) => { 
obj2[colors[i]] = k 
}) 

let r2 = obj2['red'];
let g2 = obj2['green'];
let b2 = obj2['blue']; 
rgb2hex(r2,g2,b2);
const result = rgb2hex(r2,g2,b2)
console.log(rgb2hex(r2,g2,b2));

event.preventDefault();

return result

}

paint.addEventListener("drop", handleDrop);



function handleDrop() {
  if (draggedElement) {
    let rgb2 = window
    .getComputedStyle(draggedElement)
    .getPropertyValue("fill");
    const result = endDrag(event);

 console.log(result);
  let colors = ["red", "green", "blue"] 
  
  // Getting the index of "(" and ")"  
  // by using the indexOf() method 

  
  let colorArr2 = rgb2.slice( 
  rgb2.indexOf("(") + 1,  
  rgb2.indexOf(")") 
  ).split(", "); 
  
  
  let obj2 = new Object(); 
  
  // Insert the values into obj 
  
  
  colorArr2.forEach((k, i) => { 
  obj2[colors[i]] = k 
  }) 
  
  let r2 = obj2['red'];
  let g2 = obj2['green'];
  let b2 = obj2['blue']; 
  rgb2hex(r2,g2,b2);
  
    let color = window
    .getComputedStyle(draggedElement)
    .getPropertyValue("fill");
      let paintCol = window
      .getComputedStyle(paint)
      .getPropertyValue("fill");
  // got code from https://www.geeksforgeeks.org/how-to-convert-rgb-color-string-into-an-object-in-javascript/
      let rgb = paintCol;

      
      let colorArr = rgb.slice( 
        rgb.indexOf("(") + 1,  
        rgb.indexOf(")") 
    ).split(", "); 

    let obj = new Object(); 

    colorArr.forEach((k, i) => { 
      obj[colors[i]] = k 
  }) 

  let r = obj['red'];
  let g = obj['green'];
  let b = obj['blue']; 

  rgb2hex(r,g,b)
      code.textContent = paint.style.fill;
      hCode.textContent= rgb2hex(r,g,b);
      paintHex=rgb2hex(r,g,b);
      draggedElement = null;



      let c1 = rgb2hex(r,g,b);
      let c2 = result;
      console.log(c1);
      console.log(c2);
mix_hexes(c1,c2);
color = mix_hexes(c1,c2);
paint.style.fill = color;

hCode.textContent = color;
  draggedElement = null;



  }
}





function rgb2hex(r, g, b) {
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  r = Math.min(r, 255);
  g = Math.min(g, 255);
  b = Math.min(b, 255);
  return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
}

// color mixing code from GirkovArpa on Stackflow.com

function hex2dec(hex) {
  return hex.replace('#', '').match(/.{2}/g).map(n => parseInt(n, 16));
}

// function rgb2hex(r, g, b) {
//   r = Math.round(r);
//   g = Math.round(g);
//   b = Math.round(b);
//   r = Math.min(r, 255);
//   g = Math.min(g, 255);
//   b = Math.min(b, 255);
//   return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
// }

function rgb2cmyk(r, g, b) {
  let c = 1 - (r / 255);
  let m = 1 - (g / 255);
  let y = 1 - (b / 255);
  let k = Math.min(c, m, y);
  c = (c - k) / (1 - k);
  m = (m - k) / (1 - k);
  y = (y - k) / (1 - k);
  return [c, m, y, k];
}

function cmyk2rgb(c, m, y, k) {
  let r = c * (1 - k) + k;
  let g = m * (1 - k) + k;
  let b = y * (1 - k) + k;
  r = (1 - r) * 255 + .5;
  g = (1 - g) * 255 + .5;
  b = (1 - b) * 255 + .5;
  return [r, g, b];
}


function mix_cmyks(...cmyks) {
  let c = cmyks.map(cmyk => cmyk[0]).reduce((a, b) => a + b, 0) / cmyks.length;
  let m = cmyks.map(cmyk => cmyk[1]).reduce((a, b) => a + b, 0) / cmyks.length;
  let y = cmyks.map(cmyk => cmyk[2]).reduce((a, b) => a + b, 0) / cmyks.length;
  let k = cmyks.map(cmyk => cmyk[3]).reduce((a, b) => a + b, 0) / cmyks.length;
  return [c, m, y, k];
}

function mix_hexes(...hexes) {
  let rgbs = hexes.map(hex => hex2dec(hex)); 
  let cmyks = rgbs.map(rgb => rgb2cmyk(...rgb));
  let mixture_cmyk = mix_cmyks(...cmyks);
  let mixture_rgb = cmyk2rgb(...mixture_cmyk);
  let mixture_hex = rgb2hex(...mixture_rgb);
  return mixture_hex;
}

const loader = document.getElementById("preloader");

window.addEventListener("load", hide)

function hide() {
  loader.style.display = "none"
}



