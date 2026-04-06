var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	// Initialize video element
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

	// Update volume display
	function updateVolInfo() {
		document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
		console.log("Volume: " + Math.round(video.volume * 100) + "%");
	}

	// Play
	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		updateVolInfo();
		console.log("Play Video");
	});

	// Pause
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});

	// Slow Down — multiply by 0.9
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("Playback rate: " + video.playbackRate);
	});

	// Speed Up — multiply by 1/0.9 
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate *= (1 / 0.9);
		console.log("Playback rate: " + video.playbackRate);
	});

	// Skip Ahead — 10 seconds
	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 10;
		if (video.currentTime > video.duration) {
			video.currentTime = 0;
		}
		console.log("Current time: " + video.currentTime);
		console.log("Skip Ahead");
	});

	// Mute/Unmute
	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute"; 
		console.log("Mute/Unmute");
	});

	// Volume Slider
	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		updateVolInfo();
	});

	// Old School
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
		console.log("Old School");
	});

	// Original
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
		console.log("Original");
	});

});