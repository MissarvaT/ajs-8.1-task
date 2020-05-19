export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Данный персонаж уже в команде!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    });
  }

  toArray() {
    const newArray = [];
    this.members.forEach((member) => {
      newArray.push(member);
    });
    this.members = newArray;
  }
}
