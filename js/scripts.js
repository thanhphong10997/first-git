var a = 2;
console.log(a);

// String
var fullname = 'Thanh Phong';
console.log(fullname);

function showLog() {
    console.log('hoc Js');

}
showLog();
showLog();

// Đo độ dài chuỗi
console.log(fullname.length);

// Check data type
console.log(typeof fullname);

// Backslash (\)
var fullname = 'Thanh Phong \"Dep Trai\"';
console.log(fullname);

// Template String ES6
var firstname = 'Thanh';
var lastname = 'Phong';
console.log(`${firstname} ${lastname}`);


var myString = "Phong   dep trai vl dep dep";
// Find index (Tìm vị trí của chuỗi)
console.log(myString.indexOf('dep'));
console.log(myString.indexOf('dep', 12));
// Tìm vị trí chữ dep thứ 2 (sau vị trí 12)
console.log(myString.lastIndexOf('dep'));

// Khi tìm ko thấy phần tử giá trị sẽ là -1
console.log(myString.search('dep'));

// Cut string
console.log(myString.slice(0,5));
console.log(myString.slice(-3,-6));

// Replace
console.log(myString.replace('dep', 'xinh'));
console.log(myString.replace(/dep/g, 'xinh'));

// Convert to Lower/Upper Case
console.log(myString.toLowerCase());

// Trim (Cắt bỏ khoảng trắng thừa)
console.log(myString.trim());

// Split (Cắt 1 chuỗi thành 1 array bằng cách tìm điểm chung)
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(', '));

// Get a character by index (Lấy 1 kí tự trong 1 chuỗi)
console.log(languages.charAt(0));
// dạng chuỗi (nếu ko tìm đc)
console.log(languages[4]);
// dạng undefined ( nếu ko tìm đc)


// Number

var age = 18;
var Pi = 3.14;
var result = 20 / 'A'
console.log(isNaN());
// isNaN để kiểm tra có phải là 1 số ko hợp lệ ko
// NaN : số ko hợp lệ

// Chuyển qua string
console.log(age.toString());

// Làm tròn số
console.log(Pi.toFixed());
console.log(Pi.toFixed(2));
// Làm tròn số thập phân thứ 2


// Array
// Là kiểu dữ liệu Object

var MyArray = [
	'javascript',
	'php',
	function() {

	},
	123,
];
console.log(MyArray);


// Xác định xem có phải Array hay ko
console.log(Array.isArray(MyArray));

// Lấy phần tử theo index
console.log(MyArray[2]);

// Chuyển từ dạng Array sang chuoi 
// Mặc định khi chuyển đổi giữa các phần tử...
// sẽ có dấu phẩy ngăn cách và ko sửa đc
console.log(MyArray.toString());

// Chuyển từ dạng chuỗi sang Array
// Có thể chỉnh sửa dấu giữa các phần tử như : , . -
console.log(MyArray.join(""));
// Không có dấu giữa các phần tử


console.log(MyArray.join(","));
// Hiện dấu phẩy giữa các phần tử

// Pop ( Xóa phần cuối của mãng 
// và xuất phần tử đó ra kết quả)
console.log(MyArray.pop());
console.log(MyArray.pop());
console.log(MyArray.pop());
console.log(MyArray.pop()); 
// Khi xóa hết phần tử của mãng thì
// sẽ hiện undefined (ko còn phần tử để xóa nữa)
console.log(MyArray);

// Push
// Thêm 1 phần tử vào mảng và 
// trả lại độ dài mảng đã thêm phần tử
var MyArray = [
	'javascript',
	'php',
	123,
];
console.log(MyArray.push('Dart'));
console.log(MyArray);


// Shift (Ngược với Pop)
 // ( Xóa phần đầu của mãng và
 // xuất phần tử đó ra màn hình)
 var MyArray = [
	'javascript',
	'php',
	123,
];
console.log(MyArray.shift());
console.log(MyArray.shift());
console.log(MyArray.shift());
// Ko còn phần tử để xóa nữa sẽ hiện undefined
console.log(MyArray);


// Unshift
// Thêm 1 phần tử vào đầu mảng
// và trả về độ dài mãng đã thêm
var MyArray = [
	'javascript',
	'php',
	123,
];
console.log(MyArray.unshift('Python'));
console.log(MyArray);

// Splice
// Xóa và chèn 1 đối tượng vào mảng
var MyArray = [
	'javascript',
	'php',
	123,
];
console.log(MyArray.splice(1,1,'Dart'));
// splice (vị trí bắt đầu, số phần tử muốn xóa, phần tử muốn chèn)


// Concat ( Hợp 2 mảng lại thành 1)
var MyArray = [
	'javascript',
	'php',
	123,
];

var MyArray2 = [
	'js',
	'pyhton',
];
console.log(MyArray.concat(MyArray2));


// Slice ( Cắt các phần tử của mãng)
var MyArray = [
	'javascript',
	'php',
	123,
	456,
];
console.log(MyArray.slice(0,3));
// slice (vị trí muốn cắt đầu tiên,vị trí muốn cắt cuối cùng)
console.log(MyArray.slice(0))
// Coppy tất cả phần tử

