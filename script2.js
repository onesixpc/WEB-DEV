// this file contains examples of conditional statements and switch statements

// conditional statements

let age = 18;
if (age < 18) {
  console.log("You are not eligible to vote");
}
else if (age === 18) {
  console.log("You are eligible to vote");
}

else {
  console.log("You are eligible to vote and can also contest in elections");

}

// switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
    break;
}


for (let i = 0; i<10; i++){
  console.log(i+1);
}

let j = 0;
while(j<10){
  console.log(j+1);
  j++;
}

let k = 0;
do{
  console.log(k+1);
  k++;
}while(k<10);

//functions
function multiply(a,b,c){
  console.log(a*b*c);
}
multiply(6,8,4);

// arrow function
let mult = (a,b,c) => console.log(a*b*c);
mult(6,8,4);
console.log(typeof mult);

//iife - immediately invoked function expression
(function(a,b,c){
  console.log(a*b*c);})(6,8,4);

// end of file