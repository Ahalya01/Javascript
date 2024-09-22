// Step 1: Define two strings
let str1 = "JavaScript";
let str2 = "Programming";

// Step 2: Extract the first 3 characters of the first string
let firstThreeChars = str1.slice(0, 3); // "Jav"

// Step 3: Extract the last 3 characters of the second string
let lastThreeChars = str2.slice(-3); // "ing"

// Step 4: Concatenate the two results
let combinedStrings = firstThreeChars.concat(lastThreeChars); // "Javing"

// Step 5: Convert the combined string to uppercase
let results = combinedStrings.toUpperCase(); // "JAVING"

// Output the final result
console.log("first 3 characters of 1st string:",str1);
console.log("last 3 characters of 2st string:",str2);
console.log("combined both extracted string:",combinedStrings)
console.log("Final Result:", results);  // Output: "JAVING"