const prompt = require('prompt-sync')();

// Inicio
const numero = Number(prompt('valor (R$): '))

// Processamento
const porcentagem = numero * 70/100

// Final
console.log('70 % desse valor é ', porcentagem)

