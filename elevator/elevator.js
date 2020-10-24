class Elevator {
  constructor() {
    this.numberOfPassengers = 0;
    this.maxPassengers = 10;
    // Current floor of 0 is the lobby
    this.currentFloor = 0;
  }

  get passengers() {
    return this.numberOfPassengers;
  }

  set passengers(numPassengers) {
    // Ensure that the passenger limit is not exceeded
    if (this.numberOfPassengers + numPassengers > 10) {
      throw new Error('Elevator limit exceeded!');
    }
    
    this.numberOfPassengers = numPassengers;
  } 

  isEmpty() {
    return this.numberOfPassengers === 0;
  }

  hasRoom() {
    return this.numberOfPassengers < 10;
  }
}
  
module.exports = Elevator;