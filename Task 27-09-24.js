//QUESTION 01
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log("******QUESTION-1******")
console.log(" Adding of fruit:",fruits); 
//QUESTION 02
fruits.pop("grape");
console.log("*****QUESTION-2*****")
console.log("Removing of fruit:",fruits); 
//QUESTION 03
fruits.unshift("cherry");
console.log("*****QUESTION-3*****")
console.log("Added element at first:",fruits); 
//QUESTION 04
fruits.shift();
console.log("*****QUESTION-4*****")
console.log("Removing first element:",fruits); 
//QUESTION 05
fruits.reverse();
console.log("*****QUESTION-5*****")
console.log("Reverse order element:",fruits); 
//QUESTION 06
console.log("*****QUESTION-6*****")
console.log("Index of  element:",fruits.indexOf("banana")); 
//QUESTION 07
const valuetocheck = fruits.includes("banana");
console.log("*****QUESTION-7*****")
console.log("value exists in array:",valuetocheck);
//QUESTION 08
const numbers = [5, 2, 8, 1, 4];
numbers.sort((a, b) => a - b);
console.log("*****QUESTION-8*****")
console.log("sorted array:",fruits.sort());
console.log("sorted in ascending order:",numbers);
//QUESTION 09
const fruitString = fruits.join(', ');
console.log("*****QUESTION-9*****")
console.log("Seperated by commmas:",fruitString); 
//Multiple Array Methods:
console.log("-----###Multiple Array Methods###---");
//QUESTION-01
let myArray = [1, 2, 3, 4];
myArray.push(5);
console.log("*****QUESTION-1*****")
console.log("Array after adding an element:", myArray);
myArray.shift();
console.log("Array after removing the first element:", myArray);
//QUESTON-02
let snippet = ['a', 'b', 'c', 'd', 'e'];
let reversedArray = snippet.reverse();
console.log("*****QUESTION-2*****")
console.log("Reversed Array:", reversedArray);
let joinedString = reversedArray.join(', '); 
console.log("Joined String:", joinedString);
//QUESTION-03
let num = [5, 2, 8, 1, 4];
num.sort((a, b) => a - b);
console.log("*****QUESTION-3*****")
console.log("Sorted Array:", num);
num.pop();
console.log("Array after removing the last element:", num);
//QUESTION-04
let arr = [3, 4, 5];
arr.unshift(1, 2);
console.log("*****QUESTION-4*****")
console.log("Array after adding elements at the beginning:", arr);
arr.shift();
console.log("Array after removing the first element:", arr);
let arrayLength = arr.length;
console.log("Length of the array:", arrayLength);
//QUESTION -05
let array1 = [5, 3, 8];
let array2 = [1, 4, 2];
let combinedArray = array1.concat(array2);
console.log("*****QUESTION-5*****")
console.log("Combined Array:", combinedArray);
combinedArray.sort((a, b) => a - b);
console.log("Sorted Combined Array:", combinedArray);
combinedArray.pop();
console.log("Array after removing the last element:", combinedArray);