// var fullname = 'Thanh Phong';
// console. log('Toi la :' + '' + fullname);



// Function
// 1. Declaration function  Có thể được gọi ở vị trí trước khi định nghĩa
		function showMessage () {

		}

// 2. Expression function Định nghĩa xong mới gọi được
// Không cần đặt tên cho expression funcion
// Mục đích đặt tên chỉ để dễ hiểu tác dụng của function
		var showMessage2 = function () {

		}

		setTimeout(function () {

		})

		var myobject = {
			myFunction: function () {

			}
		}
// 3.Arrow function



// Array method
	// forEach()
	// every()
	// some()
	// find()
	// filter()
	// map()
	// reduce()
// Example

// var courses = [
// 	{
// 		id: 1;
// 		name: 'Java'
// 		coin: 100
// 	},

// 	{
// 		id: 2;
// 		name: 'PHP';
// 		coin: 500
// 	}

// ];

// courses.forEach(function(course,index){
// 	console.log(course);
// });


// courses.find(function(course,index){
// 	return courses.coin === 0;
// 	console.log(course);
// });

// Toán tử ++ -- (tiền tố và hậu tố)

// ++a: Trả về a sau khi đuuợc cộng 1

// a++: Output sẽ trả về giá trị a chưa coojnng,
// còn giá trị a+1 sẽ được dùng để gán vô các
// biến ở sau


			// Object
// var emailKey = 'email';

// var oj = {
// 	name: 'Hihi',
// 	number: 1234,
// 	address: 'q4',
// 	'phone': 01225179702,
// 	[emailKey]:'thanhphong@gmail', Gán biến vào key word

// }
// console.log(oj);


// oj.email = 'chipu@gmail.com';  Tạo 1 giá trị email nằm ngoài object
// console.log(oj['number']); Gọi biến number cách 1
// console.log(oj.number); Gọi biến number cách 2


// var myKey = 'phone';  Tạo 1 biến có giá trị là phone
// console.log(oj[myKey]);  Gán biến vừa tạo vào object




			// Object Constructor
function User(firstname, lastname,avatar,phone) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.phone = phone;
	this.avatar = avatar;

	this.getName = function() {
		return `${this.firstname} ${this.lastname}`;
	}

}
// console.log(User);

// var author = new User('Thanh', 'Phong', 214141414,'Avatar',);
var user = new User('Hung', 'Thinh', 72635753,'Avatar',);

// Tạo thêm các Key riêng lẽ cho từng biến
// author.title = 'Học Javascript';
// user.comment = 'Hihi';

// console.log(author.getName());
// console.log(user);


			// Prototype  ( Thêm phương thức hoặc thuộc tính chung ở ngoài Constructor)

User.prototype.className = "Lớp 12A1";
User.prototype.getClassname = function() {
	return this.className;
}

console.log(user.className);
console.log(user.getClassname());


			//Date
var date = new Date();   //Kiểu dữ liệu : Object
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();


console.log(date);
console.log(day);


// If - else if - else : Thực hiện từ trên xuống dưới, nếu thấy điều kiện đúng
// sẽ thực hiện câu lệnh đúng đầu tiên và bỏ qua tất cả câu lệnh ở dưới
// (cho dù câu lệnh ở dưới là đúng)


					//For
 var myArray = [
 	'Javascript',
 	'PHP',
 	'PYTHON',
 	'DART',
 ]
 var arrayLength = myArray.length;
 console.log(arrayLength);

 for ( i=0; i < arrayLength; i++ ) {
 	console.log(myArray[i]);
 }


 							//For in (Lấy ra các key của đối tượng)
 var myObject = {
 	name: 'Phong',
 	phone: 1244555,
 	email: 'hahaha@gmail.com',
 };

 for (var key in myObject) {
 	console.log(key);
 	console.log(myObject[key]);
 }

 var myString = 'Javascript';
 for (var key in myString) {
 	console.log(myString[key]);
 }


var myArray = [
	'PHP',
	'Java',
	'Flutter'
];
for (var key in myArray) {
	
	console.log(myArray[key]);

}



 							// For of ( Lấy ra từng phần tử trong mảng hoặc chuỗi)
 var myArray = [
 	'Java',
 	'PHP',
 	'Dart'
 ];
for ( var value of myArray ) {
	console.log(value);
}

var myString = 'Phong dep trai';
for ( var value of myString) {
	console.log(value);
}


// Khi dùng for of cho Object thì có 2 cách sử dụng
var myObject = {
	name: 'Phong',
	phone: '12141414',
	address: 'q4'
}

// Cách 1
for (var value of Object.keys(myObject)) {
	console.log(myObject[value]);
}

// Cách 2
for (var value of Object.values(myObject)) {
	console.log(value);
}


									//While
// Cách 1

// var i = 0;
// while (i < 100) {
// 	i++;
// 	console.log (i);
// }


//Cách 2

// var i = 1;
// while (i < 100) {
// 	console.log(i)
// 	i++;
// }


							// Do - While
// var isSuccess = false;
// // console.log(!isSuccess);
// var i = 0;
// do {

