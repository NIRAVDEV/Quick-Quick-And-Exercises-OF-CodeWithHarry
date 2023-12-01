let num1 = prompt("Enter the first number");
let value = prompt("Enter the operation");
let num2 = prompt("Enter the second number");

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