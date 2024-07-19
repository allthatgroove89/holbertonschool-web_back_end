import Building from './5-building.js'

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft) // Calling the constructor of the base class
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqt) {
    this._sqft = sqt;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors`)
  }
}
export default SkyHighBuilding;