// 	i++;
// 	console.log('Nap lan thu ' + i);
// 	if (true) {
// 		isSuccess = true;
// 	}

// } while(isSuccess && i <= 3);


								//Break and Continue in Loop

// Break
for (var i = 0; i < 10; i++) {

	console.log(i);

	if (i >= 6) {  // Vòng lặp chạy đến giá trị 6 sẽ thoát khỏi vòng lặp
		break;
	}

}


// Continue
for (var i = 0; i < 10; i++) {
	if (i%2 !==0) {   // Khi gặp số lẻ nó sẽ bỏ qua và đọc giá trị là số chẵn
		continue;
	}
	console.log(i);

}


								//Nested Loop
var myArray = [
	[1,2],
	[3,4],
	[5,6],
];

// Cách 1
for (i = 0; i < myArray.length; i++) {
	// console.log(myArray[i]);
	for (j=0; j < myArray[i].length; j++) {
		console.log(myArray[i][j]);
	}
}



// Cách 2
for (var value of myArray) {
	// console.log(value);
	for (var value2 of value) {
		console.log(value2);
	}
}


						//Loop
// Chạy từ 100 về 0
// for (i = 100; i > 0; i--) {
// 	console.log(i);
// }


// Chạy từ 100 về 0 cách 5 đơn vị
// for (i = 100; i > 0; i -= 5) {
// 	console.log(i);
// }


							// Math Object
// 1. Math.PI (Trả về giá trị pi)  
 // console.log(Math.PI);

// 2. Math.round()  (Làm tròn số, 4.5 => 5, 4.1 => 4) 
 // console.log(Math.round())	

// 3. Math.abs()  (TRả về giá trị tuyệt đối,  - 4 => 4)
// console.log(Math.abs)

// 4.Math.ceil()  (Làm tròn trên, 4.1 =>5)			
// console.log(Math.ceil());

// 5.Math.floor()	( Làm tròn dưới, 4.9 => 4)
// console.log(Math.floor);

// 6.Math.random()	(Trả giá trị số thập phân nhỏ hơn 1)
// console.log (Math.floor(Math.random) * 10)	(Tạo ra 1 giá trị random < 10)
// VD: 
var bonus = [
	'10 coins',
	'20 coins',
	'30 coins',
	'40 coins',
	'50 coins'
]
var random = Math.floor(Math.random() * 5);	//Random trong khoảng 5 số
console.log(bonus[random]);

// 7.Math.min()		(Trả về giá trị nhỏ nhất)
// console.log(Math.min(-5,10,70,10))		( kết quả trả về -5)

// 8.Math.max()		(Trả về giá trị lớn nhất)
// console.log(Math.min(-5,10,70,10))		( kết quả trả về 70)



						//Hàm và Callback
function myFunction(param) {
	if (typeof param ==='function'){
		
	param('Hoc lap trinh');

	}
}	

//Callback :
	// 1. Là hàm
	// 2. Truyền qua đối số  (VD myFunction(myCallback))
	// 3. Được gọi lại (trong hàm nhận đối số VD: param ('Hoc lap trinh'))

function myCallback(value) {

	console.log('Value: ',value);
}

myFunction(myCallback);		


					// Empty elements of Array (Khi chiều dài của mảng
					// ko phải là phần tử thật của mảng)
// Cách 1					
// var courses = [
// 	'PHP',
// 	'Java',
// 	'Dart'
// ];					
// courses.length = 10;  // Độ dài mảng là 10 trong khi chỉ có 3 phần tử
// console.log(courses);

// //Trả về index phần tử mảng thật
// for (var index in courses) {
// 	console.log(courses[index]);
// }


// //Cách 2
// var courses = new Array(10);
// courses.push('Java','PHP');
// console.log(courses);
// for (var index in courses) {
// 	console.log(courses[index]);
// }




								// Tự tạo hàm map
// var courses = [
// 	'Dart',
// 	'Java',
// 	'PHP'
// ];	

// Array.prototype.map2 = function(callBack) {
// 	var output = [], arrayLength = this.length;
// 	for (var i = 0; i < arrayLength; i++) {
// 		var result = callBack(this[i], i);
// 		console.log(result);
// 		output.push(result);
// 		// console.log(output);

// 	}
// 	return output;
// };


// courses.map2(function(course, index){
// 	// console.log(index, course);
// });

// var htmls2 = courses.map2(function(course){
// 	return `<h2>${course}</h2>`;
// });
// console.log(htmls2.join(''));



// var htmls = courses.map(function(course){
// 	// console.log(course);
// 	return `<h2>${course}</h2>`;
// })
// console.log(htmls.join(''));




								// Tự tạo hàm ForEach
// var courses = [
// 	{
// 		id: 1,
// 		name: 'Java',
// 		coin: 100
// 	},

// 	{
// 		id: 2,
// 		name: 'PHP',
// 		coin: 500
// 	}

// ];

// var courses = [
// 	'HTML',
// 	'CSS',
// 	'JS'
// ];
// courses.length = 100;


// courses.forEach(function(course, index, array) {
// 	console.log(course, index, array);
// });
			
