<<<<<<< Updated upstream
// To make a music album playlist, I need to make a list of the album covers
// as well as a list of song titles, and then an interactive progress bar.
//I've linked all my title/audio/covers to this list to make the coding process easier
const songList = [
    { name: "The Apolocheese Cat", link: "audio/the apolocheese (1).mp3" , img: "cover1.png" },
    { name: "Pink Penguin", link: "audio/Pink Penguin.mp3", img: "cover2.png" },
    { name: "Taobao Man", link: "audio/taobao man.mp3", img: "cover3.png" },
    { name: "My-estro", link: "audio/maestro.mp3", img: "cover4.jpg" },

  ];
  
  let loop = false;

  //--defining the main variables needed
  const songAudio = document.querySelector("#song-audio");
  const songName = document.querySelector("#song-name");
  const songCover = document.querySelector("#album-image");

//---text changing colors---,
//  I wanted to make my website more interesting,
  // so I researched on how to make my text change colours and found the code on this website:
  // https://www.geeksforgeeks.org/how-to-create-text-animation-effect-using-javascript/
  let colorIndex = 0;
 
  function changeColor() {
      const colors = ['pink', '#ee7bba'];//colors used in the cycle
      songName.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
  }
  // Change text color every 1000 milliseconds (1 second)
  setInterval(changeColor, 1000);


//   button controls 
// --play pause button--
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
playPauseBtn.addEventListener("click", togglePlay);

// --volume buttons(volup/down and mute/unmute)--
const volUpButton = document.querySelector("#vol-up-btn");
const volDownButton = document.querySelector("#vol-down-btn");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
const muteUnmuteButton = document.querySelector("#mute-unmute-btn");

muteUnmuteButton.addEventListener("click", toggleMute);


function toggleMute() {
    if(songAudio.muted)
        {         
            songAudio.muted=false;
            muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/40/07421F/mute--v1.png";
   
        }
        else {
            songAudio.muted=true;
            muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/40/9A155D/mute--v1.png";

        }
}


volUpButton.addEventListener("click", volumeUp);
volDownButton.addEventListener("click", volDown);

function volumeUp () {
if (songAudio.volume < 0.9) {
    songAudio.volume += 0.1;
}
}

function volDown() {
    if (songAudio.volume > 0.11) {
      songAudio.volume -= 0.1;
    }
  }
  
//   --Prev/Next Buttons--
const nextBtn = document.querySelector("#next-btn");
nextBtn.addEventListener("click", nextTrack)
const prevBtn = document.querySelector("#prev-btn");
prevBtn.addEventListener("click", prevTrack)

let currentIndex = 0;

function prevTrack() {
  console.log("previous track loading");
  currentIndex = (currentIndex - 1 + songList.length) % songList.length;
  console.log(currentIndex);
  playSongAtIndex(currentIndex);
}

function nextTrack() {
  console.log("next track loading");
  currentIndex = (currentIndex + 1) % songList.length;
  console.log(currentIndex);
  playSongAtIndex(currentIndex);
}

// Function to play video at a specific index
function playSongAtIndex(index) {
  songAudio.pause(); // Pause the video before changing source
  songAudio.src = songList[index].link;
  songName.textContent = songList[index].name; //changing the name displayed
  songCover.src = songList[index].img; //changing the album cover 
  songAudio.load(); // Load the new source
  songAudio.play(); // Play the video
}


function playSong(no) {
    songAudio.pause();
    songAudio.src = videoList[no].link;
    songName.textContent = songList[no].name;
    songAudio.load( );
    songAudio.play();

  }

  function togglePlay() {
    if(songAudio.paused|| songAudio.ended) {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/70/07421F//pause--v1.png";
        playPauseBtn.style.backgroundColor = "#83b895";
        songAudio.play()
    } else {
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/70/9A155D/play--v1.png"
        playPauseBtn.style.backgroundColor = "pink";
        songAudio.pause();
    }
  }


//   --Changing cover whenever the button is clicked--
//I made each cover into a button so I could understand my progress more clearly
const song1Btn = document.querySelector("#song1-btn");
const song2Btn = document.querySelector("#song2-btn");
const song3Btn = document.querySelector("#song3-btn");
const song4Btn = document.querySelector("#song4-btn");
//when a song cover is clicked, it plays a song accordingly
song1Btn.addEventListener("click", function playIt() {
    songAudio.pause();
    playSong(0);
  });

  song2Btn.addEventListener("click", function playIt() {
    songAudio.pause();
    playSong(1);
  });

  song3Btn.addEventListener("click", function playIt() {
    songAudio.pause();
    playSong(2);
  });

  song4Btn.addEventListener("click", function playIt() {
    songAudio.pause();
    playSong(3);
  });

//when a song is played, the audio/title/cover all changes accordingly
function playSong(no) {
    songAudio.pause();
    songAudio.src = songList[no].link;
    songName.textContent = songList[no].name;
    songCover.src = songList[no].img;
    songAudio.load();
    songAudio.play();
  }
  

//   --progress bar and duration--
const songTime = document.querySelector("#song-time");
const progressBar = document.querySelector(".progress-bar");
const progressBarFill = document.querySelector("#progress-bar-fill");
songAudio.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
    const progress = (songAudio.currentTime / songAudio.duration) * 100;
        progressBarFill.style.width = progress + "%";
        songTime.textContent = songAudio.currentTime.toFixed(2); //time duration displayed to 2 decimal pts
}
// allows the progress to be changed upon clicking the progress bar
// I found the tutorial at https://img.ly/blog/how-to-build-video-player-in-javascript/
//this function defines the progress bar moving when its clicked
function progressClicked(e) {
  const position = (e.offsetX / progressBar.offsetWidth) * songAudio.duration; //defines a 'position' based off of where the mouse lands, e being an event
  songAudio.currentTime = position; //this syncs the audio with the position
}
//this is making the function happen whenever the progress bar is clicked
progressBar.addEventListener("click", progressClicked);
let mousedown = false;
//these allows the user to slide through the progress bar. 
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mousemove", (e) => mousedown && progressClicked(e));
progressBar.addEventListener("mouseup", () => (mousedown = false));


//autoplay the next song
songAudio.addEventListener("ended", nextTrack);
=======
// song title change
const songTitle = document.querySelector(".songTitle");
console.log(songTitle);
>>>>>>> Stashed changes

