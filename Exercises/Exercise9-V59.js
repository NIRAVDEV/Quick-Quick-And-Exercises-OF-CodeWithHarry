let num1 = 10;
let num2 = 11;
let value = "*";

let random = Math.random();

if (random < 0.1) {
    Mistake();
}
else{
    if (value == "+") {
        console.log(num1+num2);
    }
    if (value == "*") {
        console.log(num1*num2);
    }
    if (value == "-") {
        console.log(num1-num2);
    }
    if (value == "/") {
        console.log(num1/num2);
    }
}

function Mistake() {
    if (value == "+") {
        console.log(num1-num2);
    }
    if (value == "*") {
        console.log(num1+num2);
    }
    if (value == "-") {
        console.log(num1/num2);
    }
    if (value == "/") {
        console.log(num1**num2);
    }
}