const audio = document.getElementById("audio");

audio.addEventListener("play", () => {
    console.log("Song is playing");
});

audio.addEventListener("pause", () => {
    console.log("Song is paused");
});