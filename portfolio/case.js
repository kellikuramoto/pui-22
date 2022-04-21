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
	document.getElementById('left').backgroundColor = projects[currentCase].accent;

	document.getElementsByTagName('h1')[0].innerHTML = projects[currentCase].name;
	document.getElementsByTagName('h1')[0].style.fontSize = '96px';
	document.getElementsByTagName('h1')[0].style.color = projects[currentCase].background;
	document.getElementsByTagName('h1')[0].style.paddingLeft = '100px';

	if ((currentCase == 1) || (currentCase == 2)) {
		document.getElementById('kuramoto').style.color = projects[currentCase].accent;
		document.getElementById('about').style.color = projects[currentCase].accent;
	}
	else {
		document.getElementById('kuramoto').style.color = '#F9F9F9';
		document.getElementById('about').style.color = '#F9F9F9';
	}

	document.getElementById("cover").src = projects[currentCase].cover;

}