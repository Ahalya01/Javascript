
// Define the two strings
let str1 = "   Hello";
let str2 = "World   ";

// Remove spaces from the start and end of both strings
let trimmedStr1 = str1.trimStart();
let trimmedStr2 = str2.trimEnd();

// Concatenate the strings
let result = trimmedStr1.concat(trimmedStr2);
console.log(result);
// Convert the concatenated string to uppercase
let upperCaseResult = result.toUpperCase();
console.log(upperCaseResult);  // Output: HELLOWORLD