'user strict';
let number1 = parseInt(prompt('Type number 1.'));
let number2 = parseInt(prompt('Type number 2.'));
let number3 = parseInt(prompt('Type number 3.'));
let sum = number1 + number2 + number3;
let product = number1 * number2 * number3;
let average = sum / 3;
document.querySelector('#target').innerHTML = 'sum = ' + sum  + '<br>product = ' + product + '<br>average= ' + average;