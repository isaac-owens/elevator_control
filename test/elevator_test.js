const assert = require('assert');
const expect = require('chai').expect;

const Elevator = require('../elevator/elevator');
const newElevator = new Elevator();

describe('Elevator', function() {
  afterEach(function() {
      newElevator.passengers = 0;
    });

  it('should be able to create new Elevator', function() {
    assert.ok(newElevator);
  });

  it('should start on the Lobby floor (0)', function() {
    expect(newElevator.currentFloor).to.equal(0);
  });
  
  it('should start with no passengers', function() {
    assert.equal(newElevator.passengers, 0);
  });

  describe('#passengers', function () {
    it('can get the number of passengers', function() {
      assert.equal(newElevator.passengers, 0);
    });

    it('can set the number of passengers', function() {
      newElevator.passengers += 5;
      assert.equal(newElevator.passengers, 5);
    });

    it('thows an error if passengers exceeds 10', function() {
      assert.throws(() => { newElevator.passengers += 20 }, Error)
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
      newElevator.passengers += 5;
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
      newElevator.passengers += 10;
      expect(newElevator.hasRoom()).to.equal(false);
    });
  })

  describe('#moveToFloor', function() {
    // afterEach(function() {
    //   newElevator.moveToFloor(1);
    // })

    it('exists as a function', function() {
      expect(newElevator.moveToFloor(1)).to.exist;
    });

    it('throws an error unless given one argument', function() {
      assert.throws(() => {newElevator.moveToFloor()}, Error);
    })

    it('throws an error if floor is not a number', function() {
      assert.throws(() => {newElevator.moveToFloor('1'), Error});
    })
  })
})

