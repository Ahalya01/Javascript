// *******VARIABLES USING LET AND CONST******
// 1.LET
// 1.1 LET DECLARATION AND INTALIZATION
let age;                  //declaration
age=22;                   //intialization
let name="Ahalya";        //both 
console.log(age);
//1.2 REASSIGNMENT OF  VALUES
let x = 10;
x = 20; // Reassigning
console.log(x); // 20
//1.3 BLOCK-SCOPE
if (true) {
    let y = 50; // Block-scoped
    console.log(y); // 50
  }
//   console.log(y); // Error: y is not defined (since y is scoped within the block)
//HOISTING
// console.log(z); // Error: Cannot access 'z' before initialization
let z = 100;
console.log(z); 
//NO DECLARATION(we cannot declare let variable in same scope)
let c = 10;
// let c = 20; // Error: Identifier 'a' has already been declared

//****const variable****
const PI = 3.14159;
//reassignment
const age1 = 25;
// age = 30; // Error: Assignment to constant variable.
//redeclare
const name1 = "Alice";
// const name = "Bob"; // Error: Identifier 'name' has already been declared
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");