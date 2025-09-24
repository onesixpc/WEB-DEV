// exercise questions

// 1. create an array and display the elements using loops and forEach
let array = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i<array.length; i++){
    console.log(array[i])
}

array.forEach(val => {
    console.log(val);
})

// 2. create a multidimensional array and display the elements using loops and forEach
let multiArray = [[1,2,3],[4,6,7],[7,5,0]];
multiArray.forEach(subArray =>{
    subArray.forEach(element =>{
        console.log(element);
    })
})

console.log("break");

// print all even numbers from the array
let evenNumbers = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i< evenNumbers.length; i++){
    if (evenNumbers[i] % 2 === 0){
        console.log(evenNumbers[i]);
    }
}

// iife to add two numbers
((a,b)=>{
    console.log(a+b)
})(5,9);

// check if a number is even or odd
let num = 5;
if (num % 2 === 0){
    console.log(`${num} is even`)
}
else{
    console.log(`${num} is odd`)
}

// reverse a string
let string = "Hello, welcome to the world of JavaScript programming!";

let reversedString = string.split("").reverse().join("");

function reverseString(str){
    return str.split("").reverse().join("");
}

reverseString(string);

//sum of array
let arr = [1,2,3,4,5,6,7,8,9]
let sum = 0;

arr.forEach(val =>{
    sum += val
})

console.log(sum)

//leap year
let leapYear = year => {
    if (year % 4 === 0 && year & 100 !==0 || year % 400 === 0){
        
        console.log("leap year")
        return true;
    }
    else{
        
        console.log("not a leap year")
        return false;
    }
}

console.log(leapYear(2000));