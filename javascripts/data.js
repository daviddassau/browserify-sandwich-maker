"use strict";

// Empty arrays for all ingredients
let breadArray = [];
let meatArray = [];
let cheeseArray = [];
let condimentsArray = [];
let veggiesArray = [];


// Require for xhr.js
const loadAllIngredients = require('./xhr');

// Require for ingredients
// const loadBread = require('./bread');
// const loadMeat = require('./meat');
// const loadCheese = require('./cheese');
// const loadCondiments = require('./condiments');
// const loadVeggies = require('./veggies');


// Error
const errorFunction = () => {
	console.log("You broke everything");
};

// When bread loads
const whenBreadLoads = function(){
	breadArray = JSON.parse(this.responseText);
	console.log({breadArray});
};

// Initializer for bread
const breadInitializer = () => {
	loadAllIngredients.loadBread(whenBreadLoads, errorFunction);
};



// When meat loads
// const whenMeatLoads = function(){
// 	meatArray = JSON.parse(this.responseText);
// };

// // Ititializer for meat
// const meatInitializer = () => {
// 	loadMeat(whenMeatLoads, errorFunction);
// };



// // When cheese loads
// const whenCheeseLoads = function(){
// 	cheeseArray = JSON.parse(this.responseText);
// };

// // Ititializer for cheese
// const cheeseInitializer = () => {
// 	loadCheese(whenCheeseLoads, errorFunction);
// };



// // When condiments loads
// const whenCondimentsLoads = function(){
// 	condimentsArray = JSON.parse(this.responseText);
// };

// // Ititializer for condiments
// const condimentsInitializer = () => {
// 	loadCondiments(whenCondimentsLoads, errorFunction);
// };



// // When veggies loads
// const whenVeggiesLoads = function(){
// 	veggiesArray = JSON.parse(this.responseText);
// };

// // Initializer for veggies
// const veggiesInitializer = () => {
// 	loadVeggies(whenVeggiesLoads, errorFunction);
// };


module.exports = {breadInitializer};






