const assert = require('assert');
const expect = require('chai').expect;

const Elevator = require('../elevator/elevator');

const newElevator = new Elevator();

describe('Elevator', function() {
  it('should be able to create new Elevator', function() {
    assert.ok(newElevator);
  });
  describe('.passengers', function () {
    it('initializes with no passengers', function() {
      assert.equal(newElevator.passengers, 0);
    }),

    it('can get the number of passengers', function() {
      assert.equal(newElevator.passengers, 0);
    }),

    it('can set the number of passengers', function() {
      newElevator.passengers = 5;
      assert.equal(newElevator.passengers, 5);
    }),

    it('thows an error if passengers exceeds 10', function() {
      assert.throws(() => { newElevator.passengers += 20 }, Error)
    })
  })

  describe('#isEmpty', function() {
    it('exists as a function', function() {
      expect(newElevator.isEmpty()).to.exist;
    })
  })
})

