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
