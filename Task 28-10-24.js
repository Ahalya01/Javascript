//Question-01
let Numbers=[2, 4, 6, 8, 10];
let ReducedNumber=Numbers.reduce((x,y)=>x+y);
console.log("The Total Sum Of Array Using Reduce Method:",ReducedNumber)
//Question-02
let Num=[1, 3, 5, 7];
let Reducednumber=Num.reduce((x,y)=>x*y);
console.log("The Total Sum Of Array Using Reduce Method:",Reducednumber)
//Question-03
const words = ['apple', 'banana', 'cherry'];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log("The New Array With UpperCase:",uppercaseWords); 
//Question-04
let Nums=[1, 2, 3, 4, 5];
let mutiplenumbers=Nums.map(x=>x*10);
console.log("Array Numbers multiplied by 10:",mutiplenumbers);
//Question-05
const people = [
    { name: 'John', age: 25 },
    { name: 'Sarah', age: 30 },
    { name: 'Mike', age: 35 }
  ];
  let Ages=people.map(x=>x.age);
  console.log("Ages of the People:",Ages);
  //Question-06
  let fruits=['apple', 'banana', 'cherry'];
  fruits.forEach((Element)=>console.log(Element))
  //Question-07
const numbers = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenCount++;
  }
});

console.log("Count of even numbers:", evenCount);

   