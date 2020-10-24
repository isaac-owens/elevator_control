class Elevator {
  constructor() {
    this.numberOfPassengers = 0;
    this.maxPassengers = 10;
    // Current floor of 0 is the lobby
    this.currentFloor = 0;
  }

  loadPassengers(numPassengers) {
    if (typeof arguments[0] != 'number') {
      throw TypeError('passengers must be set to a number');
    }
    // Ensure that the passenger limit is not exceeded
     else if (this.numberOfPassengers + numPassengers > 10) {
      throw new Error('Elevator limit exceeded!');
    }
    
    this.numberOfPassengers += numPassengers;
    return this.numberOfPassengers;
  }

  isEmpty() {
    return this.numberOfPassengers === 0;
  }

  hasRoom() {
    return this.numberOfPassengers < 10;
  }

  moveToFloor(floor) {
    if (arguments.length != 1) {
      throw new Error('moveToFloor takes one argument');
    } else if (typeof arguments[0] != 'number') {
      throw TypeError('moveToFloor expects Number as paramater');
    } else if (floor > 100) {
      throw new Error('floor cannot exceed 100');
    }

    this.currentFloor = floor;
    return this.currentFloor;
  }
}
  
module.exports = Elevator;