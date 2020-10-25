const {generateTimeSeries, generateElevators, generateElevatorControl} = require('./simulator_utils');

class Simulator {

  printTimeSummary(elevatorControl, timeSeries) {
  const numberOfCalls = Object.keys(timeSeries).length;
  const avgTimeWaiting = Math.round(elevatorControl.timeSpentWaiting / numberOfCalls);
  const avgTimeInside = Math.round(elevatorControl.timeSpentInside / numberOfCalls);
  const totalTime = Math.round(avgTimeWaiting + avgTimeInside / numberOfCalls);

  const timeSummary = document.getElementById('time-summary');
  const summary = document.createTextNode(` Avg Time Waiting: ${avgTimeWaiting} seconds | \n Avg Time Inside: ${avgTimeInside} seconds | \n Total Avg Time: ${totalTime} seconds`)
  timeSummary.appendChild(summary);
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

      // Determine which elevator is the best to complete the pickup
      const closestElevator = elevatorControl.dispatchElevator(currentCall, elevators);

      // Calculate the time data for the pickup
      elevatorControl.calculateWaitTime(closestElevator, currentCall.floor);
      elevatorControl.calculateTimeInside(closestElevator, currentCall.destination);

      // Send to pickup floor and log
      elevatorControl.sendToFloor(closestElevator, currentCall.floor);
      // Vanilla js to render the info to index.html
      const elevatorLog = document.getElementById('elevator-log')
      const liOne = document.createElement("li");
      const liContent = document.createTextNode(`Elevator ${closestElevator.name} picked up on floor ${currentCall.floor}`)
      liOne.appendChild(liContent);
      elevatorLog.appendChild(liOne);

      // Send to destination floor and log
      elevatorControl.sendToFloor(closestElevator, currentCall.destination);
      const liTwo = document.createElement("li");
      const liContent = document.createTextNode(`Elevator ${closestElevator.name} dropped off on floor ${currentCall.floor}`)
      liTwo.appendChild(liContent);
      elevatorLog.appendChild(liTwo);

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
  const timeSummary = document.getElementById('time-summary');
  timeSummary.innerHTML = '';
  const newSimulator = new Simulator();
  newSimulator.run();
});


module.exports = Simulator;