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
	var element = document.querySelector('#semi-structured');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('semi-structured-link').style.color = '#A6192E'
		document.getElementById('semi-structured-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('semi-structured-link').style.color = '#312C30'
		document.getElementById('semi-structured-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#personas');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('personas-link').style.color = '#A6192E'
			document.getElementById('personas-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('personas-link').style.color = '#312C30'
		document.getElementById('personas-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#testing-design');
    var bounding = element.getBoundingClientRect();
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;

    if (bounding.top >= -elementHeight 
        && bounding.left >= -elementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight) {
			document.getElementById('testing-design-link').style.color = '#A6192E'
			document.getElementById('testing-design-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('testing-design-link').style.color = '#312C30'
		document.getElementById('testing-design-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#user-needs');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('user-needs-link').style.color = '#A6192E'
		document.getElementById('user-needs-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('user-needs-link').style.color = '#312C30'
		document.getElementById('user-needs-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#build-website');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('build-website-link').style.color = '#A6192E'
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
			document.getElementById('final-website-link').style.color = '#A6192E'
			document.getElementById('final-website-link').style.fontWeight = '600';
    } 
	else {
		document.getElementById('final-website-link').style.color = '#312C30'
		document.getElementById('final-website-link').style.fontWeight = '300';
    }
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#client-feedback');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('client-feedback-link').style.color = '#A6192E'
		document.getElementById('client-feedback-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('client-feedback-link').style.color = '#312C30'
		document.getElementById('client-feedback-link').style.fontWeight = '300';
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#conclusion');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		document.getElementById('conclusion-link').style.color = '#A6192E'
		document.getElementById('conclusion-link').style.fontWeight = '600';
	}
	else {
		document.getElementById('conclusion-link').style.color = '#312C30'
		document.getElementById('conclusion-link').style.fontWeight = '300';
	}
});

function load() {
	window.open('https://kellikuramoto.github.io/casestudy/dei/', '_blank');
}

function loadNext() {
	window.location = 'sellinglater.html';
}