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