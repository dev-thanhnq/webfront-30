function changeColorOver(element) {
	for (var i = 0; i < 2; i++) {
		element.children[i].style.backgroundColor = 'green';
	}
}
function changeColorOut(element) {
	for (var i = 0; i < 2; i++) {
		element.children[i].style.backgroundColor = '#92A5C9';
	}
}
function checkAll() {
	var check = document.getElementsByClassName('checkbox');
	for (var i = 0; i < check.length; i++) {
		check[i].checked = true;
	}
}
function uncheckAll() {
	var check = document.getElementsByClassName('checkbox');
	for (var i = 0; i < check.length; i++) {
		check[i].checked = false;
	}
}