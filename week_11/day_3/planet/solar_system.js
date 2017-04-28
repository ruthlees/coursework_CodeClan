
var SolarSystem = function(name){
  this.name = name;
  this.planets = [];
  this.newDiscovery = function(planet){
    return this.planets.push(planet);
  }

};







module.exports = SolarSystem;