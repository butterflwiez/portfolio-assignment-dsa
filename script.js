// Select all video elements within the .projects div
const videos = document.querySelectorAll('.projects video');

// Loop through each video and add event listeners
videos.forEach(video => {
    // Play the video when mouse enters
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    // Pause the video when mouse leaves
    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});
