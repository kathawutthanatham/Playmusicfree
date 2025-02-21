const audio = document.getElementById("audio");

audio.addEventListener("play", () => {
    console.log("Song is playing");
});

audio.addEventListener("pause", () => {
    console.log("Song is paused");
});
function showSongs(artist) {
    const songsList = document.getElementById("songs-list");

    // ล้างรายการเพลงก่อน
    songsList.innerHTML = "";

    // แสดงรายการเพลงตามนักร้องที่เลือก
    let songs = [];
    if (artist === "billie") {
        songs = [
            "Bad Guy",
            "When the Party's Over",
            "Everything I Wanted",
            "bury a friend",
            "Ocean Eyes"
        ];
    } else if (artist === "ariana") {
        songs = [
            "Thank U, Next",
            "7 Rings",
            "No Tears Left to Cry",
            "Into You",
            "Dangerous Woman"
        ];
    }

    // สร้างรายการเพลง
    songs.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song");
        songDiv.innerHTML = `
            <h3>${song}</h3>
            <audio controls>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        `;
        songsList.appendChild(songDiv);
    });

    // แสดงรายการเพลง
    songsList.style.display = "block";
}
