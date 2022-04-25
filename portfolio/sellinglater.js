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

let currentCase = localStorage.getItem('Case');

let div = document.getElementById('process');

div.addEventListener('scroll', function() {
	let currentCase = localStorage.getItem('Case');

	var element = document.querySelector('#current-state');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('current-state-link').style.color = projects[currentCase].background;
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	var element = document.querySelector('#iteration-testing');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('iteration-testing-link').style.color = projects[currentCase].background;
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	var element = document.querySelector('#problems-solutions');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('problems-solutions-link').style.color = projects[currentCase].background;
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	var element = document.querySelector('#final-prototype');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('final-prototype-link').style.color = projects[currentCase].background;
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

div.addEventListener('scroll', function() {
	var element = document.querySelector('#conclusion');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('conclusion-link').style.color = projects[currentCase].background;
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
});

function loadNext() {
	window.location = 'xpresso.html';
}