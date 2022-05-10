const prompt = require('prompt-sync')();

// Entada 
const base = Number(prompt('Digite a base do retângulo: '))
const altura = Number(prompt(' Digite a altura do Retângulo: '))

// Processamento
const area = base* altura

// Saida
console.log('Área do Retângulo: ', area)