# Assesment-Test

# Multiple Videos PiP Web Page

This repository contains a web page that displays multiple videos and enables Picture-in-Picture (PiP) functionality for each video when they go out of the viewport. Users can also play, pause, and mute the videos in PiP mode.
## kindly refresh the browser if it doesn't work properly
## Prerequisites

- A modern web browser that supports the Picture-in-Picture API (e.g., Chrome, Firefox, Safari).
- Video files (e.g., `demo.mp4`, `demo1.mp4`, `demo2.mp4`, `demo3.mp4`) in the same directory as your HTML file.

## Getting Started

1. Clone this repository to your local machine or download it as a ZIP file and extract it.

2. Navigate to the project directory using a terminal or file explorer.

3. Open the `index.html` file in a web browser to view the web page.

## Usage

- The web page displays four video containers, each with a video and a "Enter PiP" button.

- To activate Picture-in-Picture (PiP) mode for a video, click the "Enter PiP" button next to that video.

- While in PiP mode, you can:
  - Play the PiP video by clicking the play button in the PiP window.
  - Pause the PiP video by clicking the pause button in the PiP window.
  - Mute/unmute the PiP video by clicking the speaker icon in the PiP window.

- To exit PiP mode, click the "Enter PiP" button again.

- PiP mode is automatically activated when a video goes out of the viewport while scrolling down the page.

## Customization

- You can add more video containers by duplicating the HTML code in `index.html` and specifying a unique `id` for each video (`demo1`, `demo2`, `demo3`, etc.) and a corresponding "Enter PiP" button with the `data-video-id` attribute set to the video's `id`.

## Browser Compatibility

This web page is compatible with modern web browsers that support the Picture-in-Picture API. Please ensure you are using an up-to-date browser for the best experience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
