const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".main_container");
kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("card");
  containerEl.appendChild(btnEl);
  btnEl.textContent = kit;
  const audioEl = document.createElement("audio");
  audioEl.src = "assets/sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
  // btnEl.addEventListener("dblclick", () => {
  //   audioEl.pause();
  //   audioEl.currentTime = 0;
  // });
  btnEl.addEventListener("mousedown", () => {
    audioEl.volume = 0.5;
  });
  btnEl.addEventListener("mouseup", () => {
    audioEl.volume = 1;
  });
  window.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      audioEl.style.transform = "scale(.9)";
    }
  });
});
