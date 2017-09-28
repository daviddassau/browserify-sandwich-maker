"use strict";

// Empty arrays for all ingredients
let breadArray = [];
let meatArray = [];
let cheeseArray = [];
let condimentsArray = [];
let veggiesArray = [];


// Require for xhr.js
const loadAllIngredients = require('./xhr');


// Error
const errorFunction = () => {
	console.log("You broke everything");
};

// When bread loads
const whenBreadLoads = function(){
	breadArray = JSON.parse(this.responseText).bread;
};

// Initializer for bread
const breadInitializer = () => {
	loadAllIngredients.loadBread(whenBreadLoads, errorFunction);
};

// Bread getter function
const getBread = () => {
	return breadArray;
};



// When meat loads
const whenMeatLoads = function(){
	meatArray = JSON.parse(this.responseText).meat;
};

// Initializer for meat
const meatInitializer = () => {
	loadAllIngredients.loadMeat(whenMeatLoads, errorFunction);
};

// Bread getter function
const getMeat = () => {
	return meatArray;
};



// When cheese loads
const whenCheeseLoads = function(){
	cheeseArray = JSON.parse(this.responseText).cheese;
};

// Initializer for cheese
const cheeseInitializer = () => {
	loadAllIngredients.loadCheese(whenCheeseLoads, errorFunction);
};

// Cheese getter function
const getCheese = () => {
	return cheeseArray;
};



// When condiments loads
const whenCondimentsLoads = function(){
	condimentsArray = JSON.parse(this.responseText).condiments;
};

// Inititializer for condiments
const condimentsInitializer = () => {
	loadAllIngredients.loadCondiments(whenCondimentsLoads, errorFunction);
};

// Condiments getter function
const getCondiments = () => {
	return condimentsArray;
};



// When veggies loads
const whenVeggiesLoads = function(){
	veggiesArray = JSON.parse(this.responseText).veggies;
};

// Initializer for veggies
const veggiesInitializer = () => {
	loadAllIngredients.loadVeggies(whenVeggiesLoads, errorFunction);
};

// Veggies getter function
const getVeggies = () => {
	return veggiesArray;
};




module.exports = {breadInitializer, getBread, meatInitializer, getMeat, cheeseInitializer, getCheese, condimentsInitializer, getCondiments, veggiesInitializer, getVeggies};






