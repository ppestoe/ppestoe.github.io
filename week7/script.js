const airportAudio = document.querySelector("#airp");
console.log(airportAudio);

const playButton = document.querySelector("#butt");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio);

function playAirportAudio() {
    airportAudio.play();
}



const pauseButton = document.querySelector("#nobutt");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAirportAudio);

function pauseAirportAudio() {
    airportAudio.pause();
}

const popButton = document.querySelector("#pop");
console.log(popButton);


const popSound = document.querySelector("#nayeon");
console.log(popButton);

popButton.addEventListener("click", popIt);

function popIt() {
    popSound.play();
}

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "Screenshot 2024-05-07 at 3.10.35 PM.png"){
        document.getElementById("imgClickAndChange").src = "download.jpeg";
    } else {
        document.getElementById("imgClickAndChange").src = "Screenshot 2024-05-07 at 3.10.35 PM.png";
    }
}