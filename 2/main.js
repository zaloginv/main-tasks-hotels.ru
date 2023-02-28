let BigNumber = require('big-number');

function addition(num1, num2) {
    return BigNumber(num1).add(num2).toString()
}

function subtract(num1, num2) {
    return BigNumber(num1).subtract(num2).toString()
}

function multiply(num1, num2) {
    return BigNumber(num1).multiply(num2).toString()
}

function division(num1, num2) {
    return BigNumber(num1).divide(num2).toString()
}

let num1 = '1057445754646665645775'
let num2 = '245475744566654657666'

console.log(addition(num1, num2));
console.log(subtract(num1, num2));
console.log(multiply(num1, num2));
console.log(division(num1, num2));