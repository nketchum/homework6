var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
  video.play()
  var label = document.getElementById('volume');
  label.innerHTML = (video.volume * 100) + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
  console.log("Pause Video");
  video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
  video.playbackRate = video.playbackRate * .9
  console.log("New speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
  video.playbackRate = video.playbackRate * 1.1
  console.log("New speed is", video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
  var button = document.querySelector("#mute");
  if (video.muted == false) {
    button.innerHTML="Unmute";
    video.muted = true
  } else {
    button.innerHTML="Mute";
    video.muted = false
  }
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
  var vol = document.getElementById('volumeSlider');
  var label = document.getElementById('volume');
  video.volume = vol.value / 100;
  label.innerHTML = vol.value + "%"
  console.log(video.volume)
});

document.querySelector("#skip").addEventListener("click", function() {
  if (video.currentTime + 5 < video.duration) {
    video.currentTime = video.currentTime + 5
    console.log("Current location", video.currentTime)
  } else {
    video.currentTime = 0
    console.log("Going back to beginning")
  }
});

document.querySelector("#old").addEventListener("click", function() {
  video.className = "oldTime"
});

document.querySelector("#original").addEventListener("click", function() {
  video.className = ""
});