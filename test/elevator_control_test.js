const assert = require('assert');
const expect = require('chai').expect;
const ElevatorControl = require('../src/scripts/elevator_control/elevator_control');
const Elevator = require('../src/scripts/elevator/elevator');
const {clearElevator} = require('../src/scripts/elevator/elevator_utils');
const {clearElevatorControl} = require('../src/scripts/elevator_control/elevator_control_utils');

const newElevatorControl = new ElevatorControl();
const elevatorOne = new Elevator('One');
const elevatorTwo = new Elevator('Two');
const elevatorThree = new Elevator('Three');
const timeSeries = {
  'call0': {
    time: 0,
    numPassengers: 2,
    floor: 10,
    destination: 42
  }, 
  'call1': {
    time: 1,
    numPassengers: 1,
    floor: 69,
    destination: 1
  }, 
  'call2': {
    time: 2,
    numPassengers: 4,
    floor: 1,
    destination: 100
  }
};

describe('Elevator Control', function() {
  afterEach(function() {
    clearElevator(elevatorOne);
    clearElevator(elevatorTwo);
    clearElevator(elevatorThree);
    clearElevatorControl(newElevatorControl);
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
    });
  });

  describe('#calculateWaitTime', function() {
    it('should exist as a function', function() {
      expect(newElevatorControl.calculateWaitTime(elevatorTwo, 42)).to.exist;
    });

    it('throws an error if two arguments are not received', function() {
      assert.throws(() => {newElevatorControl.calculateWaitTime()}, Error);
    });

    it('throws an error if the first argument is not Elevator instance', function() {
      assert.throws(() => {newElevatorControl.calculateWaitTime('elevatorTwo', 42)}, TypeError);
    });

    it('throws an error if the second argument is not a number', function() {
      assert.throws(() => {newElevatorControl.calculateWaitTime(elevatorTwo, '42')}, TypeError);
    });

    it('adds wait time to total wait time', function() {
      elevatorTwo.moveToFloor(20);
      const waitTime = newElevatorControl.calculateWaitTime(elevatorTwo, 10);
      expect(newElevatorControl.timeSpentWaiting).to.equal(15);
    })

    it('calculates wait time from call to pick up for given elevator', function() {
      elevatorTwo.moveToFloor(20);
      const waitTime = newElevatorControl.calculateWaitTime(elevatorTwo, 10);
      expect(waitTime).to.equal(15);
    });
  })

  describe('#calculateTimeInside', function() {
    it('should exist as a function', function() {
      expect(newElevatorControl.calculateTimeInside(elevatorTwo, 1)).to.exist;
    });

    it('throws an error if two arguments are not received', function() {
      assert.throws(() => {newElevatorControl.calculateTimeInside()}, Error);
    });

    it('throws an error if the first argument is not Elevator instance', function() {
      assert.throws(() => {newElevatorControl.calculateTimeInside('elevatorTwo', 1)}, TypeError);
    });

    it('throws an error if the second argument is not a number', function() {
      assert.throws(() => {newElevatorControl.calculateTimeInside(elevatorTwo, '0')}, TypeError);
    });

    it('adds time inside to total time inside', function() {
      elevatorTwo.moveToFloor(10);
      const timeInside = newElevatorControl.calculateTimeInside(elevatorTwo, 1);
      expect(newElevatorControl.timeSpentInside).to.equal(44);
    })

    it('calculates time inside elevator from pickup to departure', function() {
      elevatorTwo.moveToFloor(10);
      const timeInside = newElevatorControl.calculateTimeInside(elevatorTwo, 1)
      expect(timeInside).to.equal(44);
    })
  })

  describe('#dispatchElevator', function() {
    const elevators = [elevatorOne, elevatorTwo, elevatorThree];

    it('exists as a function', function() {
      expect(newElevatorControl.dispatchElevator(timeSeries['call1'], elevators)).to.exist;
    });

    it('takes an object as it\'s first argument', function() {
      assert.throws(() => {newElevatorControl.dispatchElevator('call1', 'elevators')}, TypeError);
    });

    it('takes an array of elevator instances as it\'s second argument', function() {
      assert.throws(() => {newElevatorControl.dispatchElevator(timeSeries['call1'], 'elevators')}, TypeError)
    })

    it('calls the closest elevator to the call floor', function() {
      elevatorOne.moveToFloor(50);
      elevatorTwo.moveToFloor(16);
      elevatorThree.moveToFloor(15);
      const dispatchedElevator = newElevatorControl.dispatchElevator(timeSeries['call0'], elevators);
      expect(dispatchedElevator).to.equal(elevatorThree);
    })
  })
});