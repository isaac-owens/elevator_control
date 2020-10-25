const assert = require('assert');
const expect = require('chai').expect;
const Elevator = require('../src/scripts/elevator/elevator');
const ElevatorControl = require('../src/scripts/elevator_control/elevator_control');
const Simulator = require('../src/scripts/simulator/simulator');
const {generateTimeSeries} = require('../src/scripts/simulator/simulator_utils')

const newSimulator = new Simulator();
const newElevatorControl = new ElevatorControl();
const newTimeSeries = generateTimeSeries();

describe('Simulator', function() {
  it('can create a new Simulator', function() {
    assert.ok(newSimulator);
  });

  describe('#printTimeSummary', function() {
    it('should exist as a function', function() {
      expect(newSimulator.printTimeSummary(newElevatorControl, newTimeSeries)).to.exist;
    })

    it('prints a summary of time series output', function() {
      const summary = newSimulator.printTimeSummary(newElevatorControl, newTimeSeries);
      const avgTimeWaiting = NaN;
      const avgTimeInside = NaN;
      const totalTime = NaN;
      expect(summary).to.equal(` Avg Time Waiting: ${avgTimeWaiting} seconds \n Avg Time Inside: ${avgTimeInside} seconds \n Total Avg Time: ${totalTime} seconds`)
    })
  })
  
  describe('#run', function() {
    it('exists as a function', function() {
      expect(newSimulator.run()).to.exist;
    });
  })
})