// 			// Tạo hàm forEach

// Array.prototype.forEach2 = function(callback) {
// 	for (var index in this) {
// 		// console.log(index);					// chạy để xem các phàn tử bao gồm prototype
// 		if (this.hasOwnProperty(index)) {		// Chỉ lấy các phần tử gần nhất,
// 												// bỏ qua các phần tử của prototype
// 			// console.log(index);
// 			callback(this[index], index, this);

// 		}
// 	}
// };

// courses.forEach2(function(course, index, array){
// 	console.log(course, index, array);
// });
							


									// Tự tạo hàm reduce
// var courses = [
// 	{
// 		id: 1,
// 		name: 'Java',
// 		coin: 100
// 	},

// 	{
// 		id: 2,
// 		name: 'PHP',
// 		coin: 500
// 	}

// ];

// var totalCoin = courses.find(function(course,index){
// 	return course.coin === 500;

// });
// 	console.log(totalCoin)


// var total = courses.reduce(function(index, currentvalue){
// 	return index + currentvalue.coin;
// },0);
// console.log(total);


// Array.prototype.reduce2 = function(callback) {
// 	var arrayLength = this.length;
// 	for (var i = 0; i < arrayLength; i++) {
// 		callback(this[i]);
// 		for (var value of this) {
// 			console.log(value);
// 		}
// 	}
// };

// courses.reduce2(function(index, currentvalue){
// 	// console.log(index,currentvalue)
// });


							// Tự tạo hàm filter
// var courses = [
// 	{
// 		name: 'Javascript',
// 		coin: 800
// 	},

// 	{
// 		name: 'PHP',
// 		coin: 500
// 	},

// 	{
// 		name: 'HTML',
// 		coin: 750
// 	}
// ];

// var filterCourses = courses.filter(function(course, index, array){
// 	return course.coin > 700;
// });	
// console.log(filterCourses)	;



// // Tự tạo hàm filter();
// Array.prototype.filter2 = function(callback) {
// 	var output = [];
// 	for (var index in this) {
// 		if (this.hasOwnProperty(index)){
// 			var result = callback(this[index], index, this);
// 			if (result){
// 				output.push(this[index]);
// 			}
// 		}
// 	}
// 	return output;
// };


// var filtercoin = courses.filter2(function(course, index, array){
// 	// console.log(course, index, array)
// 	return course.coin > 700;
// });		
// console.log(filtercoin)



									// Tự tạo hàm some
// var courses = [
// 	{
// 		name: "Dart",
// 		coin: 600,
// 		isFinish: false
// 	},

// 	{
// 		name: 'Javascript',
// 		coin: 800,
// 		isFinish: false
// 	},

// 	{
// 		name: 'PHP',
// 		coin: 900,
// 		isFinish: false
// 	},
// ];

// // var courses = new Array(100);

// var someCourses = courses.some(function(course){
// 	return course.isFinish;
// });	
// console.log(someCourses);


// // Cách 1
// // Array.prototype.some2 = function(callback) {
// // 	for (var index in this) {
// // 		if (this.hasOwnProperty(index)) {
// // 			var result = callback(this[index], index, this);
// // 			if (result === true) {
// // 				return true;

// // 			}	
// // 		}
		
// // 	}
// // 	return false;
// // };	

// // Cách 2 ( Đặt biến ở ngoài)
// Array.prototype.some2 = function(callback) {
// 	var output = false;
// 	for (var index in this) {
// 		if (this.hasOwnProperty(index)) {
// 			var result = callback(this[index], index, this);
// 			if (result === true) {
// 				output = true;
//				 break;
// 			}	
// 		}
		
// 	}
// 	return output;
// };	


// var someCourses = courses.some2(function(course, index){
// 	return course.isFinish;
// });	
// console.log(someCourses)	



								// Tự tạo hàm every			
var courses = [
	{
		name: "Dart",
		coin: 600,
		isFinish: true
	},

	{
		name: 'Javascript',
		coin: 800,
		isFinish: true
	},

	{
		name: 'PHP',
		coin: 900,
		isFinish: true
	},
];

var everyCourses = courses.every(function(course) {
	return course.isFinish;
});	
console.log(everyCourses);


Array.prototype.every2 = function(callback) {
	for (var index in this) {
		if (this.hasOwnProperty(index)) {
			var result = callback(this[index], index, this);
			// if (result === false) ( tương tự như cách dưới)
			if (!result) {
				return false;
			}
		}
	}
	return true;
};		


var everyCourses = courses.every2(function(course) {
	return course.coin > 600;
});	
console.log(everyCourses);	


							// Ý NGHĨA CÁC TỪ VIẾT TẮT
// DOM : Document object model
// API : Application programing interface		


							//  Document

		// 1. Element : ID, CLASS, TAG, CSS SELECTOR, HTML COLLECTION

// var headingNode = document.getElementById('hihi');
// console.log(headingNode);
// var headingNode = document.getElementsByClassName('haha');
// var headingNode = document.getElementsByTagName('h1');
// var headingNode = document.querySelector('className');	Chỉ select được một thẻ đầu tiên có className đó	
// var headingNode = document.querySelectorAll('allClassName'); Select tất cả các thẻ có ClassName tương ứng

		//HTML Collection	
