const prompt = require('prompt-sync')();

// Entrada
const quilograma = Number(prompt('Digite o valor em (Kg): '))

// Processamento
const gramas = quilograma * 1000

// Saida
console.log('Em gramas é; ', gramas,'(g)')