var links = document.querySelectorAll('.filters a');
var crtLink = document.querySelector('.selected');
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', filterImage);
}

function filterImage(e) {
	e.preventDefault();
	crtLink.className = '';
	crtLink = this;
	crtLink.className = 'selected';

	var filter = this.dataset.filter;

	if (!filter) {
		var showImages = document.querySelectorAll('.image img');
		var hideImages = [];
	}
	else {
		var showImages = document.querySelectorAll('[data-category*="' + filter + '"]');
		var hideImages = document.querySelectorAll('.image img:not([data-category*="' + filter + '"])');
	}

	for (var i = 0; i < hideImages.length; i++) {
		hideImages[i].parentNode.style.display = 'none';
	}
	for (var i = 0; i < showImages.length; i++) {
		showImages[i].parentNode.style.display = 'block';
	}
}