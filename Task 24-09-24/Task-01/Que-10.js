const employee = {
    name: "Nani",
    position: " Software Developer",
    salary: 60000
};
console.log("Employee Details before seal:",employee);
Object.seal(employee);
employee.position = "Senior Software Developer";  // This is allowed in a sealed object
employee.department = "IT";  // (the property will not be added)
console.log("Employee Details after seal:",employee);  
const keys = Object.keys(employee);
console.log("all keys values in employee object:",keys); 
