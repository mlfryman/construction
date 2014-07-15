'use strict';

//create Room constructor
function Room (name, length, width, height, floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function(){
 return this.height * this.width;
};

//calculate cost of rooms
Room.prototype.cost = function(){
  var rate, total = 0;
  //switch to determine which floor cost to use
  switch(this.floor){
    case 'carpet':
      rate = 15;
      break;
    case 'tile':
      rate = 12;
      break;
    case 'wood':
      rate = 10;
  }
  //calculate cost of the room floor
  total += rate * this.area();
  //calculate cost to paint the room's walls
  total += (this.width * this.height) * 2 * 0.50;
  total += (this.length * this.height) * 2 * 0.50;

  return total;
};

//allows Room constructor to be used outside of this file.
module.exports = Room;
