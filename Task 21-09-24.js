// **********TASK-1***********
// Define the two strings
let str1 = "   Hello";
let str2 = "World   ";

// Remove spaces from the start and end of both strings
let trimmedStr1 = str1.trimStart();
let trimmedStr2 = str2.trimEnd();

// Concatenate the strings
let result = trimmedStr1.concat(trimmedStr2);

// Convert the concatenated string to uppercase
let upperCaseResult = result.toUpperCase();

console.log(upperCaseResult);  // Output: HELLOWORLD
// **********TASK-2***********
// Define the string
let str3 = "LearningJavaScriptIsFun";

// Extract a middle portion of the string (let's take from index 9 to 18)
let middlePortion = str3.substring(9, 18); // Extracts "JavaScrip"

// Get the last index of the extracted portion
let lastIndexOfExtracted = middlePortion.length - 1;

// Convert the middle portion to lowercase
let lowerCaseMiddle = middlePortion.toLowerCase();

// Output results
console.log("Extracted Middle Portion:", middlePortion);  // Output: JavaScrip
console.log("Last Index of Extracted Portion:", lastIndexOfExtracted); // Output: 8
console.log("Lowercase Middle Portion:", lowerCaseMiddle);  // Output: javascript

// **********TASK-3***********
// Step 1: Define a single character and a string
let singleChar = 'a';
let str4 = "learningJavaScript";

// Step 2: Concatenate the string to the single character
let combinedString = singleChar.concat(str4);

// Step 3: Convert the concatenated string to uppercase
let upperCaseString = combinedString.toUpperCase();

// Step 4: Extract the second last character of the uppercase string
let secondLastChar = upperCaseString.charAt(upperCaseString.length - 2);

// Output results
console.log("Concatenated String in Uppercase:", upperCaseString);  // Output: ALEARNINGJAVASCRIPT
console.log("Second Last Character:", secondLastChar);  // Output: P

// **********TASK-4***********
// Step 1: Define two strings
let str5 = "JavaScript";
let str6 = "Programming";

// Step 2: Extract the first 3 characters of the first string
let firstThreeChars = str5.substring(0, 3); // "Jav"

// Step 3: Extract the last 3 characters of the second string
let lastThreeChars = str6.slice(-3); // "ing"

// Step 4: Concatenate the two results
let combinedStrings = firstThreeChars.concat(lastThreeChars); // "Javing"

// Step 5: Convert the combined string to uppercase
let results = combinedStrings.toUpperCase(); // "JAVING"

// Output the final result
console.log("Final Result:", results);  // Output: "JAVING"

// **********TASK-5***********
// Given string with extra spaces
let originalString = "   hello world   ";

// Step 1: Trim the string
let trimmedString = originalString.trim(); // "hello world"

// Step 2: Make the first and last characters uppercase
let firstChar = trimmedString.charAt(0).toUpperCase();
let lastChar = trimmedString.charAt(trimmedString.length - 1).toUpperCase();
let modifiedString = firstChar + trimmedString.slice(1, -1) + lastChar; // "Hello worlD"

// Step 3: Extract a specific part of the string (e.g., first 5 characters)
let extractedPart = modifiedString.substring(0, 5); // "Hello"

// Step 4: Concatenate it with another string
let anotherString = " - This is my world.";
let finalResult = extractedPart.concat(anotherString); // "Hello - This is a test."

// Output the final result
console.log("Final Result:", finalResult); // Output: "Hello - This is a test."

// **********TASK-6***********
// Given sentence
let sentence = "hello there, how are you";

// Find the index of the word "are"
let indexOfAre = sentence.indexOf("are");

// Output the result
console.log("Index of 'are':", indexOfAre); // Output: Index of 'are': 18

