var waterBottle = require("../water_bottle.js");
var assert = require("assert");

describe('Water Bottle', function(){
  beforeEach(function(){
    waterBottle.volume = 0;
  })
  it("Should be empty at the start", function(){
    assert.equal(0, waterBottle.volume);
  })
  it("Water bottle is filled", function(){
    waterBottle.fill();
    assert.equal(100, waterBottle.volume);
  })
  it("I am drinking", function(){
    waterBottle.fill();
    waterBottle.drink();
    assert.equal(90, waterBottle.volume);
  })
  it("I've chugged the whole thing!", function(){
    waterBottle.fill();
    waterBottle.chugged();
    assert.equal(0, waterBottle.volume);
  })
  it("Bottle is empty man!", function(){
    waterBottle.chugged();
    waterBottle.drink();
    assert.equal(0, waterBottle.volume);
  })
})

