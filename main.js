import "./src/CSS/style.css";
import {
  countDownTimer,
  mainComponent,
  isTimerRunning,
} from "./src/JS/countDown";
import { header } from "./src/JS/header";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  app.appendChild(header.element);

  // const mainComponent = document.createElement("main");

  const buttons = Array.from(
    document.querySelectorAll(".time-setter-buttons button")
  );

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const time = button.getAttribute("data-time");
      if (!isTimerRunning) countDownTimer(time);
    });
  });

  app.appendChild(mainComponent);
});
