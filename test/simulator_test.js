const assert = require('assert');
const expect = require('chai').expect;
const Elevator = require('../elevator/elevator');
const ElevatorControl = require('../elevator_control/elevator_control');
const Simulator = require('../simulator/simulator');

const newSimulator = new Simulator();

describe('Simulator', function() {
  it('can create a new Simulator', function() {
    assert.ok(newSimulator);
  });

  describe('#printTimeSummary', function() {
    it('should exist as a function', function() {
      expect(newSimulator.printTimeSummary()).to.exist;
    })

    // it('prints average time summary from run', function() {
    //   const summary = newSimulator.printTimeSummary();
    //   expect(summary).to.equal('Avg Time Waiting: ')
    // })
  })
  
  describe('#run', function() {
    it('exists as a function', function() {
      expect(newSimulator.run()).to.exist;
    });

    it('returns a message that run is complete', function() {
      const run = newSimulator.run();
      expect(run).to.equal('Run Complete! Printing summary...')
    })
  })
})