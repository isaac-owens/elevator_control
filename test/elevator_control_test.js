const assert = require('assert');
const expect = require('chai').expect;
const ElevatorControl = require('../elevator_control/elevator_control');
const Elevator = require('../elevator/elevator');

const newElevatorControl = new ElevatorControl();
const ElevatorOne = new Elevator();
const ElevatorTwo = new Elevator();
const ElevatorThree = new Elevator();

describe('Elevator Control', function() {
  it('can create a new ElevatorControl', function() {
    assert.ok(newElevatorControl);
  });

  it('should initialize timeSpentWaiting to zero', function() {
    expect(newElevatorControl.timeSpentWaiting).to.equal(0);
  });

  it('should initialize timeSpentInside to zero', function() {
    expect(newElevatorControl.timeSpentInside).to.equal(0);
  })

  describe('#sendToFloor', function() {
    it('exists as a function', function() {
      expect(newElevatorControl.sendToFloor()).to.exist;
    })
  })
})