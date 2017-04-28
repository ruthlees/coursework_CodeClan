var Planet = require("../planet.js");
var SolarSystem = require("../solar_system.js");
var assert = require("assert");


describe("planet", function(){

  var planet;

  beforeEach(function(){
    planet = new Planet("Mars");
  });
  it("the planet's name", function(){
    assert.equal("Mars", planet.name);
  })


})