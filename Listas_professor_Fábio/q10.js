const { isNumber } = require('util');

const prompt = require('prompt-sync')();

// Inicio
const num_1 = Number(prompt('digite o valor do dividendo: '))
const num_2 = Number(prompt('digite o valor do divisor: '))

// desenvolvimento
const quociente = Math.trunc(num_1 / num_2);
const resto = num_1 % num_2

// Final
console.log('o resultado do quociente é: ', quociente, 'E o resto igual a: ', resto)