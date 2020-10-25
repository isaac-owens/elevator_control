const unirand = require('unirand');

module.exports = {
  generateNumPassengers: () => {
    numPassengers = Math.floor(Math.random() * 5);
    return numPassengers;
  }
}