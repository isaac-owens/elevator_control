const Elevator = require('../elevator/elevator');

class ElevatorControl {
  constructor() {
    this.timeSpentWaiting = 0;
    this.timeSpentInside = 0;
  }

  sendToFloor() {
    return true;
  }
}

module.exports = ElevatorControl;