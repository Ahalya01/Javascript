// Define the string
let str = "LearningJavaScriptIsFun";

// Extract a middle portion of the string (let's take from index 9 to 18)
let middlePortion = str.substring(8, 18); 

// Get the last index of the extracted portion
let lastIndexOfExtracted = middlePortion.length-1;

// Convert the middle portion to lowercase
let lowerCaseMiddle = middlePortion.toLowerCase();

// Output results
console.log("Actuall String:",str);
console.log("Extracted Middle Portion:", middlePortion);  
console.log("Last Index of Extracted Portion:", lastIndexOfExtracted); 
console.log("Lowercase Middle Portion:", lowerCaseMiddle);  