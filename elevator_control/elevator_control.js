const Elevator = require('../elevator/elevator');

class ElevatorControl {
  constructor() {
    this.timeSpentWaiting = 0;
    this.timeSpentInside = 0;
  }
}

module.exports = ElevatorControl;