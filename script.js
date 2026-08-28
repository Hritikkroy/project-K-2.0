function nextSection(current, next) {

    const currentSection = document.getElementById(current);
    const nextSection = document.getElementById(next);

    if (!currentSection || !nextSection) return;

    currentSection.classList.remove("active");

    setTimeout(() => {
        nextSection.classList.add("active");
    }, 400);
} 

/* =========================================================
   VOICE MESSAGE
========================================================= */

const voiceAudio = document.getElementById("voiceAudio");
const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const voiceStatus = document.getElementById("voiceStatus");
const voiceNext = document.getElementById("voiceNext");


function toggleVoice() {

    if (!voiceAudio) return;


    if (voiceAudio.paused) {

        voiceAudio.play();

        playIcon.textContent = "❚❚";

        playButton.classList.add("playing");

        voiceStatus.textContent = "Playing...";

    } else {

        voiceAudio.pause();

        playIcon.textContent = "▶";

        playButton.classList.remove("playing");

        voiceStatus.textContent = "Paused";

    }

}


/* When voice message finishes */

if (voiceAudio) {

    voiceAudio.addEventListener("ended", () => {

        playIcon.textContent = "↻";

        playButton.classList.remove("playing");

        voiceStatus.textContent = "Listen again";

        voiceNext.classList.add("show");

    });

}