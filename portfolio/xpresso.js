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

window.addEventListener('scroll', function() {
	var element = document.querySelector('#parallel-prototyping');
	var position = element.getBoundingClientRect();

	if (position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('parallel-prototyping-link').style.color = '#A38979';
		document.getElementById('parallel-prototyping-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('parallel-prototyping-link').style.color = '#312C30';
		document.getElementById('parallel-prototyping-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#hi-fi');
	var position = element.getBoundingClientRect();

	if (position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('hi-fi-link').style.color = '#A38979';
		document.getElementById('hi-fi-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('hi-fi-link').style.color = '#312C30';
		document.getElementById('hi-fi-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#heuristic-evaluation');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('heuristic-evaluation-link').style.color = '#A38979'
			document.getElementById('heuristic-evaluation-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('heuristic-evaluation-link').style.color = '#312C30'
		document.getElementById('heuristic-evaluation-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#build-website');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('build-website-link').style.color = '#A38979'
		document.getElementById('build-website-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('build-website-link').style.color = '#312C30'
		document.getElementById('build-website-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#final-website');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('final-website-link').style.color = '#A38979'
			document.getElementById('final-website-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('final-website-link').style.color = '#312C30'
		document.getElementById('final-website-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#conclusion');
	var position = element.getBoundingClientRect();

	if (position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('conclusion-link').style.color = '#A38979';
		document.getElementById('conclusion-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('conclusion-link').style.color = '#312C30';
		document.getElementById('conclusion-link').style.fontWeight = '300';
	}
});

function load() {
	window.open('https://kellikuramoto.github.io/pui-22/homework_6b/', '_blank');
}

function loadNext() {
	window.location = 'tartordle.html';
}