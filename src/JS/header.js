import "../CSS/header.css";

class Header {
  constructor() {
    this.element = document.createElement("header");
    this.render();
  }

  render() {
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <h1 class="logo">FocusFlow</h1>
        `;

    this.buttonsSection(nav);
    this.element.appendChild(nav);
  }

  buttonsSection(nav) {
    const section = document.createElement("section");
    section.classList.add("time-setter-buttons");
    section.innerHTML = `
        <button data-time="0.1" class="time-setter">0.1</button>
        <button data-time="25" class="time-setter">25</button>
        <button data-time="35" class="time-setter">35</button>
        <button data-time="52" class="time-setter">52</button>
        `;
    nav.appendChild(section);
  }
}

export const header = new Header();
