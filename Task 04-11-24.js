
//QUESTION-01
function limitWithinRange(num, min, max) {
    let limitedMax = Math.min(num, max);
    let limitedMin = Math.max(limitedMax, min);
    return limitedMin;
}
console.log(limitWithinRange(1, 1, 10)); 
console.log(limitWithinRange(15, 1, 10)); 
//QUESTION-02
let randomNumber = Math.floor(Math.random() * 5) + 5;
console.log(randomNumber); // Generating a random integer between 5 and 9
//QUESTION-03
  function roundIfFractional(num) {
    return num === Math.floor(num) ? num : Math.ceil(num);
  }
  console.log(roundIfFractional(5.1)); 
  console.log(roundIfFractional(5.0)); 
//QUESTION-04
  const numbers=[10, 20, 30, 40];
  const [a, b] = numbers;
  console.log(a); 
  console.log(b); 
//QUESTION-05
  const details={ name: "Alice", age: 25, city: "New York" };
  const { name, age } = details;
  console.log(name); 
  console.log(age); 
  
//QUESTION-06
  const Obj= {
    Person:
    { name: "Eve", address:
         { city: "Paris" }
     }
}
  console.log(Obj.Person.address.city);
//QUESTION-07
let array1=[1, 2, 3];
let array2=[4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); 
//QUESTION-08
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4));
  console.log(sum(5, 10, 15));  
//QUESTION-09
const original = { name: "John", age: 30 };
const clonedWithCity = { ...original, city: "New York" };
console.log(clonedWithCity); 