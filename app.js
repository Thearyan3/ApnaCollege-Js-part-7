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
// try {
//     console.log(a);
// } catch(err) {
//     console.log("caught error .. a is not defined");
//     console.log(err);
// }

// Miscellaneous Topics :-
// (i). Arrow functions --> short way to write or define functions. 
// const sum = (a, b) => {
//     console.log(a+b);
// } 

// const cube = n => {
//     return n*n*n;
// }

// const pow = (a, b) => {
//     return a ** b;
// }

// const hello = () => {
//     console.log("hello World");
// }

// (ii). Arrow funcitons [implicit return] - Ek aisa arrow function jha pe function sirf ek value return kre aur koi kaam vo na perform kre to vha pe function ko single line me define kiya ja skta h. 
// const sum = (a, b) => a + b;
// const cube = n => n * n *n ;
// const mul = (a, b) => a * b;

// (iii). setTimeout(function , timeout) - setTimeout ek inbuilt function h. Ye window object ka hi ek function h jaise Math object. In JavaScript, agar hame koi kaam, ek particular period of time ke baad hi perform krwana h apne code ke andar to ham setTimeout function ka use krte h.
// For ex: hame kisi API se data lana h aur wo data thoda slow aa rha h aur hame ye chahiye ki itne time ke baad koi kaam hona h to ham setTimeout function ka use krke apne code me kuch kaam perform krwa skte h. 
// console.log("hello there!");
// setTimeout( () => {
//     console.log("Aryan");
// }, 1000);
// console.log("Talk to");

// (iv). setInterval(function, timeout) - setInterval function bilkul setTimeout jaise kaam krta h lekin setInterval ek loop ki trah run krta h mtlb setInterval ke andar jo time given hoga vo use function ko utne hi time baad baar baar execute krta rhega. Aur isi loop ko rokne ke liye ek id hoti h jo hame clearInterval(id) ke andar likhkar execute krani hoti h. 
// let id = setInterval( () => {
//      console.log("Aryan");
// }, 2000);

// let id2 = setInterval( () => {
//     console.log("Hello There");
// }, 3000);


// (v). this in arrow function - JavaScript's this is said to be One of the most trickiest this. Basically, arrow function ke liye this hota h jo object ka parent use call lga rha h or normal function ke liye this hota h jo object use call lga rhi h.
const student = {
    name: "Aryan", 
    marks: 95,
    prop: this,// global scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);
        return this.marks;// parent's scope -> window
    },
}