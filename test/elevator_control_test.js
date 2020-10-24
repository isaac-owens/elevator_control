const assert = require('assert');
const expect = require('chai').expect;
const ElevatorControl = require('../elevator_control/elevator_control');
const Elevator = require('../elevator/elevator');
const {clearElevator} = require('../elevator/elevator_utils');

const newElevatorControl = new ElevatorControl();
const elevatorOne = new Elevator();
const elevatorTwo = new Elevator();
const elevatorThree = new Elevator();

describe('Elevator Control', function() {
  afterEach(function() {
    clearElevator(elevatorOne);
    clearElevator(elevatorTwo);
    clearElevator(elevatorThree);
  });

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
      expect(newElevatorControl.sendToFloor(elevatorOne, 42)).to.exist;
    });

    it('throws an error if two arguments are not recieved', function() {
      assert.throws(() => {newElevatorControl.sendToFloor()}, Error);
    });

    it('throws error if first argument not Elevator instance', function() {
      assert.throws(() => {newElevatorControl.sendToFloor('elevatorOne', 42)}, TypeError);
    })

    it('throws error if second argument not Number', function() {
      assert.throws(() => {newElevatorControl.sendToFloor(elevatorOne, '42')}, TypeError);
    });

    it('moves given elevator to given floor', function() {
      newElevatorControl.sendToFloor(elevatorOne, 42);
      arrivalFloor = elevatorOne.currentFloor;
      expect(arrivalFloor).to.equal(42);
    })''
  });

  describe('#calculateWaitTime', function() {
    it('should exist as a function', function() {
      expect(newElevatorControl.calculateWaitTime()).to.exist;
    });

    it('throws an error if two arguments are not received', function() {

    });

    it('throws an error if the first argument is not Elevator instance', function() {

    })

    it('throws an error if the second argument is not a number', function() {
      
    })

    it('should calculate wait time from call to pick up for an elevator', function() {

    });
  })
});