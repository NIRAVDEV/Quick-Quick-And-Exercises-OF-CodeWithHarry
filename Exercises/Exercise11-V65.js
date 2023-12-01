function factorial_calculator(n) {
    let result = 1;
    for (let i = 1; i <=n; i++) {
        result *= i;
    }
    return result;
}

const number = prompt('Enter Number')
const result = factorial_calculator(number)
console.log("The result of ",number," is : ",result)