// const myHeading = document.querySelectorAll("p");
// console.log(myHeading);
// // //allow to store code, query selector searching for the very first p tags
// // console.log(myHeading. textContent);
// // //prints out myHeading
// // // this changes the heading idk what this is for 
// // myHeading.textContent = "this is new heading"
// // myHeading.style.backgroundColor="lightblue";
// // //the above would not work with queryselectorall bc its not an array

// // for(let i =0; i<3; i++)
// // {
// //     myHeading[i].textContent = "new" + i;
// //     myHeading[i].style.backgroundColor = "limegreen";

// // }

// myHeading.forEach(changeMe);

// function changeMe(item) {
//     // item.style.backgroundColor = "coral"
//     item.classList.add("purple-box");
// }



const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", toggleMe);

function toggleMe()
{
    const myImage = document.querySelector("#my-image");
console.log(myImage);
myImage.classList.toggle("round");
console.log(myImage.dataset.catname);
myButton.textContent = myImage.dataset.catname;
}

function toggleColor()
{
    const myButton = document.querySelector("#my-button");
myButton.classList.toggle("purple-box");
toggleMe();
}

// const myButton = document.querySelector("#my-button");
// console.log(myButton);

myButton.addEventListener("click", toggleMe);

function toggleMe()
{
    const myImage = document.querySelector("#my-image");
console.log(myImage);
myImage.classList.toggle("round");
console.log(myImage.dataset.catname);
myButton.textContent = myImage.dataset.catname;
}

// function chooseTopic()
// {
//     const myPara = document.querySelectorAll("p");
//     myPara.forEach(displayTopic);
//     function displayTopic(item) 
//     {
//         if(item.dataset.topic==="game")
//         {
//             item.classList.add("blue-box")
//         }
//         else if(item.dataset.topic==="web")
//         {
//             item.classList.add("coral-box")
//         }
//     }
// }

const myTitle = document.querySelector("h1");
myTitle.textContent = "I am a new heading"; 
let course = "up";
const myImage = document.querySelector("#my-image");
myTitle.innerHTML = `I am <span class="coral-box"> soup </span>`;


myImage.addEventListener("mouseover", makeItRound);
myImage.addEventListener("mouseout", makeItSquare);

function makeItRound(){
    myImage.classList.add("round");
}

function makeItSquare(){
    myImage.classList.remove("round");
}
