const unirand = require('unirand');
const Elevator = require('../elevator/elevator');
const ElevatorControl = require('../elevator_control/elevator_control');

module.exports = {
  generateNumPassengers: () => {
    // Generates random number from 1 - 5 min and max inclusive;
    const minPassengers = 1;
    const mostPassengers = 5;
    const numPassengers = Math.floor(Math.random() * (mostPassengers - minPassengers + 1) + minPassengers);
    return numPassengers;
  },

  generateFloorCall: () => {
    const lowestFloor = 1;
    const highestFloor = 100;
    // Generates a random number from 1 - 100 min and max inclusive;
    const floorCall = Math.floor(Math.random() * (highestFloor - lowestFloor + 1) + lowestFloor);
    return floorCall;
  },

  generateTimeSeries: (numberOfCalls) => {
    const timeSeries = {};

    // Creates a time series of subsequent calls given number of calls to create
    for (let i = 0; i < numberOfCalls; i++) {
      const call = {};
      call.time = i;
      call.numPassengers = module.exports.generateNumPassengers();
      call.floor = module.exports.generateFloorCall();
      call.destination = module.exports.generateFloorCall();
      timeSeries[`call${i}`] = call;
    }

    return timeSeries;
  },

  generateElevators() {
    const elevatorOne = new Elevator('One');
    const elevatorTwo = new Elevator('Two');
    const elevatorThree = new Elevator('Three');
    const elevators = [elevatorOne, elevatorTwo, elevatorThree];
    return elevators;
  },

  generateElevatorControl() {
    const elevatorControl = new ElevatorControl();
    return elevatorControl;
  }
}