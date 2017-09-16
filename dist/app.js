(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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







},{"./xhr":3}],2:[function(require,module,exports){
"use strict";

const ingredients = require('./data');

ingredients.breadInitializer();
},{"./data":1}],3:[function(require,module,exports){
"use strict";

const loadBread = (onBreadLoad, onBreadError) => {
	const breadLoader = new XMLHttpRequest();
	breadLoader.addEventListener('load', onBreadLoad);
	breadLoader.addEventListener('error', onBreadError);
	breadLoader.open('GET', '../data/bread.json');
	breadLoader.send();
};

const loadMeat = (onMeatLoad, onMeatError) => {
	const meatLoader = new XMLHttpRequest();
	meatLoader.addEventListener('load', onMeatLoad);
	meatLoader.addEventListener('error', onMeatError);
	meatLoader.open('GET', '../data/meat.json');
	meatLoader.send();
};

const loadCheese = (onCheeseLoad, onCheeseError) => {
	const cheeseLoader = new XMLHttpRequest();
	cheeseLoader.addEventListener('load', onCheeseLoad);
	cheeseLoader.addEventListener('error', onCheeseError);
	cheeseLoader.open('GET', '../data/cheese.json');
	cheeseLoader.send();
};

const loadCondiments = (onCondimentsLoad, onCondimentsError) => {
	const condimentsLoader = new XMLHttpRequest();
	condimentsLoader.addEventListener('load', onCondimentsLoad);
	condimentsLoader.addEventListener('error', onCondimentsError);
	condimentsLoader.open('GET', '../data/condiments.json');
	condimentsLoader.send();
};

const loadVeggies = (onVeggiesLoad, onVeggiesError) => {
	const veggiesLoader = new XMLHttpRequest();
	veggiesLoader.addEventListener('load', onVeggiesLoad);
	veggiesLoader.addEventListener('error', onVeggiesError);
	veggiesLoader.open('GET', '../data/veggies.json');
	veggiesLoader.send();
};


module.exports = {loadBread};

},{}]},{},[2]);
