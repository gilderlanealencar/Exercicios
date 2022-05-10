const prompt = require('prompt-sync')();

// Entrada
const minuto = Number(prompt('Digite aqui o numero de minutos: '))

// Prpcessamento 
const horas = Math.trunc( minuto / 60.);
const minuto_total = minuto % 60;

// Saida
console.log('O valor correspondente é: ', horas,'horas é', minuto_total, 'minutos')