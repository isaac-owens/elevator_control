const assert = require('assert');
const expect = require('chai').expect;
const Elevator = require('../elevator/elevator');
const Simulator = require('../simulator/simulator');

const newSimulator = new Simulator();

describe('Simulator', function() {
  it('can create a new Simulator', function() {
    assert.ok(newSimulator);
  });

  describe('#generateElevators', function() {
    it('should exist as a function', function() {
      expect(newSimulator.generateElevators()).to.exist;
    });

    it('should return an array', function() {
      const elevators = newSimulator.generateElevators();
      expect(typeof elevators === 'object').to.equal(true);
    });

    it('should return an array of three Elevators', function() {
      const elevators = newSimulator.generateElevators();
      expect(elevators).to.have.lengthOf(3);
      expect(elevators[0]).to.be.an.instanceOf(Elevator);
      expect(elevators[1]).to.be.an.instanceOf(Elevator);
      expect(elevators[2]).to.be.an.instanceOf(Elevator);
    })
  })
  
})