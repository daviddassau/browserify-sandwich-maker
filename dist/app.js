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







},{"./xhr":4}],2:[function(require,module,exports){
"use strict";

const itsTheFinalCountdown = require('./data');



var finalSandwichPrice = 0;
var sandwichTotal = document.getElementById("sandwichTotal");
var itemFoods = document.getElementById("sandwichItems");


// Functionality for Bread
var selectedBread; // Variable to hold the bread that the user selects
let bread = document.getElementById("breadDiv"); // Getting the bread div from html

bread.addEventListener("change", (e) => {
	// console.log("bread");
	let myBread = itsTheFinalCountdown.getBread();
	selectedBread = e.target.value;
	console.log("myBread", myBread);
	for(let key in myBread){
		console.log(key);
		if(selectedBread === key && e.target.checked){
			finalSandwichPrice += myBread[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.innerHTML += `<p id="${key}">$${myBread[key]} ${key}</p>`;
		} else if(selectedBread === key && e.target.checked === false){
			finalSandwichPrice -= myBread[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.removeChild(document.getElementById(`${key}`));
		}
	}
});

const breadGetter = () => {
	return finalSandwichPrice;
};



// Functionality for Meat
var selectedMeat; // Variable to hold the meat that the user selects
let meat = document.getElementById("meatDiv"); // Getting the meat div from html

meat.addEventListener("change", (e) => {
	let myMeat = itsTheFinalCountdown.getMeat();
	selectedMeat = e.target.value;
	for(let key in myMeat){
		console.log(key);
		if(selectedMeat === key && e.target.checked){
			finalSandwichPrice += myMeat[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.innerHTML += `<p id="${key}">$${myMeat[key]} ${key}</p>`;
		} else if(selectedMeat === key && e.target.checked === false){
			finalSandwichPrice -= myMeat[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.removeChild(document.getElementById(`${key}`));
		}
	}
});

const meatGetter = () => {
	return finalSandwichPrice;
};



// Functionality for Cheese
var selectedCheese; // Variable to hold the cheese that the user selects
let cheese = document.getElementById("cheeseDiv"); // Getting the cheese div from html

cheese.addEventListener("change", (e) => {
	let myCheese = itsTheFinalCountdown.getCheese();
	selectedCheese = e.target.value;
	for(let key in myCheese){
		console.log(key);
		if(selectedCheese === key && e.target.checked){
			finalSandwichPrice += myCheese[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.innerHTML += `<p id="${key}">$${myCheese[key]} ${key}</p>`;
		} else if(selectedCheese === key && e.target.checked === false){
			finalSandwichPrice -= myCheese[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.removeChild(document.getElementById(`${key}`));
		}
	}
});

const cheeseGetter = () => {
	return finalSandwichPrice;
};



// Functionality for Condiments
var selectedCondiments; // Variable to hold the condiments that the user selects
let condiments = document.getElementById("condimentsDiv"); // Getting the condiments div from html

condiments.addEventListener("change", (e) => {
	let myCondiments = itsTheFinalCountdown.getCondiments();
	selectedCondiments = e.target.value;
	for(let key in myCondiments){
		console.log(key);
		if(selectedCondiments === key && e.target.checked){
			finalSandwichPrice += myCondiments[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.innerHTML += `<p id="${key}">$${myCondiments[key]} ${key}</p>`;
		} else if(selectedCondiments === key && e.target.checked === false){
			finalSandwichPrice -= myCondiments[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.removeChild(document.getElementById(`${key}`));
		}
	}
});

const condimentsGetter = () => {
	return finalSandwichPrice;
};



// Functionality for Veggies
var selectedVeggies; // Variable to hold the veggies that the user selects
let veggies = document.getElementById("veggiesDiv"); // Getting the veggies div from html

veggies.addEventListener("change", (e) => {
	let myVeggies = itsTheFinalCountdown.getVeggies();
	selectedVeggies = e.target.value;
	for(let key in myVeggies){
		console.log(key);
		if(selectedVeggies === key && e.target.checked){
			finalSandwichPrice += myVeggies[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.innerHTML += `<p id="${key}">$${myVeggies[key]} ${key}</p>`;
		} else if(selectedVeggies === key && e.target.checked === false){
			finalSandwichPrice -= myVeggies[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.removeChild(document.getElementById(`${key}`));
		}
	}
});

const veggiesGetter = () => {
	return finalSandwichPrice;
};



module.exports = {breadGetter, meatGetter, cheeseGetter, condimentsGetter, veggiesGetter};

},{"./data":1}],3:[function(require,module,exports){
"use strict";

const ingredients = require('./data');
const domHandler = require('./domHandler');

ingredients.breadInitializer();
ingredients.meatInitializer();
ingredients.cheeseInitializer();
ingredients.condimentsInitializer();
ingredients.veggiesInitializer();

},{"./data":1,"./domHandler":2}],4:[function(require,module,exports){
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


module.exports = {loadBread, loadMeat, loadCheese, loadCondiments, loadVeggies};

},{}]},{},[3]);
