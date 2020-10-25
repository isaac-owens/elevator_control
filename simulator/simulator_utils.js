const unirand = require('unirand');

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
  }
}