let sellinglater = {
	name: 'Selling Later',
	description: 'Created a hi-fi prototype of a web application for a real estate business',
	url: "sellinglater.html",
	accent: '#7B9741',
	background: '#F9F9F9',
	indicator: 'sellinglater-indicator',
	cover: 'images/selling-laterCASE.png'
}

let xpresso = {
	name: 'Xpresso',
	description: 'Designed and developed a website for a concept coffee subscription company',
	url: "xpresso.html",
	accent: '#F5F6F2',
	background: '#94877E',
	second: '#E1AF48',
	indicator: 'xpresso-indicator'
}

let tartordle = {
	name: 'Tartordle',
	description: 'Developed a Carnegie Mellon version of NYTimes popular game, Wordle',
	url: "tartordle.html",
	accent: '#FFFFFF',
	background: '#C3354A',
	second: '#2D2926',
	indicator: 'tartordle-indicator'
}

let dei = {
	name: 'Dietrich DEI',
	description: 'Designed and developed a data driven dashboard display that embodied Dietrich Colleges DEI Strategic Plan',
	url: "dei.html",
	accent: '#A6192E',
	background: '#FFFFFF',
	indicator: 'dei-indicator'
}

let projects = [sellinglater, xpresso, tartordle, dei];


function loadCaseInfo() {
	let currentCase = localStorage.getItem('Case');

	nextCase = currentCase + 1;
	if (currentCase != projects.length) {
		console.log(projects[nextCase].name);
		document.getElementById("next-project-name").innerText = projects[nextCase].name;
		document.getElementById("next-project-name").style.color = projects[nextCase].background;
	}
	else {
		document.getElementById("next-project-name").innerText = projects[0].name;
		document.getElementById("next-project-name").style.color = projects[0].background;
	}
}

let currentCase = localStorage.getItem('Case');

let div = document.getElementsByClassName('process')[0];

div.addEventListener('scroll', function() {
	// let currentCase = localStorage.getItem('Case');
	console.log("Parallel Protoyping");

	var element = document.querySelector('#parallel-prototyping');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('current-state-link').style.color = '#A38979'
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	console.log("Hifi");
	var element = document.querySelector('#hi-fi');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('current-state-link').style.color = '#A38979'
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	console.log("HE");

	var element = document.querySelector('#heuristic-evaluation');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('current-state-link').style.color = '#A38979'
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	console.log("BUILD");

	var element = document.querySelector('#build-website');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('current-state-link').style.color = '#A38979'
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	console.log("FINAL");

	var element = document.querySelector('#final-website');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('current-state-link').style.color = '#A38979'
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	console.log("CONCLUSION");

	var element = document.querySelector('#conclusion');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('current-state-link').style.color = '#A38979'
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

function load() {
	window.open('https://kellikuramoto.github.io/pui-22/homework_6b/', '_blank');
}