const {generateTimeSeries, generateElevators, generateElevatorControl} = require('./simulator_utils');

class Simulator {

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