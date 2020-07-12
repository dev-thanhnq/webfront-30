function chooseTab(element) {
	var tab = document.getElementsByClassName('tab');
	for (var i = 0; i < tab.length; i++ ) {
		tab[i].nextElementSibling.style.display = 'none';
		tab[i].style.color = 'white';
		tab[i].style.backgroundColor = 'gray';
	}
	element.nextElementSibling.style.display = 'block';
	element.style.color = 'gray';
	element.style.backgroundColor = 'white';
}	