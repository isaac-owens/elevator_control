module.exports = {
  clearElevator: (elevator) => {
    elevator.numberOfPassengers = 0;
    elevator.currentFloor = 0;
  }
}