const prompt = require('prompt-sync')();

// Entrada 
const Dias = Number(prompt('Digite um numero inteiro de dias: '))

// Procesamento
const semanas = Math.trunc(Dias / 7);
const dias = Dias % 7;

// Saida
console.log('equivale a: ', semanas, 'semanas', dias, 'dias')