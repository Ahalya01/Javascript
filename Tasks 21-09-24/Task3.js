// Step 1: Define a single character and a string
let singleChar = 'a';
let str = "learningJavaScript";

// Step 2: Concatenate the string to the single character
let combinedString = singleChar.concat(str);

// Step 3: Convert the concatenated string to uppercase
let upperCaseString = combinedString.toUpperCase();

// Step 4: Extract the second last character of the uppercase string
let secondLastChar = upperCaseString.charAt(upperCaseString.length - 2);

// Output results
console.log("single character:",singleChar);
console.log("string:",str);
console.log("single char and string:",combinedString);
console.log("Concatenated String in Uppercase:", upperCaseString); 
console.log("Second Last Character:", secondLastChar);  