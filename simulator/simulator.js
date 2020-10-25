const {
  generateTimeSeries
} = require('./simulator_utils');
const Elevator = require('../elevator/elevator');


class Simulator {

  generateElevators() {
    const elevatorOne = new Elevator();
    const elevatorTwo = new Elevator();
    const elevatorThree = new Elevator();
    const elevators = [elevatorOne, elevatorTwo, elevatorThree];
    return elevators;
  }

  run() {

  }
}

module.exports = Simulator;