var defaultFontSize = document.getElementById('my-p').style.fontSize;
function setDefault() {
	document.getElementById('my-p').style.fontSize = defaultFontSize;
}
function biggerFontSize() {
	var font = document.getElementById('my-p').style.fontSize;
	console.log(font);
	font = font.substring(0, font.length-2);
	font *= 1.4;
	font += 'px';
	document.getElementById('my-p').style.fontSize = font;
}
function smallerFontSize() {
	var font = document.getElementById('my-p').style.fontSize;
	console.log(font);
	font = font.substring(0, font.length-2);
	font *= 0.6;
	font += 'px';
	document.getElementById('my-p').style.fontSize = font;
}