// var HTML Collection = document.forms   Lấy ra tất cả thẻ form theo dạng HTML Collection
// var HTML Collection = document.forms[0]		Lấy element đầu tiên của form
// var HTML Collection = document.forms['form-1']  Lấy element có id = form-1  

// getElementById(): TRẢ VỀ 1 ELEMENT
// getElementsByClassName(): TRẢ VỀ DẠNG HTML COLLECTION() (GIỐNG MẢNG)
// getElementsByTagName(): TRẢ VỀ DẠNG HTML COLLECTION()
// querySelector(): TRẢ VỀ 1 ELEMENT
// querySelectorAll(): TRẢ VỀ DẠNG NODE LIST()  (GIỐNG MẢNG)


		//			Get element methods


// <div type="checkbox" value="1" name="answer"></div>
// <input type="checkbox" value="1" name="answer" />
// <input type="checkbox" value="2" name="answer" checked />
// <input type="checkbox" value="3" name="answer" disabled />
// <input type="checkbox" value="4" name="answer" checked disabled />

// Get checkbox input NodeList lưu vào biến checkboxNodes
// Get checkbox input element có type="checkbox" value="1" lưu vào biến checkbox1Element
// Get checkbox element có attribute checked nhưng không có attribute disabled lưu vào biến checkboxCheckedAndNotDisabled
// Get checkbox element có attribute disabled nhưng không có attribute checked lưu vào biến checkboxDisabledAndNotChecked
// Get checkbox element có attribute checked và disabled lưu vào biến checkboxCheckedAndDisabled


// // Làm bài tập tại đây
// var checkboxNodes = document.querySelectorAll('input[type="checkbox"]');
// var checkbox1Element = document.querySelector('input[type="checkbox"][value="1"]');
// var checkboxCheckedAndNotDisabled = document.querySelector('input[type="checkbox"]:checked:not(:disabled)');
// var checkboxDisabledAndNotChecked = document.querySelector('input[type="checkbox"]:disabled:not(:checked)');
// var checkboxCheckedAndDisabled = document.querySelector('input[type="checkbox"]:checked:disabled')



// <ul class="parent">
//     <li>"Cày" JS DOM tại F8</li>
//     <li>"Cày" JS DOM tại F8</li>

//     <ul>
//         <li>"Cày" JS DOM tại F8</li>
//         <li>"Cày" JS DOM tại F8</li>

//         <ul>
//             <li>"Cày" JS DOM tại F8</li>
//             <li>"Cày" JS DOM tại F8</li>
//         </ul>
//     </ul>
// </ul>

// Get list elements li là con trực tiếp của ul thứ nhất và lưu vào biến listItems1
// Get list elements li là con trực tiếp của ul thứ hai và lưu vào biến listItems2
// Get list elements li là con trực tiếp của ul thứ nhất và ul thứ hai sau đó lưu vào biến listItems3


// // Làm bài tập tại đây
// var listItems1 = document.querySelectorAll('.parent > li');
// var listItems2 = document.querySelectorAll('.parent > ul > li');
// var listItems3 = document.querySelectorAll('.parent > li, .parent > ul > li');



// <h1>Học lập trình tại F8</h1>

// <section>
//     <h2>Học JS HTML DOM</h2>
// </section>

// <div>
//     <h3>Làm bài tập ngay trên F8</h3>
// </div>

// Lấy h1 element và lưu vào biến h1Element
// Lấy h2 element và lưu vào biến h2Element
// Lấy h3 element và lưu vào biến h3Element

// // Làm bài tập tại đây
// var h1Element = document.getElementsByTagName('h1')[0];
// var h2Element = document.getElementsByTagName('h2')[0];
// var h3Element = document.getElementsByTagName('h3')[0];



								// DOM ATTRIBUTE
// <html>
// 	<body>
// 		<h1>Hihi</h1>



// 	</body>
// </html>

// 									// Thêm Attribute vào element
// Cách 1 : Chỉ thêm được những Attribute hợp lệ vào Element

// var headingElement = document.querySelector('h1');
// headingElement.title = 'Heading';	Dùng để thêm 1 Attribute hợp lệ
// headingElement.href = 'Heading';	Ko được vì href ko phải là Attribute của h1

								// Thêm Class
// headingElement.className = 'Hihi';

									

// Cách 2 : Thêm được bất cứ Attribute nào vào element

// var headingElement = document.querySelector('h1');
// headingElement.setAttribute('title', 'Heading');		
// headingElement.setAttribute('href', 'Heading');		Thêm Attribute bất kì vào h1

								// Thêm Class
// headingElement.setAttribute('class','Hihi');


// 									// Lấy ra Attribute
// Cách 1 : Lấy Attribute hợp lệ
// var headingElement = document.querySelector('h1');
// console.log(headingElement.title);


// Cách 2 : Lấy bất kì Attribute nào
// var headingElement = document.querySelector('h1');
// headingElement.getAttribute('title');



