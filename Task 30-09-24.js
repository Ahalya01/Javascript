//QUESTION-01
console.log("-------**QUESTION-01**-------");
console.log("1.Using for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("2.Using for While Loop:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}
console.log("3.Using for Do-While Loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);
//QUESTION-02
console.log("-------**QUESTION-02**-------");
console.log("1.Using for loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i * 2);
}
console.log("2.Using for While Loop:");
let b = 1;
while (b <=5) {
    console.log(b * 2);
    b++;
}
console.log("3.Using for Do-While Loop:");
let c = 1;
do{
    console.log(c * 2);
    c++;
} while (c <= 5);
//QUESTION-03
console.log("-------**QUESTION-03**-------");
console.log("1.Using for loop:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("2.Using for While Loop:");
let d=1;
while(d<=10){
    if (d % 2 !== 0) {
        console.log(d);
    }
  d++;
}
console.log("3.Using for Do-While Loop:");
let e=1;
do {
    if (e % 2 !== 0) {
        console.log(e);
    }
    e++;
} while (e <= 10);
//QUESTION-04
console.log("-------**QUESTION-04**-------");
let marks = 40; 
if (marks >= 35 && marks < 45) {
    console.log("Grade: D");
} else if (marks < 35) {
    console.log("Grade: F");
} else if (marks >= 45 && marks < 60) {
    console.log("Grade: C");
} else if (marks >= 60 && marks < 75) {
    console.log("Grade: B");
} else if (marks >= 75) {
    console.log("Grade: A");
} else {
    console.log("Invalid marks");
}
