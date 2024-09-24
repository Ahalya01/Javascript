const user = {
    name: "Nani",
    age: 25,
    email: "Nani1234@gmail.com"
};
console.log("User Details:",user)
console.log("Is user object frozen?:", Object.isFrozen(user));
Object.freeze(user);
console.log("Is user object frozen now?:", Object.isFrozen(user));  
