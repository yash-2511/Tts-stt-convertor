let textarea = document.querySelector("textarea");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.interimResults = true;
recognition.lang = 'en-US';


startBtn.addEventListener("click", () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});



stopBtn.addEventListener("click", () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});



recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    textarea.value = transcript;
});


recognition.addEventListener("end", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
