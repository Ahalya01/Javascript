let string1= "HELLO";
let string2= "WORLD";
let lowecasestr1=string1.toLocaleLowerCase();
let lowecasestr2=string2.toLocaleLowerCase();
let concatenatedStr=lowecasestr1.concat(" ",lowecasestr2);
let retrive=concatenatedStr.charAt(0)
console.log("String1:",string1);
console.log("String2:",string2);
console.log("lowecase str1:",lowecasestr1);
console.log("lowecase str2:",lowecasestr2);
console.log("concatination:",concatenatedStr);
console.log("Retrived 1st char:",retrive);

