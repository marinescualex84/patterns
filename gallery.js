var step = 0.005;
var delay = 5000;
var opacity = 1;
var interval;
var timeout;
var currentImage;
var nextImage;
var running = false;

function rotate() {
	if ( opacity == 1) {
		currentImage = document.querySelector('.visible');
		nextImage = currentImage.nextElementSibling;

		if (!nextImage) {
			nextImage = document.querySelectorAll('.slide img')[0];
		}
		running = true;
		nextImage.className = 'next';
	}

	opacity -= step;
	currentImage.style.opacity = opacity;

	if (opacity <= 0) {
		opacity = 1;
		currentImage.className = '';
		nextImage.className = 'visible';
		currentImage.style.opacity = opacity;

		var currentLink = document.querySelector('.current');
		var nextLink = currentLink.nextElementSibling;
		if (!nextLink) {
			nextLink = document.querySelectorAll('.controls a')[0];
		}
		nextLink.className = 'current';
		currentLink.className = '';

		clearInterval(interval);
		timeout = setTimeout(function() { interval = setInterval(rotate, 10); }, delay);
		running = false;
	}

}


function changeImage(event) {
	event.preventDefault();
	var links = document.querySelectorAll('.controls a');
	var newSlide = parseInt(this.dataset.slide);
	var currentSlide = document.querySelector('.visible');
	var nextSlideOrder = document.querySelector('.next');
	opacity = 1;
	currentSlide.className = '';
	currentSlide.style.opacity = opacity;
	if (nextSlideOrder) {
		nextSlideOrder.className = '';
	}
	document.querySelector('[data-image="' + newSlide + '"]').className = 'visible';
	if (!running) {
		clearTimeout(timeout);
	}
	clearInterval(interval);
	timeout = setTimeout(function() { interval = setInterval(rotate, 10); }, delay);
	var currentLink = document.querySelector('.current');
	var nextLink = this;
	currentLink.className = '';
	nextLink.className = 'current';

}


window.addEventListener('load', function() {
	timeout = setTimeout(function() { interval = setInterval(rotate, 10); }, delay);

	var links = document.querySelectorAll('.controls a');
	for( var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', changeImage);
	}
});

