var elements = document.getElementById('my-text');
console.log(elements);
var elements2 = document.getElementsByClassName('content');
console.log(elements2[0]);
var elements3 = document.getElementsByTagName('h5');
console.log(elements3[1]);
var elements = document.getElementById('my-text');
console.log(elements);
elements.innerHTML = '<h1>XIN CHAO LOP</h1>';
var contentHTML = elements.innerHTML;

var elements4 = document.getElementById('link_fb');
elements4.href = 'https//facebook.com';
console.log(elements4);

elements4.style.color = 'red';
elements4.style.fontSize = '30px';

// function buttonClick() {
// 	elements4.style.color = 'green';
// }
// var btnClick = document.addEventListener()

function changeColor(element) {
	element.style.color = 'green';
}

function changeColorOver(element) {
	element.style.color = 'blue';
}

function changeColorOut(element) {
	element.style.color = 'green';
}
function loadPage() {
	alert('Trang đã được tải!');
}
function onBlurTest(element) {
	var val = element.value;
	val = val.toUpperCase();
	element.value = val;
}
function onFocusTest(element) {
	element.style.background = 'red';
}
var element_a = document.getElementById('link_fb');
console.log(element_a.parentNode);

var element_body = document.getElementsByClassName('parent1');
console.log(elem`ent_body.previousElementSibling);