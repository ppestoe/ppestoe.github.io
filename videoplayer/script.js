const myVideo = document.querySelector("#video");
console.log(myVideo);

const playButton = document.querySelector("#button");
console.log(playButton);

const buttonImg = document.querySelector("#buttonimg");
console.log(buttonImg);

playButton.addEventListener("click", playVideo);

function playVideo()
{
    if(myVideo.paused || myVideo.ended)

        {
            buttonImg.src="Screenshot 2024-05-07 at 3.10.35 PM.png";
            myVideo.play();
        }
        else{
            buttonImg.src="download.jpeg";
            myVideo.pause();
        }

}