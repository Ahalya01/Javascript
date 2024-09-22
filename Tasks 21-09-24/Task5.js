// Given string with extra spaces
let originalString = "   hello world   ";

// Step 1: Trim the string
let trimmedString = originalString.trim(); 

// Step 2: Make the first and last characters uppercase
let firstChar = trimmedString.charAt(0).toUpperCase();
let lastChar = trimmedString.charAt(trimmedString.length - 1).toUpperCase();
// Use concat to create the modified string
let middleString = trimmedString.slice(1, -1); // "ello worl"
let modifiedString = firstChar.concat(middleString, lastChar); 

// Step 3: Extract a specific part of the string 
let extractedPart = modifiedString.substring(0, 5); 

// Step 4: Concatenate it with another string
let anotherString = " - This is my world.";
let finalResult = extractedPart.concat(anotherString); 

// Output the final result
console.log("original string:",originalString);
console.log("trimmed string:",trimmedString);
console.log("capital first char:",firstChar);
console.log("capital last char:",lastChar);
console.log("Modified string",modifiedString)
console.log("Final Result:", finalResult); // Output: "Hello - This is a test."