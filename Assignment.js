// Qs 1. Write an arrow function named arrayAverage that accepts array of numbers and returns the average of those numbers.
// let arr = [1, 2, 3, 5, 4];
// let arrayAverage = (arr) => {
// let sum = 0;
// for(n of arr){
//     sum += n;
// }
// console.log(sum/arr.length);
// }
// console.log(arrayAverage(arr));



// Qs 2. Write an arrow function named isEven() that takes a single number as an argument and returns if it is even or not.
// let isEven = (n) => {
//     if(n%2 == 0){
//         console.log(`${n} is even.`);
//     } else {
//         console.log(`${n} is odd.`);
//     }
// }
// console.log(isEven(4));



// Qs3 . What is the output of the following code :
const object = {
     message: 'Hello,World!',
      logMessage() { 
        console.log(this.message);
    }
 };
setTimeout(object.logMessage,1000);