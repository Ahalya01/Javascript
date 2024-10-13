// Using var
var x = 10; //global scoped
if (true) {
    var x = 20; // Same variable, reassigns the outer 'x'
    console.log(x); // 20
}
console.log(x); // 20

// Using let
let y = 10; //global scoped
if (true) {
    let y = 20; // Different variable, block scoped
    console.log(y); // 20
}
console.log(y); // 10

// Using const
const z = 10;
if (true) {
    const z = 20; // Different variable, block scoped
    console.log(z); // 20
}
console.log(z); // 10
//functional scope
function Add() {
    var a = 10; //  function-scoped
    console.log(a); // Accessible here
}
Add(); 
// console.log(a); // Error: a is not defined
//local scope
if (true) {
    var localVarWithVar = 10; // Function-scoped (or globally scoped)
    let localVarWithLet = 20; // Locally scoped to this if block
    console.log(localVarWithVar); // Output: 10
    console.log(localVarWithLet); // Output: 20
}
console.log(localVarWithVar); // Output: 10
// console.log(localVarWithLet); // Error: localVarWithLet is not defined
//local scope
for (let i = 0; i < 3; i++) {
    let loopVar = "I am local"; // Locally scoped
    console.log(loopVar); // Output: "I am local "
}
// console.log(loopVar); // Error: loopVar is not defined
//Hoisting
// console.log(myVar); // Output: undefined (hoisted)
var myVar = 10;
console.log(myVar); // Output: 10
