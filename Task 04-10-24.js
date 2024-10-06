// Addition
function add(a, b) {
    return a + b;
}
console.log("******QUESTION-01*****")
console.log("Addition:", add(5, 1));

// Subtraction
function subtract(a, b) {
    return a - b;
}
console.log("******QUESTION-02*****")
console.log("Subtraction:", subtract(5, 3));

// Multiply
function multiply(a, b) {  
    return a * b;
}
console.log("******QUESTION-03*****")
console.log("Multiply:", multiply(5, 3));

// Division
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
console.log("******QUESTION-04*****")
console.log("Division:", divide(10, 3));
