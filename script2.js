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

