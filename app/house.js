'use strict';

//create House constructor, include empty room array in function, but not in first ()
function House (name, material, year){
  this.name = name;
  this.material = material;
  this.year = parseInt(year);
  this.rooms = [];
}

House.prototype.area = function(){
  var sigma = 0;
  for(var i = 0; i < this.rooms.length; i++){
    sigma += this.rooms[i].area();
  }
  return sigma;
};

House.prototype.cost = function(){
  var sigma = 0;
  for(var i = 0; i < this.rooms.length; i++){
    sigma += this.rooms[i].cost();
  }
  return sigma;
};

//allows House constructor to be used outside of this file.
module.exports = House;
