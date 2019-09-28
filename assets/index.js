import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const button = document.querySelector("#button");
const unMuted = document.querySelector("#unMutedButton");
const video = document.querySelector("video");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()]
});

button.onclick = () => player.TooglePlay();
unMuted.onclick = () => player.muteAndunMuted();
