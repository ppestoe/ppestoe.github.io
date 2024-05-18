const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");

playPauseButton.addEventListener("click", toggleVideoPlayback);

function toggleVideoPlayback() {
    if(myVideo.paused|| myVideo.ended) {
        playPauseImg.src = "download.jpeg";
        myVideo.play()
    } else {
        playPauseImg.src = "twitter-card.jpg"
        myVideo.pause();
    }
    }

    //----------------------------------------------

    const muteUnmuteImg = document.querySelector("#mute-unmute-img");

    const muteUnmuteButton = document.querySelector("#mute-unmute-button");
    muteUnmuteButton.addEventListener("click", toggleSound);
 

    function toggleSound() {
        if(myVideo.muted)
            {
                muteUnmuteImg.src = "soup1.png";
                muteUnmuteButton.style.backgroundColor = "blue";
                myVideo.muted=false;
            }
            else {
                muteUnmuteImg.src = "soup2.png";
                muteUnmuteButton.style.backgroundColor = "red";
                myVideo.muted=true;
            }
    }

    
    myVideo.addEventListener("timeupdate", updateProgressBar);
    const progressBarFill = document.querySelector("#progress-bar-fill");

    function updateProgressBar() {

        const progress = (myVideo.currentTime / myVideo.duration) * 100;
        progressBarFill.style.width = progress + "%";

    }
//-----------------------time stamps--------------------------

const step1Button = document.querySelector("#step1");
step1Button.addEventListener("click", goToStep1);

function goToStep1() {
    myVideo.currentTime = 16.0;
}

const step2Button = document.querySelector("#step2");
step2Button.addEventListener("click", goToStep2);

function goToStep2() {
    myVideo.currentTime = 46.0;
}

//-----------------------full screen--------------------------
myVideo.addEventListener("dblclick", goFullScreen);

const fullscreenButton = document.querySelector("#fullscreen-button");
fullscreenButton.addEventListener("click", goFullScreen);
function goFullScreen(){
    if(!document.fullscreenElement) {
        myVideo.requestFullscreen();
    }
    else{
        document.exitFullscreen();
    }
}