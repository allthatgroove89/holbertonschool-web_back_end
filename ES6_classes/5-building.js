export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor.name !== 'Building') {
    }
  }

  // getter of the sqft
  get sqft() {
    return this._sqft
  }

  // setter of the sqft
  set sqft(sqft) {
    this._sqft = sqft;
  }
  evacuationWarningMessage() {
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}
