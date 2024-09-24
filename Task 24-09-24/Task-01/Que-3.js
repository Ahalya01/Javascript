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
