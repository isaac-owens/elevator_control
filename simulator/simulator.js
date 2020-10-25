const {generateTimeSeries, generateElevators, generateElevatorControl} = require('./simulator_utils');

class Simulator {

  run() {
    const elevators = generateElevators();
    const elevatorControl = generateElevatorControl();
    const numberOfCalls = Math.floor(Math.random() * (10 - 1) + 10);
    const timeSeries = generateTimeSeries(numberOfCalls);
    console.log(timeSeries);

    let call;
    for (call in timeSeries) {
      const currentCall = timeSeries[call];
      const closestElevator = elevatorControl.dispatchElevator(currentCall, elevators);
      elevatorControl.calculateWaitTime(closestElevator, currentCall.floor);
      elevatorControl.calculateTimeInside(closestElevator, currentCall.floor);
      elevatorControl.sendToFloor(closestElevator, currentCall.floor);
      console.log(`Elevator ${JSON.stringify(closestElevator)} picked up on floor ${currentCall.floor}`);
    }
    return 'Run Complete! Printing summary...';
  }
}

const simulator = new Simulator();
console.log(simulator.run());

module.exports = Simulator;