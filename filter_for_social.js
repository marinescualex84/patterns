var linksF = document.querySelectorAll('.filters a.for_filter');
console.log(linksF);
var crtLink = document.querySelector('.selected');
for (var i = 0; i < linksF.length; i++) {
	linksF[i].addEventListener('click', filterImage);
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
		hideImages[i].parentNode.parentNode.style.display = 'none';
	}
	for (var i = 0; i < showImages.length; i++) {
		showImages[i].parentNode.parentNode.style.display = 'block';
	}
}