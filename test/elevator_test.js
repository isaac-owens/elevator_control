const assert = require('assert');
const expect = require('chai').expect;

const Elevator = require('../src/scripts/elevator/elevator');
const newElevator = new Elevator('One');
const {clearElevator} = require('../src/scripts/elevator/elevator_utils');

describe('Elevator', function() {
  afterEach(function() {
      clearElevator(newElevator);
    });

  it('can create a new Elevator', function() {
    assert.ok(newElevator);
  });

  it('should initialize with a name', function() {
    expect(newElevator.name).to.equal('One');
  })

  it('should start on the Lobby floor (1)', function() {
    expect(newElevator.currentFloor).to.equal(1);
  });
  
  it('should start with no passengers', function() {
    expect(newElevator.numberOfPassengers).to.equal(0);
  });

  describe('#loadPassengers', function () {
    it('exists as a function', function() {
      expect(newElevator.loadPassengers(1)).to.exist;
    });

    it('throws an error if argument is not a number', function() {
      assert.throws(() => {newElevator.loadPassengers('1')}, TypeError)
    });
    
    it('thows an error if passengers exceeds 10', function() {
      assert.throws(() => { newElevator.loadPassengers(20) }, Error)
    });

    it('updates number of passengers', function() {
      newElevator.loadPassengers(5);
      assert.equal(newElevator.numberOfPassengers, 5);
    });
  })

  describe('#isEmpty', function() {
    it('exists as a function', function() {
      expect(newElevator.isEmpty()).to.exist;
    });

    it('returns true if elevator is empty', function() {
      expect(newElevator.isEmpty()).to.equal(true);
    });

    it('returns false if elevator is occupied', function() {
      newElevator.loadPassengers(5);
      expect(newElevator.isEmpty()).to.equal(false);
    });
  })

  describe('#hasRoom', function() {
    it('exists as a function', function() {
      expect(newElevator.hasRoom()).to.exist;
    });

    it('returns true if there are less than 10 passengers', function() {
      expect(newElevator.hasRoom()).to.equal(true);
    });

    it('returns false if elevator is at capacity', function() {
      newElevator.loadPassengers(10);
      expect(newElevator.hasRoom()).to.equal(false);
    });
  })

  describe('#moveToFloor', function() {
    afterEach(function() {
      newElevator.currentFloor = 0;
    });

    it('exists as a function', function() {
      expect(newElevator.moveToFloor(1)).to.exist;
    });

    it('throws an error unless given one argument', function() {
      assert.throws(() => {newElevator.moveToFloor()}, Error);
    });

    it('throws an error if floor is not a number', function() {
      assert.throws(() => {newElevator.moveToFloor('1'), TypeError});
    });

    it('throws an error if the floor goes above 100', function() {
      assert.throws(() => {newElevator.moveToFloor(200), Error});
    });

    it('throws an error if the floor goes below 1', function() {
      assert.throws(() => {newElevator.moveToFloor(0), Error})
    })

    it('updates elevator\'s current floor', function() {
      newElevator.moveToFloor(3);
      expect(newElevator.currentFloor).to.equal(3);
    })
  })
})

