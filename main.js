import "./src/CSS/style.css";
import { isTimerRunning, displayCountDown } from "./src/JS/logic";
// import { mainComponent, h1 } from "./src/JS/countDown";
import { mainComponent, ringTheBell } from "./src/JS/countDown";
import { header } from "./src/JS/header";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  app.appendChild(header.element);
  app.appendChild(mainComponent.element);

  const buttons = Array.from(
    document.querySelectorAll(".time-setter-buttons button")
  );

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const time = button.getAttribute("data-time");

      if (!isTimerRunning) {
        const h1 = document.querySelector(".timer");
        displayCountDown(time, h1, ringTheBell);
      }
    });
  });
});
