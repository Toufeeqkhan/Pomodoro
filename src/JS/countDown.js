import "../CSS/countDown.css";
import { displayCountDown, isTimerRunning } from "./logic";
const finishAlarm = './finishAlarm.wav'

class MainComponent  {
    constructor(){
        this.element = document.createElement('main')
        this.render()
    }

    render(){
        this.element.innerHTML = `
        <section class="timer-section">
        <h1 class="timer">00:00</h1>
         <audio  id="achievementBell" src=${finishAlarm}>Abcd</audio>
        </section>
        `
    }
}

export const mainComponent = new MainComponent()


export const ringTheBell = () => {
    const bellSound = document.getElementById('achievementBell')
    bellSound.play()
}


