const prompt = require('prompt-sync')();

// entrada
const metro = Number(prompt('digite o valor em (m): '))

// Processamento
const centimetros = metro * 100

// Saida
console.log('Equivale a: ', centimetros,"(cm)")