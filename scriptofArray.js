// let arr = [1,2,3,4,5]

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.splice(2,0,2.5)
// console.log(arr);

// let arr2 = [1,2,35,7]
// arr2.concat(arr)


// multidimensional array
let arrr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr)

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        console.log(arr[i][j])
    }
}

// using forEach - forEach does not change the original array, which does is map, which returns a new array, filter, which also returns a new array, reduce, which returns a single value

arrr.forEach(val1 =>{
    val1.forEach(val2 =>{
        console.log(val2+10)
    })
})

console.log(arr)

let arr4 = [6,7,8]
// let arr5 = arr4.slice(0);
let arr5 = [...arr4]
// this is called spread operator which copies the original array to new array and if we change the new array the original array will not be changed and vice versa


let arr = [[1,2,3],[4,5,6],[7,8,9]]

let arr2 = [1,2,3,4,5]

for (let i in arr2){
    console.log(i)
}

for (let v of arr2){
    console.log(v)
}

let arr3 = arr2.map((val,ind,array) => {
    console.log(val)
    console.log(ind)
    return val + 10
})

console.log(arr3)

//destructing

let arre = [1,2,3,4,5,6,7,8]
let [a,b,c,d,e,...f] = arre

console.log(a,b,c,d,e,f)

let arrM = [[1,2,3],[4,5,6]]
let [[a1,b1,c1],[d1,e1,f1]] = arrM

console.log(a1,b1,c1,d1,e1,f1)

// copy and spread operator

let s = [1,2]
let f2 = [3,4]

let p = [...s,...f2]
console.log(p)

// split - which is used to split a string into an array
let str = "hello world"
let arrS = str.split(" ")
console.log(arrS) // ["hello", "world"]

let str2 = "hello,world,how,are,you"
let arrS2 = str2.split(",")
console.log(arrS2) // ["hello", "world", "how", "are", "you"]

//slice - which is used to slice an array into a new array
let arr6 = [1,2,3,4,5]
let arr7 = arr6.slice(1,4) // it will slice from index 1 to index 4 but not including index 4
console.log(arr7) // [2,3,4]

//splice - which is used to add or remove elements from an array
let arr8 = [1,2,3,4,5]
arr8.splice(2,0,2.5) // it will add 2.5 at index 2 and remove 0 elements
console.log(arr8) // [1,2,2.5,3,4,5]