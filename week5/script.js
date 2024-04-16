let body = document.querySelector("body");
function checkWeather() {
let temp = document.querySelector("#temperature");
let temperature = temp.value; 
if(temperature >=10 && temperature < 20){
    console.log("it chilly");
    body.style.backgroundColor = "lightblue";
}
else if (temperature >= 20 && temperature < 30){
    console.log("warmmy :DD");
    body.style.backgroundColor = "pink";
}
else if (temperature > 30) {
    console.log("우리는 drop it like hot");
    body.style.backgroundColor = "red";
}
else if (temperature < 10){
    console.log("why did you leave the house");
    body.style.backgroundColor = "orange";
}
}