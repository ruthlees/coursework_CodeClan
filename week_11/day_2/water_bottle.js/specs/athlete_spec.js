var athlete = require("../athlete.js");
var waterBottle = require("../water_bottle.js");
var assert = require("assert");


describe("athlete", function(){
  beforeEach(function(){
    athlete.hydration = 100;
    athlete.distance = 0;
    waterBottle.fill();
  })
  it("I'm fresh as a daisy", function(){
    assert.equal(100, athlete.hydration);
  })
  it("Starting point", function(){
    assert.equal(0, athlete.distance);
  })
  it("Run forest, run", function(){
    athlete.run(1);
    assert.equal(90, athlete.hydration);
    assert.equal(1, athlete.distance);
  })
  it("should not run if dehydrated", function(){
    athlete.run(11);
    assert.equal(10, athlete.distance);
  })
  it("hydration should increase when drinking", function(){
    athlete.hydration = 0;
    athlete.drink(waterBottle);
    assert.equal(10, athlete.hydration);
  })
})