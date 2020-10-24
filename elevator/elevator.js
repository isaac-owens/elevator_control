class Elevator {
  constructor() {
    this.passengers = 0;
  }
  get passengers() {
    return this.passengers;
  }

  set passengers(numPassengers) {
    this.passengers = numPassengers;
  } 
}

module.exports = Elevator;