// 									// DOM TEXT NODE
// Điểm chung: Cả 2 giá trị này đều sẽ bỏ qua các thẻ khác (meta, style, html, body..)
// và chỉ lấy nội dung bên trong thẻ đó quy ra TextNode ( dưới dạng text)



// 1. innerText	( Hiển thị những gì user nhìn thấy được
// 					Là thuộc tính của Element Node
					// Phải thông qua element node thì mới sử dụng đc)


// <html>
// 	<body>
// 		<h1 class="heading">Hihi
		// 	<style>
		// 		.box {
		// 			width: 100px;
		// 			height: 100px;
		// 		}

		// 	</style>
		// </h1>



// 	</body>
// </html>

// var headingNode = document.querySelector('.heading');
// headingNode.innerText = 'Heading Text';
// 	Sẽ không hiển thị .box


// 2. textContent      (Là thuộc tính của Element Node và Text Node
							// nên có thể lấy từ text node hoặc element node)
// headingNode.textContent = 'Heading Text';
// 	Hiển thị tất cả những gì được ghi, kể cả những dòng code CSS
// 	VD như trên thì nó sẽ hiển thị ra :

// 	.box {
// 		width: 100px;
// 		height: 100px;
// 	}



									// Thêm 1 element vào 1 element
// 1. innerHTML		(Thêm element, attribute, text node vào trang web)
					// Ghi giá trị nằm trong thẻ được gọi từ .innerHTML)
// VD: 		
// <html>
// 	<body>
// 		<h1 class="heading">Hihi
			// <h2>HIHI</h2>
 
//		</h1>



// 	</body>
// </html>			

// var headingNode = document.querySelector('.heading');
// headingNode.innerHTML = '<h2>Ahihi</h2>';
// Giá trị h2 được thêm vào sẽ đè lên giá trị của h2




// 2. outerHTML		(Ghi giá trị tính từ biến gọi .outerHTML)
// headingNode.outerHTML = '<h2>Heading 2</h2>';
// Gía trị h2 được thêm vào sẽ đè lên giá trị h1	

var a = document.querySelector('.app');
console.log(a.style);	

					// DOM CSS  ( THUỘC TÍNH CỦA ELEMENT NODE)
// <html>
// 	<body>
// 		<h1 class="heading">Hihi
			// <h2>HIHI</h2>
 
//		</h1>
// 		<div class="box"></div>


// // 	</body>
// // </html>	

// var boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.backgroundColor = 'red';

// Cách rút gọn: Sẽ tạo ra CSS inline

// Object.assign(boxElement.style, {
// 	width: '200px',
// 	backgroundColor: 'blue'
// });

// console.log(boxElement.style.width)	; Lấy ra giá trị thuộc tisnh Css: width					



				// CLASSLIST PROPERTY ( THUỘC TÍNH CỦA ELEMENT NODE)

// add
// contains
// remove
// toggle

// <html>
// 	<body>
// 		<h1 class="heading">Hihi
			// <h2>HIHI</h2>
 
//		</h1>
// 		<div class="box"></div>

		// <style>
		// 	.red {
		// 		color: red;
		// 	}


		// 	.blue {
		// 		color: blue;
		// 	}
		// </style>
// // 	</body>
// // </html>	

// var boxElement = document.querySelector('.box');

// 1. Add
// boxElement.classList.add('red')
// boxElement.classList.add('red', 'blue')	// Thêm 2 class vào

// 2. Contains
// console.log(boxElement.classList.contains('red'))	
//	Kiểm tra xem có chứa class red hay ko..kết quả trả về true false

// 3. remove
// console.log(boxElement.classList.remove('red'));
// 	Xóa class red

// 4.Toggle
// console.log(boxElement.classList.toggle('red'));
// 	Thêm hoặc xóa class red tùy trường hợp
// 	Nếu element đang có class thì sẽ xóa class và ngược lại


						// DOM EVENTS

// 1. Attribute events
// Viết thẳng trong file HTML (Inline)	
// VD: <h1 onclick= "console.log(Math.random())">DOM EVENTS</h1>					
// VD: <h1 onclick= "console.log(this)">DOM EVENTS</h1>	
// Trả về this tức là Element node của h1	
// Ngoài onclick còn có nhiều lệnh khác, tham khảo DOM EVENTS


// Sự kiện nổi bọt :
// VD: 		<h1 onclick= "console.log(this)">DOM EVENTS
		// 		<span onclick="console.log(this)">DOM EVENTS</span>
		//  </h1>	
// Khi click vào thẻ span vẫn sẽ hiện ra nội dung của Element node của h1
// vì h1 là cha của thẻ span
// Nguyên tắc hoạt động của DOM EVENTS : 
// Nó sẽ thực hiện hành động của thẻ span trước rồi 
// thực hiện hành động của tất cả thẻ cha bên ngoài


// Cách hay dùng:
// 2.Assign event using the element node  ( Viết trong file JS)
				// Get element node
// var h1Element = document.querySelector('h1');

// h1Element.onclick = function() {
// 	console.log(Math.random());
// }					

// var a = document.querySelectorAll('.home-filter__btn');
// a.onmouseover = function() {
// 	console.log(Math.random());
// }


