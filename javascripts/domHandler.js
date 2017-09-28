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
