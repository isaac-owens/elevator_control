const {
  generateTimeSeries
} = require('./simulator_utils');
const Elevator = require('../elevator/elevator');
const ElevatorControl = require('../elevator_control/elevator_control');

class Simulator {
  generateElevators() {
    const elevatorOne = new Elevator();
    const elevatorTwo = new Elevator();
    const elevatorThree = new Elevator();
    const elevators = [elevatorOne, elevatorTwo, elevatorThree];
    return elevators;
  }

  generateElevatorControl() {
    const elevatorControl = new ElevatorControl();
    return elevatorControl;
  }

  run() {
    
  }
}

module.exports = Simulator;