// This keyword - It refers to an object that is executing the current piece of code. 
const student = {
    name: "aryan", 
    age: 20,
    math: 92,
    eng: 97,
    acc: 93,
    getAvg() {
        let Avg = (this.math + this.eng + this.acc) / 3;
        console.log(`${this.name} got avg marks of = ${Avg}`);
    }
}
function getAvg() {
    console.log(this);
}