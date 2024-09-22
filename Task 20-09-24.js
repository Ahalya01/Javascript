// Addition (+)
let a = 10;
let b = 5;
let sum = a + b;  

// Subtraction (-)
let difference = a - b;  

// Multiplication (*)
let product = a * b;  

// Division (/)
let quotient = a / b; 

// Modulus (%)
let remainder = a % b; 
//Expotential
let power = a ** b;
console.log("Addition: " ,sum);
console.log("Subtraction: ",difference);
console.log("Multiplication: ",product);
console.log("Division: " ,quotient);
console.log("Modulus: ", remainder);
console.log("Exponentiation: ",power);

//Number Methods
console.log("--**--Number method--**--")
//1.toString()
let a1 = 12345;
let a2=a1.toString()
console.log("--1.ToString method----")
console.log("a1 is a number:",a1); // Output: "12345"
console.log("Type of a1:",typeof a1);
console.log("a2 is a string:",a1);
console.log("Type of a2:",typeof a2);
//2.ParseInt and ParseFloat
let strInt = "12345abc";  
let strFloat = "123.45abc"; 

// 2.Parsing the integer
let parsedInt = parseInt(strInt);
console.log("--2.parseInt Method ----");
console.log("Original String: ", strInt);  
console.log("Parsed Integer: " ,parsedInt); 
console.log("Type of Parsed Integer: " ,typeof parsedInt); 

//3. Parsing the float
let parsedFloat = parseFloat(strFloat);
console.log("--3.parseFloat Method ----");
console.log("Original String: " , strFloat); 
console.log("Parsed Float: " , parsedFloat);   
console.log("Type of Parsed Float: " , typeof parsedFloat); 
// 4. isFinite
console.log("--4. isFinite ----");

// Finite numbers
console.log("for numbers")
console.log(isFinite(123));           
console.log(isFinite(-123.45));       
console.log(isFinite(0));              

// Special cases using characters
console.log("for characters")
console.log(isFinite(Infinity));    
console.log(isFinite(-Infinity));          

// Non-numeric values
console.log("for non-numerical values ")
console.log(isFinite(null));          //(null is treated as 0)
console.log(isFinite(undefined));    
console.log("type of isfinite:",typeof isFinite(null));           
//5.toFixed()
let products = {
    name: "Laptop",
    price: 999.987
};
console.log("--5.ToFixed method----")
console.log("price of the product(999.987):",products.price.toFixed(2)); // Output: 999.99
console.log("price of the product(999.987):",products.price.toFixed(10)); 

//6.toPrecision
let Products = {
    name: "Laptop",
    price: 999.987
};
console.log("--6.ToPrecision method----")
console.log("price of the product(999.987):",Products.price.toPrecision(5)); 
console.log("price of the product(999.987):",Products.price.toPrecision(4)); 
console.log("price of the product(999.987):",Products.price.toPrecision(10)); 
//7.Number
let num=123;
let num1=123.89;
let text="abc";
console.log("--7.Number ----");
console.log(Number(num));     
console.log(Number(num1));  
console.log(Number(true));      
console.log(Number(false));     
console.log(Number(text));      
//8.Expotential
let n = 12345.679089;
console.log("-- Using toExponential ----");
console.log(n.toExponential());       
console.log(n.toExponential(2));       
console.log(n.toExponential(5));       
//9.isNaN
console.log("--9.isNaN ----");
console.log(isNaN(NaN));              
console.log(isNaN("abc"));             
console.log(isNaN(123));              
console.log(isNaN("123"));            
console.log(isNaN(undefined));         
console.log(isNaN(null));              //(null is treated as 0)
//10.ToLocalString
let price = 9999.99;

console.log("--10.toLocaleString ----");
console.log(price.toLocaleString('en-US')); 
console.log(price.toLocaleString('de-DE')); //(German format)
console.log(price.toLocaleString('en-IN')); // (Indian format)


