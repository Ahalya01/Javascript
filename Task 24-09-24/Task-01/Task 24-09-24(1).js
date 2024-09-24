//QUESTION-01
console.log("********QUESTION-01**********");
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    specs: {
        color: "Red",
        transmission: "Automatic"
    }
};
Object.freeze(car);
car.model = "Camry";  // This will not work
car.owner = "Alice";  // This will not work
delete car.year;  // This will not work
console.log(car);  
car.specs.color = "Blue";  // This will work because the 'specs' object is not frozen
console.log(car.specs.color);  
//QUESTION-02
console.log("********QUESTION-02**********");
const user = {
    name: "Nani",
    age: 25,
    email: "Nani1234@gmail.com"
};
console.log("User Details:",user)
console.log("Is user object frozen?:", Object.isFrozen(user));
Object.freeze(user);
console.log("Is user object frozen now?:", Object.isFrozen(user));  
//QUESTION-03
console.log("********QUESTION-03**********");
const product = {
    name: "Laptop",
    category: "Electronics",
    price: 1500
};
console.log("product Details:",product)
console.log("Is Product Object sealed?:",Object.isSealed(product)); 
Object.seal(product);
product.price=18000;
console.log("Is Product Object sealed?:",Object.isSealed(product)); 
//QUESTION-04
console.log("********QUESTION-04**********");
const laptop = {
    brand: "Dell",
    model: "XPS 13",
    price: 1200
}
const keys = Object.keys(laptop);
console.log("details of laptop:",laptop)
console.log("All key values in object:",keys);
//QUESTION-05
console.log("********QUESTION-05**********");
const house = {
    location: "Telangana",
    size: "2000 sqft",
    price: 500000
};
const values = Object.values(house);
console.log("House Details:",house);
console.log("All values from object:",values);
//QUESTION-06
console.log("********QUESTION-06**********");
const smartphone = {
    brand: "Realme",
    model: "Realme 12+ pro",
    price: 300000
};
console.log("smartphone before sealed:",smartphone);
Object.seal(smartphone);
smartphone.price = 25000;  
console.log("smartphone after sealed:",smartphone);
console.log("Is smartphone object is sealed?:",Object.isSealed(smartphone));  
//QUESTION-07
console.log("********QUESTION-07**********");
const book = {
    title: "The 3 Mistakes of My Life",
    author: "Chetan Bhagat",
    publishedYear: 2008
};
console.log("Book Details before freeze:",book);
Object.freeze(book);
book.publishedYear = 2023;  // This will not work
console.log("Book Details before freeze:",book);  
console.log("Is book object is frozen:",Object.isFrozen(book));
//QUESTION-08
console.log("********QUESTION-08**********");
const Person = {
    firstName: "Nani",
    lastName: "Chinnu",
    age: 22
};
console.log("Person Details:",Person);
const Keys = Object.keys(Person);
console.log("Keys:", Keys);  
const Values = Object.values(Person);
console.log("Values:", Values); 
//QUESTION-09
console.log("********QUESTION-09**********");
const course = {
    title: "Introduction to JavaScript",
    instructor: "Vamsi",
    duration: "2 weeks"
};
console.log("Course Details:",course); 
const entries = Object.entries(course);
console.log("Course Entries:",entries);  
delete course.duration;
console.log("deleted duration:",course);  
const updatedEntries = Object.entries(course);
console.log("Final Entites:",updatedEntries);  
//QUESTION-10
console.log("********QUESTION-10**********");
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
const keys1 = Object.keys(employee);
console.log("all keys values in employee object:",keys1); 

