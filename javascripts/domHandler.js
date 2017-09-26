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
	selectedBread = e.target.value;
	for(let key in myMeat){
		console.log(key);
		if(selectedBread === key && e.target.checked){
			finalSandwichPrice += myMeat[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.innerHTML += `<p id="${key}">$${myMeat[key]} ${key}</p>`;
		} else if(selectedBread === key && e.target.checked === false){
			finalSandwichPrice -= myMeat[key];
			sandwichTotal.innerHTML = `$${finalSandwichPrice}`;
			itemFoods.removeChild(document.getElementById(`${key}`));
		}
	}
});

const meatGetter = () => {
	return finalSandwichPrice;
};




module.exports = {breadGetter, meatGetter};
