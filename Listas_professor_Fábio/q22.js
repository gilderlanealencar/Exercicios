const prompt = require('prompt-sync')();

// Entrada
const Km = Number(prompt('Digite o valor do (km): '))

// Processamento]
const metros = Km * 1000

// Saida
console.log('Em metros é: ', metros,'(m)')