const audioList = [
    {
      name: "Colorful Flowers by Tokyo Music Walker",
      link: "lofi/ColorfulFlowers.mp3",
    },
    {
      name: "Purple Dream by Ghostrifter Official",
      link: "lofi/PurpleDream.mp3",
    },
    {
      name: "Wild Strawberry by Purrple Cat",
      link: "lofi/WildStrawb.mp3",
    },
    {
      name: "Fragile by Keys of Moon",
      link: "lofi/Fragile.mp3",
    },
    {
      name: "Green Tea by Purrple Cat",
      link: "lofi/GreenTea.mp3",
    },
    {
      name: "Torn by Purrple Cat",
      link: "lofi/Torn.mp3",
    },
  ];
  
  const myAudio = document.querySelector("#myaudio");
  console.log(myAudio);
  const audioName = document.querySelector("audio-name");
  
  function playAudio(no) {
    myAudio.pause();
    myAudio.src = audioList[no].link;
    audioName.textContent = audioList[no].name;
    myAudio.load();
    myAudio.play();
  }
  
  const playPauseBtn = document.querySelector("#playpausebtn");
  console.log(playPauseBtn);
  
  const playPauseImg = document.querySelector("#playpauseimg");
  console.log(playPauseImg);
  
  myAudio.removeAttribute("controls");
  
  playPauseBtn.addEventListener("click", toggleAudioPlayback);
  
  function toggleAudioPlayback() {
    if (myAudio.paused || myAudio.ended) {
      playPauseImg.src = "files/pause.png";
      myAudio.play();
    } else {
      playPauseImg.src = "files/play.png";
      myAudio.pause();
    }
  }
  
  // ---------------------------------------------------------------
  
  const prevButton = document.querySelector("#prevbtn");
  console.log(prevButton);
  prevButton.addEventListener("click", prevTrack);
  
  const nextButton = document.querySelector("#nextbtn");
  console.log(nextButton);
  nextButton.addEventListener("click", nextTrack);
  
  let currentIndex = 0;
  
  function prevTrack() {
    console.log("previous track loading");
    currentIndex = (currentIndex - 1 + audioList.length) % audioList.length;
    console.log(currentIndex);
    playAudioAtIndex(currentIndex);
  }
  
  function nextTrack() {
    console.log("next track loading");
    currentIndex = (currentIndex + 1) % audioList.length;
    console.log(currentIndex);
    playAudioAtIndex(currentIndex);
  }
  
  function playAudioAtIndex(index) {
    myAudio.pause(); // Pause the video before changing source
    console.log(audioList[index].link);
    myAudio.src = audioList[index].link;
    myAudio.load(); // Load the new source
    myAudio.play(); // Play the audio
  }
  
  //to autoplay the next song in the list
  myAudio.addEventListener("ended", nextTrack);
  
  // ---------------------------------------------------------------
  
  let loop = false;
  
  const loopBtn = document.querySelector("#loopbtn");
  loopBtn.addEventListener("click", loopAudio);
  
  myAudio.addEventListener("ended", replay);
  
  function replay() {
    console.log("loop is", loop);
    if (loop) {
      myAudio.currentTime = 0;
      myAudio.play();
    }
  }
  
  function loopAudio() {
    if (loop) {
      loop = false;
      loopBtn.style.backgroundColor = "#ffffff";
    } else {
      loop = true;
      loopBtn.style.backgroundColor = "#89898968";
    }
    console.log("loop is", loop);
  }
  
  // ---------------------------------------------------------------
  
  myAudio.addEventListener("timeupdate", updateProgressBar);
  
  const progressBarFill = document.querySelector("#progbarfill");
  console.log(progressBarFill);
  
  function updateProgressBar() {
    const progress = (myAudio.currentTime / myAudio.duration) * 100;
    progressBarFill.style.width = progress + "%";
    console.log(progress);
  }
  
  // ---------------------------------------------------------------
  
  const muteUnmutebtn = document.querySelector("#muteunmutebtn");
  console.log(muteUnmutebtn);
  
  muteUnmutebtn.addEventListener("click", toggleSound);
  
  function toggleSound() {
    if (myAudio.muted) {
      myAudio.muted = false;
      muteUnmutebtn.style.backgroundColor = "#ffffff";
    } else {
      myAudio.muted = true;
      muteUnmutebtn.style.backgroundColor = "#89898968";
    }
  }
  
  // ---------------------------------------------------------------
  
  const decreaseVolBtn = document.querySelector("#voldownbtn");
  decreaseVolBtn.addEventListener("click", decreaseVolume);
  
  const increaseVolBtn = document.querySelector("#volupbtn");
  increaseVolBtn.addEventListener("click", increaseVolume);
  
  // Event listener to check current volume
  myAudio.addEventListener("volumechange", updateVolume);
  
  function updateVolume() {
    const volume = myAudio.volume;
    console.log("Volume changed:", volume);
  }
  
  function increaseVolume() {
    if (myAudio.volume < 1.0) {
      myAudio.volume += 0.1;
    }
  }
  function decreaseVolume() {
    if (myAudio.volume > 0.1) {
      myAudio.volume -= 0.1;
    }
  }
  
  // ---------------------------------------------------------------
  // This is to create a stopwatch that users can use to time how long they've been studying/relaxing for
  var startTime;
  var stopwatchInterval;
  var elapsedPausedTime = 0;
  
  function startStopwatch() {
    if (!stopwatchInterval) {
      startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
      stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
    }
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable
  }
  
  function resetStopwatch() {
    stopStopwatch(); // stop the interval
    elapsedPausedTime = 0; // reset the elapsed paused time variable
    document.getElementById("stopwatch").innerHTML = "00:00:00"; // reset the display
  }
  
  function updateStopwatch() {
    var currentTime = new Date().getTime(); // get current time in milliseconds
    var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
    var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
    var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
    document.getElementById("stopwatch").innerHTML = displayTime; // update the display
  }
  
  function pad(number) {
    // add a leading zero if the number is less than 10
    return (number < 10 ? "0" : "") + number;
  }
  
  // ---------------------------------------------------------------
  
  window.addEventListener("resize", function () {
    if (window.innerWidth >= "800") {
      window.location.href = "index.html";
    }
  });
  
  // ---------------------------------------------------------------
  
  // const audioPlayer = document.querySelector("#myaudio");
  
  // // the following code will play the audio when user resizes the window to 400px
  
  // function checkWindowWidth() {
  //   const windowWidth = window.innerWidth;
  
  //   console.log(windowWidth);
  
  //   const minWidthThreshold = 800;
  
  //   // If window width is at or below the minimum threshold, start playing audio
  
  //   if (windowWidth <= minWidthThreshold) {
  //     audioPlayer.play();
  //   } else {
  //     audioPlayer.pause();
  //   }
  // }
  
  // window.addEventListener("resize", checkWindowWidth);
  
  // checkWindowWidth();
  
  // ---------------------------------------------------------------
  
  // let trackList = [
  //   {
  //     name: "Colourful Flowers",
  //     path: "./lofi/Purple Dream by Ghostrifter Official.mp3",
  //     singer: "Tokyo Music Walker",
  //   },
  //   {
  //     name: "Purple Dream",
  //     path: "./lofi/Purple Dream by Ghostrifter Official.mp3",
  //     singer: "Ghostrifter Official",
  //   },
  //   {
  //     name: "Wild Strawberry",
  //     path: "./lofi/Wild Strawberry by Purrple Cat.mp3",
  //     singer: "Purrple Cat",
  //   },
  // ];
  
  // const playpausebtn = document.querySelector("playpausebtn"),
  //   playPauseImg = document.querySelector("#playpauseimg"),
  //   previous = document.querySelector("prevbtn"),
  //   next = document.querySelector("nextbtn");
  
  // let timer;
  // let autoplay = 0;
  // let indexTrack = 0;
  // let songIsPlaying = false;
  // let track = document.createElement("audio");
  
  // playpausebtn.addEventListener("click", justPlay);
  // next.addEventListener("click", nextSong);
  // previous.addEventListener("click", prevSong);
  
  // // Load Tracks
  // function loadTrack(indexTrack) {
  //   clearInterval(timer);
  //   resetSlider();
  
  //   track.src = trackList[indexTrack].path;
  //   title.innerHTML = trackList[indexTrack].name;
  //   artist.innerHTML = trackList[indexTrack].singer;
  //   track.load();
  // }
  // loadTrack(indexTrack);
  
  // // Play Song
  // function playSong() {
  //   track.play();
  //   songIsPlaying = true;
  //   // play.innerHTML = '<i class="fas fa-pause"></i>';
  // }
  
  // // Pause Song
  // function pauseSong() {
  //   track.pause();
  //   songIsPlaying = false;
  //   // play.innerHTML = '<i class="fas fa-play"></i>';
  // }
  
  // // Next song
  // function nextSong() {
  //   if (indexTrack < trackList.length - 1) {
  //     indexTrack++;
  //     loadTrack(indexTrack);
  //     playSong();
  //   } else {
  //     indexTrack = 0;
  //     loadTrack(indexTrack);
  //     playSong();
  //   }
  // }
  
  // // prev song
  // function prevSong() {
  //   if (indexTrack > 0) {
  //     indexTrack--;
  //     loadTrack(indexTrack);
  //     playSong();
  //   } else {
  //     indexTrack = trackList.length - 1;
  //     loadTrack(indexTrack);
  //     playSong();
  //   }
  // }
  
  // ---------------------------------------------------------------
  
  // function updateMetadata() {
  //   let track = audioList[index];
  
  //   console.log('Playing ' + track.title + ' track...');
  //   navigator.mediaSession.metadata = new MediaMetadata({
  //     title: track.title,
  //     artist: track.artist,
  //     album: track.album,
  //     artwork: track.artwork,
  //   });
  
  // ---------------------------------------------------------------
  
  // const audioName = document.querySelector("#audioname");
  
  // // We create an object array containing the videos
  // const audioList = [
  //   {
  //     name: "Colourful Flowers",
  //     link: "lofi/Colorful Flowers by Tokyo Music Walker.mp3",
  //   },
  //   { name: "Stardust", link: "stardust.mp4" },
  // ];
  
  // //depending on the number, it will fetch the right video and its name from the VideoList array
  // function playAudio(no) {
  //   myAudio.src = audioList[no].link;
  //   audioName.textContent = audioList[no].name;
  //   // myVideo.load();
  //   // myVideo.play();
  // }
  
  // ---------------------------------------------------------------
  
  // let prevbtn = document.querySelector(".prevbtn");
  // let nextbtn = document.querySelector(".nextbtn");
  
  // let playlist = [
  //   "Colorful Flowers by Tokyo Music Walker.mp3",
  //   "Purple Dream by Ghostrifter Official.mp3",
  //   "Wild Strawberry by Purrple Cat.mp3",
  // ];
  
  // let treck; // Variable with track index
  
  // // Event before page loading
  // window.onload = function () {
  //   treck = 0; // Assign zero to the variable
  // };
  // const title = document.getElementById("audio-name");
  
  // const songs = [
  //   "Colourful Flowers by Tokyo Music Walker",
  //   "Purple Dream by Ghostrifter Official",
  //   "Wild Strawberry by Purrple Cat",
  // ];
  
  // let songIndex = 2;
  
  // loadSong(songs[songIndex]);
  
  // function loadSong(song) {
  //   title.innerText = song;
  //   audio.src = "lofi/${song}.mp3";
  // }
  
  // ---------------------------------------------------------------
  
  // const prevBtn = document.querySelector("#prevbtn");
  // const nextBtn = document.querySelector("#nextbtn");
  
  // prevBtn.addEventListener("click", prevSong);
  // nextBtn.addEventListener("click", nextSong);
  
  // function prevSong() {
  //   songIndex--;
  
  //   if (songIndex < 0) {
  //     songIndex = songs.length - 1;
  //   }
  
  //   loadSong(songs[songIndex]);
  
  //   playSong();
  // }
  
  // function nextSong() {
  //   songIndex++;
  
  //   if (songIndex > songs.length - 1) {
  //     songIndex = 0;
  //   }
  
  //   loadSong(songs[songIndex]);
  
  //   playSong();
  // }
  
  // ---------------------------------------------------------------
  
  // if (screen.width <= 950) {
  //   window.location = "https://orz-ed.github.io/assignment2.html";
  // }
  // if (screen.width <= 950) {
  //   window.location.replace("https://orz-ed.github.io/assignment2/index2.html");
  // }