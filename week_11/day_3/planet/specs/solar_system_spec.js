var SolarSystem = require("../solar_system.js");
var Planet = require("../planet.js");
var assert = require ("assert");


describe("SolarSystem", function(){

   var solarSystem;
   var planet;
   var planets;

  beforeEach(function(){
    solarSystem = new SolarSystem("Milky Way");
    planet = new Planet("Pluto");
    planets = [];
  });
  it("the name of the solar system", function(){
    assert.equal("Milky Way", solarSystem.name);
  });
  it("the array is empty", function(){
    assert.equal(0, solarSystem.planets.length);
  });
  it("new discovert of planet", function(){
    solarSystem.newDiscovery(planet);
    assert.equal("Pluto", solarSystem.planets[0].name);
  });
})