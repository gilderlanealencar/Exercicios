const prompt = require('prompt-sync')();

// Entrada
const lado = Number(prompt('Digite o Lado do Quadrado: '))

// processamento
const area = Math.pow(lado, 2)

// Saida
console.log('A área do quadrado é: ', area)