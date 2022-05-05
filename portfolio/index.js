let sellinglater = {
	name: 'Selling Later',
	description: 'Created a hi-fi prototype of a web application for a real estate business',
	url: "sellinglater.html",
	accent: '#7B9741',
	background: '#F9F9F9',
	indicator: 'sellinglater-indicator',
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

/* HOME PAGE -- FUNCTIONS */
let currentFrame = 0;

let div = document.getElementById('portfolio');

div.addEventListener('scroll', function() {
	var element = document.querySelector('#selling-later');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		currentFrame = 0;
		loadInfo()
	}
});

div.addEventListener('scroll', function() {
	var element = document.querySelector('#xpresso');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		currentFrame = 1;
		loadInfo()
	}
});

div.addEventListener('scroll', function() {
	var element = document.querySelector('#tartordle');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		currentFrame = 2;
		loadInfo()
	}
});

div.addEventListener('scroll', function() {
	var element = document.querySelector('#dei');
	var position = element.getBoundingClientRect();

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		currentFrame = 3;
		loadInfo()
	}
});

function loadInfo() {
	document.getElementsByTagName('h1')[0].innerHTML = projects[currentFrame].name;
	document.getElementsByTagName('h1')[0].style.color = projects[currentFrame].accent;

	let description = document.getElementById('description');
	description.innerHTML = projects[currentFrame].description;

	document.getElementsByTagName('body')[0].style.backgroundColor = projects[currentFrame].background;

	document.getElementById('casestudy').style.backgroundColor = projects[currentFrame].accent;
	document.getElementById('casestudy').style.color = projects[currentFrame].background;

	let indicators = document.getElementById('indicator');
	let children = indicators.children;
	for (let c = 0; c < children.length; c += 1){
		if (c != currentFrame) {
			let child = children[c];
			child.style.backgroundColor = '#BBBCBC';
		}
		else {
			document.getElementById(projects[currentFrame].indicator).style.backgroundColor = projects[currentFrame].accent;
		}
	}

	if ((currentFrame == 1) || (currentFrame == 2)) {
		document.getElementById('description').style.color = projects[currentFrame].accent;
		
		document.getElementById(projects[currentFrame].indicator).style.backgroundColor = projects[currentFrame].second;

		document.getElementById('kuramoto').style.color = projects[currentFrame].accent;
		document.getElementById('about').style.color = projects[currentFrame].accent;
	}
	else {
		document.getElementById('description').style.color = '#312C30';
		
		document.getElementById(projects[currentFrame].indicator).style.backgroundColor = projects[currentFrame].accent;

		document.getElementById('kuramoto').style.color = '#312C30';
		document.getElementById('about').style.color = '#312C30';
	}
}

function clickInfo(newFrame) {
	currentFrame = newFrame;
	loadInfo();
}

document.getElementById('sellinglater-indicator').onclick = function() {clickInfo(0)};
document.getElementById('xpresso-indicator').onclick = function() {clickInfo(1)};
document.getElementById('tartordle-indicator').onclick = function() {clickInfo(2)};
document.getElementById('dei-indicator').onclick = function() {clickInfo(3)};

function loadCase() {
	window.location = projects[currentFrame].url;
	localStorage.setItem('Case', currentFrame);
	console.log('Current case: ' + localStorage.getItem('Case'));
}