const assert = require('assert');
const Elevator = require('../elevator/elevator');

describe('Elevator', function() {
  it('should be able to create new Elevator', function() {
    const newElevator = new Elevator();
    assert.ok(newElevator);
  });
  describe('.passengers', function () {
    it('returns the number of passengers', function() {
      const newElevator = new Elevator();
      const passengers = newElevator.passengers;
      assert.ok(passengers);
    })

  })
})

