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
