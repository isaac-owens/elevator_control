const {generateTimeSeries, generateElevators, generateElevatorControl} = require('./simulator_utils');

class Simulator {

  printTimeSummary(elevatorControl, timeSeries) {
  const numberOfCalls = Object.keys(timeSeries).length;
  const avgTimeWaiting = Math.round(elevatorControl.timeSpentWaiting / numberOfCalls);
  const avgTimeInside = Math.round(elevatorControl.timeSpentInside / numberOfCalls);
  const totalTime = Math.round(avgTimeWaiting + avgTimeInside / numberOfCalls);
    return(` Avg Time Waiting: ${avgTimeWaiting} seconds \n Avg Time Inside: ${avgTimeInside} seconds \n Total Avg Time: ${totalTime} seconds`);
  }

  run() {
    const elevators = generateElevators();
    const elevatorControl = generateElevatorControl();
    const numberOfCalls = Math.floor(Math.random() * (10 - 1) + 10);
    const timeSeries = generateTimeSeries(numberOfCalls);

    let call;
    for (call in timeSeries) {
      const currentCall = timeSeries[call];
      const closestElevator = elevatorControl.dispatchElevator(currentCall, elevators);
      elevatorControl.calculateWaitTime(closestElevator, currentCall.floor);
      elevatorControl.calculateTimeInside(closestElevator, currentCall.floor);
      elevatorControl.sendToFloor(closestElevator, currentCall.floor);
      const elevatorLog = document.getElementById('elevator-log')
      const li = document.createElement("li");
      const liContent = document.createTextNode(`Elevator ${closestElevator.name} picked up on floor ${currentCall.floor}`)
      li.appendChild(liContent);
      elevatorLog.appendChild(li);
      console.log(`Elevator ${closestElevator.name} picked up on floor ${currentCall.floor}`);
    }
    console.log('Run Complete! Printing summary...');
    return this.printTimeSummary(elevatorControl, timeSeries);
  }
}

const simulatorButton = document.getElementById('simulator-button');

simulatorButton.addEventListener('click', () => {
  const elevatorLog = document.getElementById('elevator-log');
  elevatorLog.innerHTML = '';
  const newSimulator = new Simulator();
  newSimulator.run();
});


module.exports = Simulator;