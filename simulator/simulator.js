const {generateTimeSeries, generateElevators, generateElevatorControl} = require('./simulator_utils');
// const Elevator = require('../elevator/elevator');
// const ElevatorControl = require('../elevator_control/elevator_control');

class Simulator {
  // generateElevators() {
  //   const elevatorOne = new Elevator();
  //   const elevatorTwo = new Elevator();
  //   const elevatorThree = new Elevator();
  //   const elevators = [elevatorOne, elevatorTwo, elevatorThree];
  //   return elevators;
  // }

  // generateElevatorControl() {
  //   const elevatorControl = new ElevatorControl();
  //   return elevatorControl;
  // }

  run() {
    const elevators = generateElevators();
    const elevatorControl = generateElevatorControl();
    const timeSeries = generateTimeSeries();

    for (call in timeSeries) {
      const closestElevator = elevatorControl.dispatchElevator(call, elevators);
      elevatorControl.calculateWaitTime(closestElevator, call.floor);
      elevatorControl.calculateTimeInside(closestElevator, call.floor);
      elevatorControl.sendToFloor(closestElevator, call.floor)
      // closestElevator.moveToFloor(call.floor);
    }
    return 'Run Complete! Printing summary...';
  }
}

module.exports = Simulator;