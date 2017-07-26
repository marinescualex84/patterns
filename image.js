var links = document.querySelectorAll('.event_photos_container a');
for (i = 0; i < links.length; i++) {
	links[i].addEventListener('click', showImage);
}

function showImage(event) {
	event.preventDefault();
	var src = this.getAttribute('href');
	var div = document.createElement('div');
	div.className = 'overlay';
	div.addEventListener('click', closeImage);
	var img = document.createElement('img');
	img.src = src;
	img.addEventListener('load', function() {
		var scale = 0.7;
		var w = img.width;
		var h = img.height;
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		var imgW = scale * windowWidth;
		var imgH = h * imgW / w;

		if(imgH > scale * windowHeight) {
			imgH = scale * windowHeight;
			imgW = w * imgH / h;
		}
		if(imgW > w || imgH > h) {
			imgW = w;
			imgH = h;
		}

		var offsetX = -imgW / 2;
		var offsetY = -imgH / 2;
		img.style.marginLeft = offsetX + 'px';
		img.style.marginTop = offsetY + 'px';
		img.style.width = imgW + 'px';
		img.style.height = imgH + 'px';

		div.appendChild(img);
		div.style.display = 'block';
		document.querySelector('body').appendChild(div);
	});
}

function closeImage(event) {
	if (event.eventPhase == 2) {
		this.parentNode.removeChild(this);
	}
}