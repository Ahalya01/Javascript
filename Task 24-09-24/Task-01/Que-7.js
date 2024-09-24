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
