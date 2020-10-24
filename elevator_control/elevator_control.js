const Elevator = require('../elevator/elevator');

class ElevatorControl {
  constructor() {
    this.timeSpentWaiting = 0;
    this.timeSpentInside = 0;
  }

  sendToFloor(elevator, floor) {
    if(arguments.length != 2) {
      throw new Error('Must be called with two arguments');
    } else if (arguments[0] instanceof Elevator != true) {
      throw TypeError('First argument must be Elevator instance');
    } else if (typeof arguments[1] === 'number' != true) {
      throw TypeError('Second argument must be a number');
    } 
    elevator.currentFloor = floor;
    return floor;
  }
}

module.exports = ElevatorControl;