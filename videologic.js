const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("eventVideo");
const closeBtn = document.querySelector(".close-video");
const previewButtons = document.querySelectorAll(".preview-btn");

// Open Video
previewButtons.forEach(button => {
  button.addEventListener("click", () => {
    // 1. Get the video source from data attribute
    const videoSrc = button.getAttribute("data-video") || "https://www.w3schools.com/html/mov_bbb.mp4"; 
    
    videoPlayer.src = videoSrc; 
    videoPlayer.load(); // Forces the player to load the new source
    
    modal.style.display = "flex";
    
    // 2. Play the video using Video API
    videoPlayer.play().catch(error => {
       console.error("Playback failed. Most browsers require user interaction first.", error);
    });
  });
});

// Close Video
closeBtn.onclick = function() {
  modal.style.display = "none";
  videoPlayer.pause(); // Video API method: Pause
  videoPlayer.currentTime = 0; // Reset video to start
}

// Close if user clicks outside the video box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    videoPlayer.pause();
  }
}