import "../CSS/countDown.css";
import { mintsToSeconds,timeFormatter } from "./logic";

export const mainComponent = document.createElement("main");

export let isTimerRunning = false;
const section = document.createElement("section");
section.classList.add("timer-section");

const h1 = document.createElement("h1");
h1.classList.add("timer");
h1.textContent = "00:00:00";

export const countDownTimer = (mints) => {
  const seconds = mintsToSeconds(mints);
  const countDown = (seconds) => {
    let currentSecond = seconds;
    if (currentSecond === 0) {
      h1.textContent = "Time to rest!";
      isTimerRunning = false;
      return;
    } else {
      if(!isTimerRunning) isTimerRunning = true
      h1.textContent = timeFormatter(currentSecond);
      setTimeout(() => countDown(currentSecond - 1), 1000); // decrease the second and call the function again after 1 second
    }
  };
  countDown(seconds);

  section.appendChild(h1);
  mainComponent.appendChild(section);
};
