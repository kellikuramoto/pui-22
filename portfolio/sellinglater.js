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
	var element = document.querySelector('#current-state');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('current-state-link').style.color = '#7B9741'
			document.getElementById('current-state-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('current-state-link').style.color = '#312C30'
		document.getElementById('current-state-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#iteration-testing');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('iteration-testing-link').style.color = '#7B9741';
		document.getElementById('iteration-testing-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('iteration-testing-link').style.color = '#312C30';
		document.getElementById('iteration-testing-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#problems-solutions');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('problems-solutions-link').style.color = '#7B9741'
			document.getElementById('problems-solutions-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('problems-solutions-link').style.color = '#312C30'
		document.getElementById('problems-solutions-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#final-prototype');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('final-prototype-link').style.color = '#7B9741';
		document.getElementById('final-prototype-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('final-prototype-link').style.color = '#312C30';
		document.getElementById('final-prototype-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#conclusion');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('conclusion-link').style.color = '#7B9741';
		document.getElementById('conclusion-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('conclusion-link').style.color = '#312C30';
		document.getElementById('conclusion-link').style.fontWeight = '300';
	}
});

function loadNext() {
	window.location = 'xpresso.html';
}