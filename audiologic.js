// Audio API Implementation for Background Music
const backgroundMusic = new Audio('audio/backrground.mp3');

// Audio API Properties
backgroundMusic.loop = true; // Loop the music continuously
backgroundMusic.volume = 0.3; // Set volume to 30% (0.0 to 1.0)

// Play button element
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

// Function to toggle music play/pause
function toggleMusic() {
  if (isPlaying) {
    backgroundMusic.pause(); // Audio API method: Pause
    musicToggle.textContent = '🔇 Play Music';
    musicToggle.classList.remove('playing');
  } else {
    backgroundMusic.play().catch(error => {
      console.error("Audio playback failed:", error);
    }); // Audio API method: Play
    musicToggle.textContent = '🔊 Pause Music';
    musicToggle.classList.add('playing');
  }
  isPlaying = !isPlaying;
}

// Event listener for toggle button
musicToggle.addEventListener('click', toggleMusic);

// Optional: Auto-play when page loads (may be blocked by browser)
// Uncomment the lines below if you want auto-play
// window.addEventListener('load', () => {
//   backgroundMusic.play().catch(error => {
//     console.log("Auto-play blocked by browser. User interaction required.");
//   });
//   isPlaying = true;
//   musicToggle.textContent = '🔊 Pause Music';
//   musicToggle.classList.add('playing');
// });

// Audio API Events
backgroundMusic.addEventListener('ended', () => {
  console.log('Music ended');
});

backgroundMusic.addEventListener('playing', () => {
  console.log('Music is playing');
});

backgroundMusic.addEventListener('pause', () => {
  console.log('Music paused');
});
