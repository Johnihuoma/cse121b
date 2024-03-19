/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
let addNumber1 = Number(document.querySelector('#add1').value);

let addNumber2 = Number(document.querySelector('#add2').value);

document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;
};

const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const multiplyNumber1 = Number(document.querySelector('#factor1').value);
    const multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    const divideNumber1 = Number(document.querySelector('#dividend').value);
    const divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function getTotal(){
//input
let subtotal = parseFloat(document.getElementById('subtotal').value);

//processing
if (document.getElementById('member').checked){
    subtotal = subtotal - subtotal * 0.2;
}
//output
document.getElementById('total').innerHTML = `$${subtotal.toFixed(1)}`;
}
document.getElementById('getTotal').addEventListener('click', getTotal);



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerHTML = numberArray.join(',');

/* Output Odds Only Array */
let oddArray = numberArray.filter(number => number % 2 !== 0);
document.getElementById('odds').innerHTML = oddArray.join(',');

/* Output Evens Only Array */
let evenArray = numberArray.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evenArray.join(',');

/* Output Sum of Org. Array */
let sumOfSourceArray = numberArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerHTML = sumOfSourceArray;
/* Output Multiplied by 2 Array */
let doubleOfSourceArray = numberArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = doubleOfSourceArray;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedByTwo = doubleOfSourceArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultipliedByTwo;