//QUESTION-01
let array = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
let reversedArray = array.reverse();
console.log("******QUESTION-01*****")
console.log("THE REVERSED ARRAY:",reversedArray);
//QUESTION-02
let str = "vamsi";
let str1 = "Ahalya";
let reversedStr = str.split('').reverse().join('');
let reversedStr1 = str1.split('').reverse().join('');
console.log("******QUESTION-02*****");
console.log("THE REVERSED STRING:",reversedStr);
console.log("THE REVERSED STRING:",reversedStr1);
//QUESTION-03
let array1 = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
let age;
for (let element of array) {
  if (typeof element === 'object' && 'age' in element) {
    age = element.age;
  }
}
console.log("******QUESTION-03******");
console.log("Age:",age);
