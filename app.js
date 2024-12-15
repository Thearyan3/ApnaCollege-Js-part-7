// This keyword - It refers to an object that is executing the current piece of code. 
// const student = {
//     name: "aryan", 
//     age: 20,
//     math: 92,
//     eng: 97,
//     acc: 93,
//     getAvg() {
//         let Avg = (this.math + this.eng + this.acc) / 3;
//         console.log(`${this.name} got avg marks of = ${Avg}`);
//     }
// }
// function getAvg() {
//     console.log(this);
// }

// try&catch - The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in try block. 
try {
    console.log(a);
} catch(err) {
    console.log("caught error .. a is not defined");
    console.log(err);
}