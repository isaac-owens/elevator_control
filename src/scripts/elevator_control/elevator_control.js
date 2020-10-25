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
    const doorOpeningTime = currentFloor === 1 ? 30 : 5;
    // The time it takes for the elevator to arrive to the call and open the doors
    const waitTime = Math.abs(currentFloor - destinationFloor) + doorOpeningTime;
    this.timeSpentWaiting += waitTime;
    return waitTime;
  }

  calculateTimeInside(elevator, destinationFloor) {
    if(arguments.length != 2) {
      throw new Error('Must be called with two arguments');
    };
    validateArguments(elevator, destinationFloor);

    const currentFloor = elevator.currentFloor;
    // If the elevator is on the lobby floor the door takes 30 seconds to close otherwise 5
    const doorClosingTime = currentFloor === 1 ? 30 : 5;
    // If the elevator is dropping off at the lobby the door takes 30 seconds to open otherwise 5
    const doorOpeningTime = destinationFloor === 1 ? 30 : 5;
    const totalDoorTime = doorClosingTime + doorOpeningTime
    const timeInside = Math.abs(currentFloor - destinationFloor) + totalDoorTime;
    this.timeSpentInside += timeInside;
    return timeInside;
  }
  
  dispatchElevator(call, elevators) {
    if (typeof call != 'object') {
      throw TypeError('First argument must be an object');
    } else if (typeof elevators != 'object') {
      throw TypeError('Second argument must be an array');
    }

    let closestElevator = elevators[0];

    for(let i = 0; i < elevators.length; i++) {
      const elevator = elevators[i]
      if (Math.abs(elevator.currentFloor - call.floor) < Math.abs(closestElevator.currentFloor - call.floor)) {
        closestElevator = elevator;
      }
    }
    return closestElevator;
  }
}

module.exports = ElevatorControl;