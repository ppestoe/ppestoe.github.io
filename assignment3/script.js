// this is so that the other functions can refer to the dragged element
let draggedElement = null;
let paintHex = null; 
// defining the main variables that I'll be working with
const colorBlob = document.querySelector(".blob");
// individually doing the variables for the colors to access the color information
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

// when the color is dragged the dragged element is set to the according color
redBlob.addEventListener("dragstart", redStartDrag);  
orangeBlob.addEventListener("dragstart", orangeStartDrag); 
yellowBlob.addEventListener("dragstart", yellowStartDrag)
greenBlob.addEventListener("dragstart", greenStartDrag);
blueBlob.addEventListener("dragstart", blueStartDrag);
purpleBlob.addEventListener("dragstart", purpleStartDrag);
whiteBlob.addEventListener("dragstart", whiteStartDrag);
blackBlob.addEventListener("dragstart", blackStartDrag);
// event listener for the reset button
resetBtn.addEventListener("click", resetColor);
// when the button is clicked, the color goes back to its original fill and the color codes disappear.
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
// my approach to this project is to get two different hex codes (one from the paint blobs on the sides and one from the current color of the paint blobs in the middle)
//  and mix those hex codes together to get the new color to be displayed


paint.addEventListener("dragover", endDrag);
// as the paint blobs get dragged, the colour value of the dragged blob gets read and outputs an rgb value,
// the rgb value is then dissected into individual r, g and b values
//  because the r/g/b values needed to be converted into hexcodes for me to be able to use the mixhex funcion that I found from stackflow.com

function endDrag(event) {
  let rgb2 = window
  .getComputedStyle(draggedElement)
  .getPropertyValue("fill");

// I got the rgb to obj code from https://www.geeksforgeeks.org/how-to-convert-rgb-color-string-into-an-object-in-javascript/
// I had to use this code a few times to get different hexcodes at different instances, this one gets the hexcode from the dragged paint blob.
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
// here I define red/green/blue seperately according to the colour values I got from the previous code
let r2 = obj2['red'];
let g2 = obj2['green'];
let b2 = obj2['blue']; 
// the variables are put into a 'translator' function that converts rgb codes to hex code
rgb2hex(r2,g2,b2);
const result = rgb2hex(r2,g2,b2)
console.log(rgb2hex(r2,g2,b2));

event.preventDefault();
// returns the result variable so I could refer to it in other elements
return result

}
// function for when the dragged blobs are dropped
paint.addEventListener("drop", handleDrop);



function handleDrop() {
  if (draggedElement) {
    // I reestablish the variables again to use them in this function, this gives me access to the color of the dragged blob
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
  // this gives me access to the color of the middle blob
    let color = window
    .getComputedStyle(draggedElement)
    .getPropertyValue("fill");
      let paintCol = window
      .getComputedStyle(paint)
      .getPropertyValue("fill");
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
  // this changes the text content of the hex code and rgb code according to the middle blob
      code.textContent = paint.style.fill;
      hCode.textContent= rgb2hex(r,g,b);

      paintHex=rgb2hex(r,g,b);
      draggedElement = null;
// this is where the mixing happens, I first set two variables for each color, and put the two variables into the mixhexes function
      let c1 = rgb2hex(r,g,b);
      let c2 = result;
      console.log(c1);
      console.log(c2);
mix_hexes(c1,c2);
color = mix_hexes(c1,c2);
// fill the middle blob with the mixed color. 
paint.style.fill = color;

hCode.textContent = color;
  draggedElement = null;
  }
}



// color mixing code from GirkovArpa on Stackflow.com


function rgb2hex(r, g, b) {
  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);
  r = Math.min(r, 255);
  g = Math.min(g, 255);
  b = Math.min(b, 255);
  return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
}

// these codes were also a part of GirkovArpa's original codes, but I didn't work with CMYK colors in this project so Im commenting them out to not confuse myself

// function hex2dec(hex) {
//   return hex.replace('#', '').match(/.{2}/g).map(n => parseInt(n, 16));
// }

// function rgb2cmyk(r, g, b) {
//   let c = 1 - (r / 255);
//   let m = 1 - (g / 255);
//   let y = 1 - (b / 255);
//   let k = Math.min(c, m, y);
//   c = (c - k) / (1 - k);
//   m = (m - k) / (1 - k);
//   y = (y - k) / (1 - k);
//   return [c, m, y, k];
// }

// function cmyk2rgb(c, m, y, k) {
//   let r = c * (1 - k) + k;
//   let g = m * (1 - k) + k;
//   let b = y * (1 - k) + k;
//   r = (1 - r) * 255 + .5;
//   g = (1 - g) * 255 + .5;
//   b = (1 - b) * 255 + .5;
//   return [r, g, b];
// }

// function mix_cmyks(...cmyks) {
//   let c = cmyks.map(cmyk => cmyk[0]).reduce((a, b) => a + b, 0) / cmyks.length;
//   let m = cmyks.map(cmyk => cmyk[1]).reduce((a, b) => a + b, 0) / cmyks.length;
//   let y = cmyks.map(cmyk => cmyk[2]).reduce((a, b) => a + b, 0) / cmyks.length;
//   let k = cmyks.map(cmyk => cmyk[3]).reduce((a, b) => a + b, 0) / cmyks.length;
//   return [c, m, y, k];
// }

function mix_hexes(...hexes) {
  let rgbs = hexes.map(hex => hex2dec(hex)); 
  let cmyks = rgbs.map(rgb => rgb2cmyk(...rgb));
  let mixture_cmyk = mix_cmyks(...cmyks);
  let mixture_rgb = cmyk2rgb(...mixture_cmyk);
  let mixture_hex = rgb2hex(...mixture_rgb);
  return mixture_hex;
}

// I added a loader to the page, when the page is loaded, the loader is hidden. 
const loader = document.getElementById("preloader");

window.addEventListener("load", hide)

function hide() {
  loader.style.display = "none"
}


// this is for the screen that pops up at the beginning of the page
const pop = document.getElementById("pop");
const popBtn = document.querySelector("#close-pop");

popBtn.addEventListener("click", hidePop);

function hidePop(){
  pop.style.display = "none"

}