// a.onclick = function(e) {
// 	console.log(e)
// }
// Chạy để thấy được các hàm Mouse Even ( e ) ta có thể sử dụng


// Input / select

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e) {	// Khi có sự thay đổi thì chạy hàm
// 	console.log(e.target.value);
// }


// Input : checkbox
// var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function(e) {
// 	console.log(e.target.checked)	// Trả về true nếu box được check và ngc lại
// }



// onchange: Thực thi khi giá trị sau khác giá trị trước đó



// inputElement.oninput = function(e) {	// Khi có sự thay đổi thì chạy hàm
// 	console.log(e.target.value);
// }

// oninput: Chỉ cần nhập giá trị là sẽ được thực thi,
// ko quan trọng giá trị trước giống hay khác giá trị sau





// Keyup / Keydown
// VD dùng để phát hiện ra nút bấm trên bàn phím
// sau đó gán lệnh cho nút dùng để làm việc gì đó

// document.onkeyup = function(e) {
// 	console.log(e.which);
// 	switch(e.which) {
// 		case 27: // Nút ESC
// 			console.log('EXIT');
// 			break;
// 		case 13: // Nút Enter
// 			console.log('Send Chat');
// 			break;
// 	}
// }


				// DOM EVENT -- preventDefault, stopPropagation
VD :
<html>
	<body>

		<a href="https://f8.edu.vn">Học lập trình</a>

		<br />

		<a href="https://google.com">Tìm kiếm</a>

	</body>
</html>				

var boxLinks = document.links;
for (var i = 0, i < boxLinks.length, ++i) {
	boxLinks[i].onclick = function(e) {
		console.log(e.target.href);		// Hiển thị link trang web khi click
	}
}

1. preventDefault ( Ngăn chặn hành vi mặc định)
for (var i = 0, i < boxLinks.length, ++i) {
	boxLinks[i].onclick = function(e) {
		if (!e.target.href.startsWith('https://f8.edu.vn')) {
			e.preventDefault();

		// Khi trang web ko bắt đầu với https://f8.edu.vn thì
		// sẽ ngăn chặn việc truy cập tới trang web của thẻ a
		// trong trường hợp này click vào trang google thì sẽ
		// ko load trang
		}
	}
}


2. stopPropagation ( Dừng hiện tượng nổi bọt)
<html>
	<body>
		<div>
			DIV
			<button>Click Me</button>
		</div>

	</body>
</html>

document.querySelector('div').onclick = function(e) {
	console.log('div');
}


document.querySelector('button').onclick = function(e) {
	e.stopPropagation();
	console.log('click me');
}




						// setTimeout and clearTimeout

// <html>
// 	<body>

// 		<button>Press It</button>

// 	</body>

// </html>


// var myFunc = document.querySelector('button').onclick = function() {
// 	arlert('Hello');
// }

// setTimeout(myFunc, 1000);  Gọi function sau 1s
// clearTimeout(myFunc);		Dừng việc gọi function
// setInterval(myFunc, 1000)	Lặp lại function sau 1s và cứ lặp lại sau 1s



					// Ajax

// 1.  XMLHttpRequest		Trao đổi dữ liệu với web - sever
// 						mà ko cần phải reload page
// var = new new XMLHttpRequest();

// // Kiểm tra với các trình duyệt cũ
// if (window.XMLHttpRequest) {
//    // code for modern browsers
//    xmlhttp = new XMLHttpRequest();
//  } else {
//    // code for old IE browsers
//    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }	


// 2. open() and send()		Dùng để gửi yêu cầu đến sever


// 				// GET
// xhttp.open("GET", "ajax_info.txt", true);
// xhttp.send();	


// 				// POST
// xhttp.open("POST", "ajax_info.txt", true);
// xhttp.send();


							// The onreadystatechange Property

// Là 1 hàm sẽ được thực thi sau khi
 // hàm XMLHttpRequest nhận được phản hồi	

 // <html>
 // 	<body>

 // 		<button type="button" onclick="loadDoc()"></button>

 // 	</body>
 // </html>

 // function loadDoc() {
 // 	var xhttp = new XMLHttpRequest();
 // 	xhttp.onreadystatechange = function() {
 // 		if (this.readyState == 4 && this.status == 200) {
 // 			document.querySelector()....
 // 		}
 // 	}

 // }		


 							// JSON
// 1.Kiểu dữ liệu:

// 	1 A String
// 	2 A Number
// 	3 An Object
// 	4 An Array
// 	5 A Boolean
// 	6 Null

// Ko thể là : a function
// 			a date
// 			undefined

// Cách đặt biến:
// var myOj = {

// 	"name" : "Phong",		// Chỉ được dùng dấu ""
// 	"age" : 18,
// }

// var myArray = [
// 	"java",
// 	"PHP",
// ]

// var myArray2 = {
// 	"languages" : ["PHP", "Java", "Dart"]
// }


// Khi viết dạng chuỗi phải có dấu ""
// "name" : "Phong"	// Không được sử dụng dấu '' cho string



							// JSON PARSE

// Convert text into Javascript Object
// Dùng để trao đổi data từ web - sever và đến web - sever
// Khi nhận data từ web - sever , data luôn có dạng String
// Hàm parse dùng để chuyển data từ dạng text sang Object


// VD : receive a text from web - sever
// '{"name":"Phong","age":23,"email":"hahaha@gmail.com"}'

// // Parsing Json
// var text = '{"name":"Phong","age":23,"email":"hahaha@gmail.com"}';
// var myObject = JSON.parse(text);
// document.querySelector().innerHTML = myObject.name + "," + myObject.age




							//JSON Stringify

// Convert a Javascript object into a String

// var MyObj = {

// 	name: "Phong",
// 	phone: 1147147147,
// 	address: 'q4',
// }	

// var myJson = JSON.stringify(MyObj);	// Chuyển từ Object sang String


// var myArray = [
// 	'PHP',
// 	'Java'
// ]	

// var myJson2 = JSON.Stringify(myArray);	// Chuyển từ array sang String				



							// Biến kiểu let và var
// x = 2;
// {

// 	var x = 10;
// }
// 	x = 10;
// // Code trong dấu {} được gọi là Block	
// // Biến var sẽ có tác dụng ở ngoài dấu {}					


// x = 2;
// {
// 	let x = 10;
// }
// x = 2;
// // Biến let ko ảnh hưởng đến các biến bên ngoài {}

// Trong vòng lặp:
// Sử dụng var:
// var i = 5;
// for (var i = 0; i < 10; i++) {
//   // một số câu lệnh 
// }
// // ở đây i là 10

// Sử dụng let:
// let i = 5;
// for (let i = 0; i < 10; i++) {
//   // một số câu lệnh
// }
// // Ở đây i vẫn là 5


// Function Scope:
// Cả 2 biến let và var như nhau khi khai báo trong 1 hàm:

// function myFunction() {
//   var carName = "Volvo";   // Function Scope
// }

// function myFunction() {
//   let carName = "Volvo";   // Function Scope
// }


// Global Scope:

// let x = 4;
// var x = 4;
// Biến được khai báo với var và let là 
// tương tự nhau khi được khai báo bên ngoài một block.



// Biến Global trong HTML

// Với JavaScript, phạm vi toàn cục là môi trường JavaScript.

// Trong HTML, phạm vi toàn cục là đối tượng window.

// Biến global được xác định bằng từ khóa var thuộc về đối tượng window.
// Vd:
// var carName = "Volvo";

// // code ở đây có thể sử dụng window.carName

// document.getElementById("demo").innerHTML = "I can display " + window.carName;//I can display Volvo


// Biến global được xác định bằng từ khóa
//  let không thuộc về đối tượng window.
//  Vd:
//  let carName = "Volvo";

// // code ở đây có thể sử dụng window.carName

// document.getElementById("demo").innerHTML = "I can not display " + window.carName;//I can not display underfined


								
// 						Redeclaring (khai báo trùng lặp )
// Redeclaring một biến JavaScript với var
//  là được phép ở bất cứ đâu trong chương trình:
//  VD:
//  var x = 2;

// // Now x is 2
 
// var x = 3;

// // Now x is 3


// Redeclaring một biến kiểu var với let, trong cùng phạm vi, 
// hoặc cùng block, là KHÔNG được phép:
// Vd:
// var x = 2;       // Allowed
// let x = 3;       // Not allowed

// {
//   var x = 4;   // Allowed
//   let x = 5   // Not allowed
// }


// Redeclaring một biến kiểu let với let, trong cùng phạm vi, 
// hoặc cùng block, là KHÔNG được phép:
// Vd:
// let x = 2;       // Allowed
// let x = 3;       // Not allowed

// {
//   let x = 4;   // Allowed
//   let x = 5;   // Not allowed
// }


// Redeclaring một biến kiểu let với var, trong cùng phạm vi, 
// hoặc cùng block, là KHÔNG được phép:
// Vd:
// let x = 2;       // Allowed
// var x = 3;       // Not allowed

// {
//   let x = 4;   // Allowed
//   var x = 5;   // Not allowed
// }


// Redeclaring một biến với let, trong một phạm vi khác, 
// hoặc một block khác, là được phép:	
// Vd:
// let x = 2;       // Allowed

// {
//   let x = 3;   // Allowed
// }

// {
//   let x = 4;   // Allowed
// }


// 					// Hoisting
// Hoisting

// Biến kiểu var sẽ bị hoisting và có thể được khởi tạo bất cứ lúc nào.

// Hoisting là cách javascript kéo tất cả các khai báo biến 
// lên trên scope hiện tại.
// Vd:
// console.log(carName);//not error,in ra underfined
// var carName = "Volvo";

// Sau khi hoisting đoạn code trên được viết lại như sau:
// var carName;          //khai báo được kéo lên trên cùng của scope này
// console.log(carName); //not error, in ra undefined 
// carName = "Volvo";


// Biến kiểu let sẽ bị hoisting nhưng không được khởi tạo.
// console.log(carName);// Error: không thể truy cập 'carName' trước khi khởi tạo 
// let carName = "Vinfast";