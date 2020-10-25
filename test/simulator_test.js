const assert = require('assert');
const expect = require('chai').expect;
const Simulator = require('../simulator/simulator');

const newSimulator = new Simulator();

describe('Simulator', function() {
  it('create a new Simulator', function() {
    assert.ok(newSimulator);
  })
})