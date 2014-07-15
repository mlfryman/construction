'use strict';

//imports/references Room & House constructor
var Room = require('./room');
var House = require('./house');

//define rooms
var r1 = new Room('living', 10, 12, 20, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 10, 'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 10, 'wood', 'orange');

console.log(r1, r2, r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1785);
var h3 = new House('M-5', 'straw', 1832);

//push rooms into house
h1.rooms.push(r1, r2, r3);
console.log(h1, h2, h3);

//return area of room, return cost of room; return total area of house, return total cost of house
console.log('The area of room 1 is', r1.area());
console.log('The cost of room 1 is', r1.cost());
console.log('The cost of room 2 is', r2.cost());
console.log('The cost of room 3 is', r3.cost());
console.log('This is the area of the house: ', h1.area());
console.log('This is the cost of the house: ', h1.cost());
