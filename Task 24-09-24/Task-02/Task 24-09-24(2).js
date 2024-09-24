//QUESTION 1
var str="LearningJavaScriptIsFun"
let middlePortion=str.substring(8,18);
let uppercasemiddle=middlePortion.toUpperCase();
console.log("*************QUESTION-01*************");
console.log("Acutall String:",str);
console.log("Middle part string:",middlePortion);
console.log("uppercase middle:",uppercasemiddle);
//QUESTION 2
console.log("*************QUESTION-02*************");
let string="LearningJavaScriptIsFun"
let stringuppercase=string.toUpperCase();
console.log("Atcuall String:",string);
console.log("uppercase string:",stringuppercase);
console.log("length of string:",string.length);
//QUESTION 3
console.log("*************QUESTION-03*************");
let strings="This is a JavaScript"
let character=strings.charAt(14);
let Asciivalue=character.charCodeAt();
console.log("Retrived cahracter:",character);
console.log("Ascii value of char:",Asciivalue);
//QUESTION 4
console.log("*************QUESTION-04*************");
let sentence="    AHALYA     "
let trimsen=sentence.trim();
let slicedsen=trimsen.slice(1,4);
console.log("Actuall String:",sentence);
console.log("Trimmed String:",trimsen);
console.log("Sliced string:",slicedsen);
//QUESTION 5
console.log("*************QUESTION-05*************");
let str1="Nani"
let str2="Chinnu"
let lowercasestr2=str2.toLocaleLowerCase();
let combine=str1.concat(lowercasestr2);
console.log("String1:",str1);
console.log("String2:",str2);
console.log("lower case str2:",lowercasestr2);
console.log("concatination of 2 str:",combine);
//QUESTION 6
console.log("*************QUESTION-06*************");
let word="   #JavaScript..!"
let trimword=word.trim();
let sliceword=trimword.slice(1);
console.log("Actuall word:",word);
console.log("Trim word:",trimword);
console.log("Slice word:",sliceword);
//QUESTION 7
console.log("*************QUESTION-07*************");
let String="This is a JavaScript"
let Character=String.charAt(11);
let uppercase=Character.toLocaleUpperCase();
console.log("Retrived cahracter:",Character);
console.log("uppercase vlaue:",uppercase);
//QUESTION 8
console.log("*************QUESTION-08*************");
let Str1 = "Hello World!    ";
let Str2 = "Welcome to JavaScript.";
let trimmedStr = Str1.trimEnd();
let concatenatedStr = trimmedStr.concat(" ",Str2);
console.log("Original string:",Str1);
console.log("Trimmed string:",trimmedStr);
console.log("Concatenated string:'" + concatenatedStr + "'");
//QUESTION 9
console.log("*************QUESTION-09*************");
let input="  HelloWorld  ";
let inputtrim=input.trim();
let inputtrimuppercase=inputtrim.toLocaleUpperCase();
let substring=inputtrimuppercase.substring(1,5);
console.log("Input:",input);
console.log("Trim input:",inputtrim);
console.log("uppercase:",inputtrimuppercase);
console.log("substring:",substring);
//QUESTION 10
console.log("*************QUESTION-10*************");
let string1= "HELLO";
let string2= "WORLD";
let lowecasestr1=string1.toLocaleLowerCase();
let lowecasestr2=string2.toLocaleLowerCase();
let ConcatenatedStr=lowecasestr1.concat(" ",lowecasestr2);
let retrive=ConcatenatedStr.charAt(0)
console.log("String1:",string1);
console.log("String2:",string2);
console.log("lowecase str1:",lowecasestr1);
console.log("lowecase str2:",lowecasestr2);
console.log("concatination:",ConcatenatedStr);
console.log("Retrived 1st char:",retrive);




