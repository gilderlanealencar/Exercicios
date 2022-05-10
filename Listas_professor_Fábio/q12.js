const prompt = require('prompt-sync')();

// Entrada 
const salario = Number(prompt('Salário (R$): '))

// Processamento
const aumento = salario * 25/100
const novo_salario = salario + aumento

// Final
console.log('O novo salario é: ', novo_salario)