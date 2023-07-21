'use strict';
// move the view around between absolutely
// positioned elements
function handleViewChange() {
	let button = '';

	// Get all elements with the class 'navbutton'
	const navButtons = document.querySelectorAll('.navbutton');
	navButtons.forEach((navButton) => {
		navButton.addEventListener('click', function () {
			button = this.id;

			// Get all elements with the class 'container'
			const containers = document.querySelectorAll('.container');
			containers.forEach((container) => {
				container.classList.toggle(this.id);
			});
		});
	});

	// Get all elements with the class 'back-button'
	const backButton = document.querySelector('.back-button');
	backButton.addEventListener('click', function () {
		// Get all elements with the class 'container'
		const containers = document.querySelectorAll('.container');
		containers.forEach((container) => {
			container.classList.toggle(button);
		});
	});
}

// handle modal
// when adding additional portfolio pieces
// will create an object variable to deal with
// updating which modal content is generated
function handleModal() {
	// Open modal
	const earTrainingButton = document.querySelector('#ear-training-button');
	earTrainingButton.addEventListener('click', function () {
		const modal = document.querySelector('.modal');
		modal.style.display = 'block';
	});

	// Close modal
	const closeButton = document.querySelector('.close-button');
	closeButton.addEventListener('click', function () {
		const modal = document.querySelector('.modal');
		modal.style.display = 'none';
	});
}

//handle keyboard navigation
function handleKeyboardNav() {
	console.log(`handleKeyboardNav() ran`);
}
//--contact form--
function handleSubmitForm() {
	// Get the submit button element
	const submitButton = document.querySelector('#submit');

	// Add a click event listener to the submit button
	submitButton.addEventListener('click', function (e) {
		e.preventDefault();

		// Validate the form
		if (validateForm() === true) {
			console.log(`handleSubmitForm() was a success`);
		} else {
			console.log(`handleSubmitForm() was a fail`);
		}
	});
}

//validate the email
function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(String(email).toLowerCase());
}
//validate form submission
function validateForm() {
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

	if (name === '' || name === 'Your Name') {
		const nameLabel = document.querySelector('#name-label');
		nameLabel.textContent = 'Required';
		nameLabel.style.color = 'red';
		nameLabel.style.fontSize = '2rem';
		document.querySelector('#name').focus();
		return false;
	} else {
		const nameLabel = document.querySelector('#name-label');
		nameLabel.textContent = 'Valid';
		nameLabel.style.color = 'green';
		nameLabel.style.fontSize = '2rem';
	}

	if (email === '' || email === 'Your Email') {
		const emailLabel = document.querySelector('#email-label');
		emailLabel.textContent = 'Valid Email Required';
		emailLabel.style.color = 'red';
		emailLabel.style.fontSize = '2rem';
		document.querySelector('#email').focus();
		return false;
	} else if (!validateEmail(email)) {
		const emailLabel = document.querySelector('#email-label');
		emailLabel.textContent = 'Valid Email Required';
		emailLabel.style.color = 'red';
		emailLabel.style.fontSize = '2rem';
		document.querySelector('#email').focus();
		return false;
	} else {
		const emailLabel = document.querySelector('#email-label');
		emailLabel.textContent = 'Valid';
		emailLabel.style.color = 'green';
		emailLabel.style.fontSize = '2rem';
	}

	if (message === '' || message === 'Your Message') {
		const messageLabel = document.querySelector('#message-label');
		messageLabel.textContent = 'Required';
		messageLabel.style.color = 'red';
		messageLabel.style.fontSize = '2rem';
		document.querySelector('#message').focus();
		return false;
	} else {
		const messageLabel = document.querySelector('#message-label');
		messageLabel.textContent = 'Valid';
		messageLabel.style.color = 'green';
		messageLabel.style.fontSize = '2rem';
	}

	return true;
}

// --end contact form--

//transition new DOM elements
function createNewPage(string, num) {
	console.log(`createNewPage() ran`);
	const svg = DATA[num][string][1];
	const nav = DATA[num][string][0];
	const navGen = setTimeout(a, 1000);
	const bodyGen = setTimeout(b, 1000);

	function a() {
		document.body.insertAdjacentHTML('beforeend', nav);
		fadeInBackground();
		resetFontSize();
		clearTimeout(navGen);
	}

	function b() {
		document.body.insertAdjacentHTML('beforeend', svg);
		clearTimeout(bodyGen);
		fadeInBackground(string);
	}
}

//change DOM data
function changeDomValue(string) {
	document.body.dataset.id = string;
}

