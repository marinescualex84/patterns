var images = document.querySelectorAll('.slide img');
var crtImg = images[0];
var nextImg = images[1];
var displayTime = 4000;
var transitionTime = 500;
var step = 1/transitionTime;
var opacity = 1;
var interval;
var timeout;
var crtLink;
var nextLink;
var controlDiv = document.createElement('div');
controlDiv.className = 'controls';

for ( i = 0; i < images.length; i++) {
	var link = document.createElement('a');
	link.innerHTML = 'Slide' + i;
	link.href = '#slide' + i;

	if ( i == 0) {
		link.className = 'current';
		crtLink = link;
	}

	if ( i == 1) {
		nextLink = link;
	}

	link.addEventListener('click', changeImage);
	controlDiv.appendChild(link);
}

var imageContainer = document.querySelector('.slide');
imageContainer.parentNode.insertBefore(controlDiv, imageContainer.nextElementSibling);

crtImg.className = 'visible';
nextImg.className = 'next';
timeout = setTimeout(startGallery, displayTime);

function startGallery() {
	interval = setInterval(transition, step);
}

function transition() {
	opacity -= step;
	crtImg.style.opacity = opacity;
	if (opacity <= 0) {
		opacity = 1;
		crtLink.className = '';
		crtLink = nextLink;
		nextLink = crtLink.nextElementSibling;
		if (!nextLink) {
			nextLink = document.querySelector('.controls a');
		}
		crtLink.className = 'current';

		crtImg.className = '';
		crtImg.style.opacity = 1;
		crtImg = nextImg;
		nextImg = crtImg.nextElementSibling;
		if (!nextImg) {
			nextImg = images[0];
		}
		crtImg.className = 'visible';
		nextImg.className = 'next';
		clearInterval(interval);
		timeout = setTimeout(startGallery, 4000);
	}
}

// Cand apesi pe buton, se schimba poza
function changeImage(event) {
	event.preventDefault();
	var index = parseInt(this.hash.slice(6), 10);
	if (!isNaN(index)) {
		opacity = 1;
		crtImg.style.opacity = 1;
		crtImg.className = '';
		nextImg.className = '';
		crtImg = images[index];
		index++;
		if (index >= images.length) {
			index = 0;
		}
		nextImg = images[index];
		crtImg.className = 'visible';
		nextImg.className = 'next';
		crtLink.className = '';
		crtLink = this;
		nextLink = crtLink.nextElementSibling;
		if (!nextLink) {
			nextLink = document.querySelector('.controls a');
		}
		crtLink.className = 'current';
		clearInterval(interval);
		clearTimeout(timeout);
		timeout = setTimeout(startGallery, displayTime);
	}
}






