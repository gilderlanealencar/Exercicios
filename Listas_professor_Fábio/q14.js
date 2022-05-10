const prompt = require('prompt-sync')();

// Entrada
const nota1 = Number(prompt('Nota 1: '))
const peso1 = Number(prompt('Peso 1: '))

const nota2 = Number(prompt('Nota 2: '))
const peso2 = Number(prompt('peso 2: '))

const nota3 = Number(prompt('Nota 3: '))
const peso3 = Number(prompt('Peso 3: '))

// Processamento
const soma_notas = nota1*peso1 + nota2*peso2 + nota3*peso3
const soma_pesos = peso1 + peso2 + peso3

const media_ponderada = soma_notas / soma_pesos

// Final
console.log(' A Media Ponderada é: ', media_ponderada)