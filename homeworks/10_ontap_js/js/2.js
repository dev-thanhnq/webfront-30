function checkName(element) {
	var name = element.value;
	if (name == "") {
		document.getElementById('war-nameNone').style.display = 'block';
		document.getElementById('war-nameShort').style.display = 'none';
	}
	else if (name.length < 8 && name.length > 0) {
		document.getElementById('war-nameShort').style.display = 'block';
		document.getElementById('war-nameNone').style.display = 'none';
	} else {
		document.getElementById('war-nameNone').style.display = 'none';
		document.getElementById('war-nameShort').style.display = 'none';
	}
}
function checkEmail(element) { 
	document.getElementById('war-emailNone').style.display = 'none';
    var email = element.value; 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(element.value)) { 
        document.getElementById('war-emailFalse').style.display = 'block'; 
    } 
    else{ 
        document.getElementById('war-emailFalse').style.display = 'none'; 
    } 
} 
function checkNumber(element) {
	var vnf_regex = /((09|03|07|08|05|02)+([0-9]{8})\b)/g;
    var number = element.value;
    if(number !=='') {
        if (vnf_regex.test(number) == false) 
        {
        	document.getElementById('war-numberNone').style.display = 'none';
            document.getElementById('war-numberFalse').style.display = 'block';
        } else {
            document.getElementById('war-numberNone').style.display = 'none';
            document.getElementById('war-numberFalse').style.display = 'none';
        }
    } else {
        document.getElementById('war-numberFalse').style.display = 'none';
        document.getElementById('war-numberNone').style.display = 'block';
    }
}
function checkPass(element) {
	var pass = element.value;
	if (pass.length < 8 && pass.length > 0) {
		document.getElementById('war-passShort').style.display = 'block';
		document.getElementById('war-passNone').style.display = 'none';
	} else if (pass == "") {
		document.getElementById('war-passShort').style.display = 'none';
		document.getElementById('war-passNone').style.display = 'block';
	} else {
		document.getElementById('war-passShort').style.display = 'none';
		document.getElementById('war-passNone').style.display = 'none';
	}
}
function checkSubPass(element) {
	var pass = document.getElementById('password').value;
	var subPass = element.value;
	if (subPass == "") {
		document.getElementById('war-subPassNone').style.display = 'block';
		document.getElementById('war-subPassFalse').style.display = 'none';
	} else if (subPass == pass) {
		document.getElementById('war-subPassNone').style.display = 'none';
		document.getElementById('war-subPassFalse').style.display = 'none';
	} else {
		document.getElementById('war-subPassNone').style.display = 'none';
		document.getElementById('war-subPassFalse').style.display = 'block';
	}
}
var val = document.getElementsByClassName('input');
var checkbox = document.getElementsByName("gioitinh");
var war = document.getElementsByClassName('warning');
function submit() {
	var z = 0;
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked == true){
            z = 1;
        }
    }
    if (z == 0) {
    	document.getElementById('war-gioitinh').style.display = 'block';
    } else if (z == 1) {
    	document.getElementById('war-gioitinh').style.display = 'none';
    }
	var y = 0;
	for (var i = 0; i < val.length; i++) {
		if (val[i].value == "") {
			y += 1;
		}
	}
	if (y != 0) {
		blockWarningNone();
		alert('Đăng kí thất bại!');
		return;
	}
	var x = 0;
	for (var i = 0; i < war.length; i++) {
		if (war[i].style.display == 'block') {
			x += 1;
		}
	}
	if (x != 0) {
		alert('Đăng kí thất bại!');
	} else {
		alert('Đăng kí thành công!');
		clearAll();
	}	
}
function clearAll() {
	for (var i = 0; i < val.length; i++) {
		val[i].value = "";
	}
	for (var i = 0; i < checkbox.length; i++) {
		checkbox[i].checked = false;
	}
	for (var i = 0; i < war.length; i++) {
		war[i].style.display = 'none';
	}
}
function blockWarningNone() {
	var warNone = document.getElementsByClassName('warning-none');
	for (var i = 0; i < val.length; i++) {
		if (val[i].value == "") {
			warNone[i].style.display = 'block';
		}
	}
}