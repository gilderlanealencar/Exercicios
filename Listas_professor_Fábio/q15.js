const prompt = require('prompt-sync')();

// Entrada
const base = Number(prompt('Digite o valor da base: '))
const altura = Number(prompt('Digite o valor da altura'))

// Processamneto
const area = (base * altura) / 2

// Saida
console.log('Area do triângulo: ', area)