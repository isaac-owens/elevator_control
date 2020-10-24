const Elevator = require('../elevator/elevator');
const {validateArguments} = require('./elevator_control_utils');

class ElevatorControl {
  constructor() {
    this.timeSpentWaiting = 0;
    this.timeSpentInside = 0;
  }

  sendToFloor(elevator, floor) {
    if(arguments.length != 2) {
      throw new Error('Must be called with two arguments');
    };
    validateArguments(elevator, floor);

    elevator.currentFloor = floor;
    return floor;
  }

  calculateWaitTime(elevator, destinationFloor) {
    if(arguments.length != 2) {
      throw new Error('Must be called with two arguments');
    }
    validateArguments(elevator, destinationFloor);

    const currentFloor = elevator.currentFloor;
    // If the elevator is on the lobby floor the door takes 30 seconds to open otherwise 5
    const doorOpeningTime = currentFloor === 0 ? 30 : 5;
    // The time it takes for the elevator to arrive to the call and open the doors
    const waitTime = Math.abs(currentFloor - destinationFloor) + doorOpeningTime;
    return waitTime;
  }

  calculateTimeInside() {
    return true;
  }
}

module.exports = ElevatorControl;