const prompt = require('prompt-sync')();

// Entrada
const meses = Number(prompt('Digite um numero inteiro de meses: '))

// Processamento
const anos = Math.trunc(meses / 12 )
const meses1 = (meses % 12)

// Saida
console.log('Equivale a: ', anos, 'ano(s)', 'e: ', meses1, 'mês(es)')