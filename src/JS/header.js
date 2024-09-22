import '../CSS/header.css'


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
        <button class="time-setter">25</button>
        <button class="time-setter">35</button>
        <button class="time-setter">52</button>
        `;
    nav.appendChild(section)
  }
}

export const header = new Header();
