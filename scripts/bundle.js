(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var $button = $('.button');
console.log($button);
// function onMouseOver() {
// 	$button.prop('disabled', true);
// 	$color.html('#88C470')
// 	$background.animate({
// 		width: '100%'
// 	}, 500);
// }

// $button.mouseover(onMouseOver);

$button.on('click', function () {
	var name = $('#name');
	var email = $('#email');
	var website = $('#website');
	var webpage = $('#webpage');
	var error1 = $('#error1');
	var error2 = $('#error2');
	var error3 = $('#error3');
	var error4 = $('#error4');
	var hasError = false;
	var main = $('.main');
	var success = $('.success');
	error1.html('');
	error2.html('');
	error3.html('');
	error4.html('');

	//if(name.val()==='Mory') {
	//   hasError=false;
	// window.location.replace('http://theironyard.com');
	//}

	if (name.val() === '') {
		hasError = true;
		error1.html('Name cannot be left empty');
		error1.css({ marginBottom: '1em' });
	}

	if (email.val() === '') {
		hasError = true;
		error2.html('Email must have contain an \'@\'');
		error2.css({ marginBottom: '1em' });
	}

	if (website.val() === '') {
		hasError = true;
		error3.html('Website must start with http://');
		error3.css({ marginBottom: '1em' });
	}

	if (webpage.val() === '') {
		hasError = true;
		error4.html('Message cannot be left empty');
		error4.css({ marginBottom: '1em' });
	}

	if (!hasError === true) {
		main.css({ display: 'none' });
		success.css({ display: 'block' });
		success.html('Thanks for contacting us ' + name.val() + '. We have received your message and will be in touch with you shortly.');
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map