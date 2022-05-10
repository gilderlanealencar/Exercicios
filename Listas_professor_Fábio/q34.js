const prompt = require('prompt-sync')();

// Inicio
const numero = Number(prompt('Digite um numero: '))
const numero2 = Number(prompt('digite um numero: '))
const numero3 = Number(prompt('Digite um numero: '))

// Processameno
const soma = (numero + numero2 + numero3)
const media = (soma / 3)

// Final
console.log('A media é: ', media)