//remove elements from DOM
function removeDOM(string) {
	const elementsToRemove = document.querySelectorAll(`.${string}`);
	elementsToRemove.forEach((element) => element.remove());
}

//nav grow in transition
function navGrow() {
	setTimeout(e, 100);
	function e() {
		const navItems = document.querySelectorAll('.nav-item');
		navItems.forEach((item) => {
			const child = item.children[0];
			child.style.transition = 'font-size 1s';
			child.style.fontSize = '3rem';
		});
	}
	clearTimeout(e);
}

//remove nav element
function removeNavElement() {
	let timer = setTimeout(e, 200);
	function e() {
		const navElement = document.querySelector('nav');
		if (navElement) {
			navElement.remove();
		}
		clearTimeout(timer);
	}
}

//nav fade out transition
function navFadeOut() {
	const navElement = document.querySelector('#nav');
	if (navElement) {
		navElement.style.transition = 'opacity 1s';
		navElement.style.opacity = 0;
	}
}

//font size increase
function fontGrow(string) {
	const element = document.getElementById(string);
	if (element) {
		element.style.transition = 'font-size 0.8s';
		element.style.fontSize = '5.5rem';
		setTimeout(() => {
			element.style.transition = 'none';
			element.style.fontSize = '5rem';
			console.log(
				`fontGrow() ran expected: '5rem', actual: '${element.style.fontSize}' string: ${string}`
			);
		}, 800);
	}
}

//reset font size
function resetFontSize() {
	const liElements = document.querySelectorAll('li');
	liElements.forEach((li) => {
		li.style.fontSize = '5rem';
	});
	console.log(
		`resetFontSize() ran expected '5rem' actual: '${
			getComputedStyle(document.getElementById('nav')).fontSize
		}'`
	);
}

//navigation fade in
function navFadeIn(string) {
	const navElement = document.getElementById('nav');
	navElement.style.opacity = 0;
	const startTime = performance.now();

	function fadeIn() {
		const currentTime = performance.now();
		const elapsed = currentTime - startTime;
		const opacity = elapsed / 700; // 700 ms is the duration of the animation

		if (opacity >= 1) {
			navElement.style.opacity = 1;
		} else {
			navElement.style.opacity = opacity;
			requestAnimationFrame(fadeIn);
		}
	}

	requestAnimationFrame(fadeIn);
}

//fade out background elements
function fadeOut(string) {
	const elements = document.querySelectorAll(`.${string}`);
	const startTime = performance.now();

	function fadeOutAnimation() {
		const currentTime = performance.now();
		const elapsed = currentTime - startTime;
		const opacity = 1 - elapsed / 700; // 700 ms is the duration of the animation

		if (opacity <= 0) {
			elements.forEach((element) => (element.style.opacity = 0));
		} else {
			elements.forEach((element) => (element.style.opacity = opacity));
			requestAnimationFrame(fadeOutAnimation);
		}
	}

	requestAnimationFrame(fadeOutAnimation);
	console.log(
		`fadeOut() ran. expected: '0' actual: '${elements[0].style.opacity}'`
	);
}

//fade in background elements
function fadeInBackground(string) {
	const elements = document.querySelectorAll(`.${string}`);
	const startTime = performance.now();

	function fadeInAnimation() {
		const currentTime = performance.now();
		const elapsed = currentTime - startTime;
		const opacity = elapsed / 7000; // 7000 ms is the duration of the animation

		if (opacity >= 1) {
			elements.forEach((element) => (element.style.opacity = 1));
		} else {
			elements.forEach((element) => (element.style.opacity = opacity));
			requestAnimationFrame(fadeInAnimation);
		}
	}

	requestAnimationFrame(fadeInAnimation);
	console.log(
		`fadeInBackground ran expected: '1' actual: '${elements[0].style.opacity}'`
	);
}

// svg click for audio
function audioClick() {
	const audio = new Audio('assets/audio/sailboat.mp3');
	const sunElements = document.querySelectorAll('.sun, #sun');

	sunElements.forEach((element) => {
		element.addEventListener('click', () => {
			audio.play();
		});
	});
}

function handlePage() {
	handleModal();
	handleSubmitForm();
	// handleKeyboardNav();
	handleViewChange();
	audioClick();
	navGrow();
	// findPathLength();
	// addElement();
}

// find path length of svg
function findPathLength() {
	const path = document.querySelector('.sun path');
	const total_length = Math.round(path.getTotalLength());
	console.log(total_length);
}

handlePage();
