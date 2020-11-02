class Emote {
  constructor({ code, url }) {
    this.code = code;
    this.url = url;
  }

  get html() {
    return (`
      <span class="Emote">
        <img title="${this.code}" src="${this.url}" alt="${this.code}">
      </span>
    `).trim();
  }
}

export default Emote;