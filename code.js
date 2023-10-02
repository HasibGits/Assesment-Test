document.addEventListener('DOMContentLoaded', function () {
    const videoContainers = document.querySelectorAll('.video-container');
    const pipButtons = document.querySelectorAll('.pip-button');
    let activePiPVideos = new Map();

    // Function to enter PiP mode for a specific video
    function enterPiP(video) {
        if (!activePiPVideos.has(video)) {
            if (video.requestPictureInPicture) {
                video.requestPictureInPicture()
                    .then((pipWindow) => {
                        activePiPVideos.set(video, pipWindow);

                        // Add event listeners for play, pause, and mute
                        pipWindow.addEventListener('play', () => {
                            video.play();
                        });
                        pipWindow.addEventListener('pause', () => {
                            video.pause();
                        });
                        pipWindow.addEventListener('volumechange', () => {
                            video.volume = pipWindow.volume;
                            video.muted = pipWindow.muted;
                        });

                        video.muted = true; // Mute the PiP video by default
                    })
                    .catch((error) => {
                        console.error('Error entering PiP mode:', error);
                    });
            } else {
                console.error('Picture-in-Picture mode is not supported in this browser.');
            }
        }
    }

    // Function to exit PiP mode for a specific video
    function exitPiP(video) {
        if (activePiPVideos.has(video)) {
            const pipWindow = activePiPVideos.get(video);
            pipWindow.close();
            activePiPVideos.delete(video);
        }
    }

    // Toggle PiP mode when the button is clicked
    pipButtons.forEach((button) => {
        const videoId = button.getAttribute('data-video-id');
        const video = document.getElementById(videoId);

        button.addEventListener('click', () => {
            if (activePiPVideos.has(video)) {
                exitPiP(video);
            } else {
                enterPiP(video);
            }
        });
    });

    // Use Intersection Observer to detect when a video is out of the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const videoId = entry.target.querySelector('video').id;
            const video = document.getElementById(videoId);

            if (!entry.isIntersecting) {
                enterPiP(video);
            } else {
                exitPiP(video);
            }
        });
    });

    videoContainers.forEach((container) => {
        observer.observe(container);
    });
});
