'use strict';
// move the view around between absolutely
// positioned elements
function handleViewChange() {
	let button = '';
	$('.navbutton').click(function () {
		button = this.id;
		$('.container').toggleClass(this.id);
	});
	$('.back-button').click(function () {
		$('.container').toggleClass(button);
	});
}
// handle modal
// when adding additional portfolio pieces
// will create an object variable to deal with
// updating which modal content is generated
function handleModal() {
	//open modal
	$('#ear-training-button').click(function () {
		$('.modal').show(400);
	});
	//close modal
	$('.close-button').click(function () {
		$('.modal').hide(400);
	});
}
//handle keyboard navigation
function handleKeyboardNav() {
	console.log(`handleKeyboardNav() ran`);
}
//--contact form--
function handleSubmitForm() {
	//submit listener
	$('#submit').click(function (e) {
		e.preventDefault();

		//validate the submit form
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
	let name = $('#name').val();
	let email = $('#email').val();
	let message = $('#message').val();
	if (name === '' || name === 'Your Name') {
		$('#name-label').text(`Required`);
		$('#name-label').css({ color: 'red', 'font-size': '2rem' });
		$('#name').focus();
		return false;
	}
	if (name !== '' || name !== 'Your Name') {
		$('#name-label').text(`Valid`);
		$('#name-label').css({ color: 'green', 'font-size': '2rem' });
	}
	if (email == '' || email == 'Your Email') {
		$('#email-label').text(`Valid Email Required`);
		$('#email-label').css({ color: 'red', 'font-size': '2rem' });
		$('#email').focus();
		return false;
	}
	if (validateEmail(email) === false) {
		$('#email-label').text(`Valid Email Required`);
		$('#email-label').css({ color: 'red', 'font-size': '2rem' });
		$('#email').focus();
		return false;
	}
	if (validateEmail(email) === true) {
		$('#email-label').text(`Valid`);
		$('#email-label').css({ color: 'green', 'font-size': '2rem' });
	}
	if (message === '' || message === 'Your Message') {
		$('#message-label').text(`Required`);
		$('#message-label').css({ color: 'red', 'font-size': '2rem' });
		$('#message').focus();
		return false;
	}
	if (message !== '' || message !== 'Your Name') {
		$('#message-label').text(`Valid`);
		$('#message-label').css({ color: 'green', 'font-size': '2rem' });
	}
	return true;
}
// --end contact form--

//transition new DOM elements
function createNewPage(string, num) {
	console.log(`createNewPage() ran`);
	let svg = DATA[`${num}`][`${string}`][1];
	let nav = DATA[`${num}`][`${string}`][0];
	let navGen = setTimeout(a, 1000);
	let bodyGen = setTimeout(b, 1000);
	function a() {
		$('body').append(nav);
		fadeInBackground();
		resetFontSize();
		clearTimeout(navGen);
	}
	function b() {
		$('body').append(svg);
		clearTimeout(bodyGen);
		fadeInBackground(string);
	}
}
//change DOM data
function changeDomValue(string) {
	$('body').data('id', `${string}`);
}
//remove elements from DOM
function removeDOM(string) {
	$(`.${string}`).remove();
}
//nav grow in transition
function navGrow() {
	// window.setTimeout(e, 16000)
	window.setTimeout(e, 100);
	function e() {
		$(`.nav-item`).children().animate({ fontSize: '3rem' }, 1000);
	}
	window.clearTimeout(e);
}
//remove nav element
function removeNavElement() {
	let timer = setTimeout(e, 200);
	function e() {
		$(`nav`).remove();
		clearTimeout(timer);
	}
}
//nav fade out transition
function navFadeOut() {
	$(`#nav`).animate({ opacity: 0 }, 1000);
}
//font size increase
function fontGrow(string) {
	$(`#${string}`).animate({ fontSize: '5.5rem' }, 800);
	$(`#${string}`).animate({ fontSize: '5rem' }, 1);
	console.log(
		`fontGrow() ran expected: '5rem', actual: '${$(`${string}`).css(
			'fontSize'
		)}' string: ${string}`
	);
}
//reset font size
function resetFontSize() {
	$(`li`).animate({ fontSize: '5rem' }, 1);
	console.log(
		`resetFontSize() ran expected '5rem' actual: '${$('#nav').css(
			'font-size'
		)}'`
	);
}
//navigation fade in
function navFadeIn(string) {
	$(`#nav`).animate({ opacity: 1 }, 700);
}
//fade out background elements
function fadeOut(string) {
	$(`.${string}`).animate({ opacity: 0 }, 700);
	console.log(
		`fadeOut() ran. expected: '0' actual: '${$(`${string}`).css('opacity')}'`
	);
}
//fade in background elements
function fadeInBackground(string) {
	$(`.${string}`).animate({ opacity: 1 }, 7000);
	console.log(
		`fadeInBackground ran expected: '1' actual: '${$('.background').css(
			'opacity'
		)}'`
	);
}
// svg click for audio
function audioClick() {
	let audio = new Audio('assets/audio/sailboat.mp3');
	$('.sun, #sun').click(function () {
		audio.play();
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
	let path = document.querySelector(`.sun path`);
	let total_length = path.getTotalLength();
	Math.round(total_length);
	console.log(total_length);
}

$(handlePage());
