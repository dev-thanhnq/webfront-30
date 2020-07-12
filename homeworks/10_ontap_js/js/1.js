var img = document.getElementsByClassName('img');
function nextImg() {
	for (var i = 0; i < img.length - 1; i++) {
		if (img[i].className == 'img img-block') {
			// console.log(i);
			img[i].className = img[i].className.replace(' img-block', '');
			img[i].nextElementSibling.className += ' img-block'; 
			break;
		// } else if (i == (img.length - 1)) {
		// 	img[i].className = img[i].className.replace(' img-block', '');
		// 	img[0].className += ' img-block';
		}
	}
	hienThiCham();
}
function prevImg() {
	for (var i = img.length - 1; i > 0; i--) {
		if (img[i].className == 'img img-block') {
			// console.log(i);
			img[i].className = img[i].className.replace(' img-block', '');
			img[i].previousElementSibling.className += ' img-block'; 
			break;
		// } else if (i == (img.length - 1)) {
		// 	img[i].className = img[i].className.replace(' img-block', '');
		// 	img[0].className += ' img-block';
		}
	}
	hienThiCham();
}
var cham = document.getElementsByClassName('fa-circle');
function hienThiCham() {
	for (var i = 0; i < cham.length; i++) {
		cham[i].className = cham[i].className.replace(' opa', '');
	}
	for (var i = 0; i < img.length; i++) {
		if (img[i].className == 'img img-block') {
			cham[i].className += ' opa';
		}
	}
}
function selectCircle(element) {
	for (var i = 0; i < cham,length; i++) {
		img[i].className = img[i].className.replace(' img-block', '');
	}
	for (var i = 0; i < cham.length)
}