// ****variables****

// 1. Automically

X=5;
Y=8;
// 2.using var

var a;//declaration
a=100;//intalization
var a=100;//both D & I
console.log(a)

// 2.1 Redeclaring of values
var b=50;
var b=206;
console.log(b); //206

// 2.2 Reassigning the values
var c = 5;
c = 15; 
console.log(y); //15

//2.3 Hoisting 
console.log(z);  // undefined due to hoisting
var z = 30;
console.log(z);  // 30

//use a variable when declaring other variables.
var d= 100;
var e = x + 102;
console.log(e)//202
//declare multiple variables in single var 
var f=7,g=20;

//***** DATA TYPES *****/

// 1.primitive data types
// 1.1 NUMBERS
var num = 42;
console.log(num);  // 42
// 1.2  STRING
var str = "Hello, World!";
console.log(str);  // "Hello, World!"
// 1.3 BOOLEAN
var isTrue = true;
console.log(isTrue);  // true
//1.4 UNDEFINED
var h;
console.log(h);  // undefined (since `x` is declared but not initialized)
//1.5NULL
var i= null;
console.log(i);  // null
//1.6 BigInt
var bigInt = 12345678901234567890n;
console.log(bigInt);  // 12345678901234567890n

//2.NON-PRIMITIVE DATA TYPES
//2.1 ARRAY
var arr = [1, 2, 3];
console.log(arr);  // [1, 2, 3]
// Modifying array
arr.push(4);
console.log(arr);  // [1, 2, 3, 4]

//2.2 OBJECT
var person = { name: "Alice", age: 25 };
console.log(person);  // { name: 'Alice', age: 25 }
//2.2.1 Reassigning object properties
person.age = 30;
console.log(person.age);  // 30





