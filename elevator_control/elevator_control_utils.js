const Elevator = require('../elevator/elevator');

module.exports = {
  validateArguments: (first, second) => {
    if (first instanceof Elevator != true) {
      throw TypeError('First argument must be Elevator instance');
    } else if (typeof second === 'number' != true) {
      throw TypeError('Second argument must be a number');
    } 
  }
}