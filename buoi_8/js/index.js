// alert('Hello Web 30');
// var cf = confirm('Ban tên là');
// var name = prompt('Mời bạn nhập tên!', 'Thành');
// alert(name);
var myName = "Thành";
// alert(myName);
document.write(myName);
var result = 9%4;
console.log('TOng 2 so:' , 2+4);
console.log('Hieu 2 so:', 4-2);
console.log('Tích 2 số:', 2*4);
console.log('Thương 2 số:', 4/2);
console.log('Chia lấy dư:', 5%2);
var a = 5;
console.log("Giá trị của a++", a++);
console.log("Giá trị của a:" , a); 
var x = 10;
var y = 18;
var c = x-- + y++ - ++y - ++x;
// alert(c);
console.log("Phép toán 10 == 18" , x == y)
console.log("Phép toán 10 != 18", x != y);
var bien_1 = true;
var bien_2 = false;
console.log('x && y', bien_1 && bien_2); 
console.log('x || y', bien_1 || bien_2);
var age = 20;
if (age >= 18) {
	console.log('Chào bạn!');
} else {
	console.log('Ra chỗ khác chơi!')
}
// var thu = prompt('Mời bạn nhập thứ');
// switch(thu) {
// 	case "2":
// 		console.log('Thứ 2');
// 		break;
// 	case "3":
// 		console.log('Thứ 3');
// 		break;
// 	default:
// 	console.log('sai');
// 		break;
// }
for (var i = 0; i < 10; i++) {
	console.log('Chép phạt lần thứ ', 1 + i);
}
var j = 0;
while (j < 5) {
	console.log('In ra số j: ', j);
	j++;
}
var s = 0;
for (var i = 0; i < 10; i++) {
	s += 1;
}
console.log(s);
var s2 = 0;
var k = 1;
while (k < 3) {
	s2 = s2 + k;
	k++;
}
console.log(s2);
for (var i = 0; i < 10; i++) {
	if (i == 5) {
		break;
	}
	console.log('i = ', i);
}
console.log('---');
for (var i = 0; i < 10; i++) {
	if (i == 5) {
		continue;
	}
	console.log('i = ', i);
}
function tinhTong (a, b) {
	return a + b;
}

var tong1 = tinhTong(2, 6);
var tong2 = tinhTong(0, 1);
console.log(tong1, tong2);

function soSanh (a, b) {
	return a > b;
}

var