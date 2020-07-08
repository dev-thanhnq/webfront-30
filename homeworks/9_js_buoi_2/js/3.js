function checkFontSize() {
	var font = document.getElementById('my-p').style.fontSize;
	console.log(font);
	font= font.substring(0, font.length-2);
	font *= 1.4;
	font += 'px';
	document.getElementById('my-p').style.fontSize = font;
}


// font=substring(0,font.length-2);
// 	font*=1.4
// font+='px'