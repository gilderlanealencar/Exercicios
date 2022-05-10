const prompt = require('prompt-sync')();

// Entrada
const num_binario= Number(prompt('Digite um numero inteiro de 4 digitos binario: '))

// Processamento
const milhar = (num_binario / 1000)
const resto_1 = (num_binario % 1000)
const centena = (resto_1 /100)
const resto_2 = (resto_1 % 100)
const dezena = (resto_2 / 10)
const unidade = (resto_2 % 10)

const digito_1 = Math.pow(2 * 0) * unidade
const digito_2 = Math.pow(2 * 1) * dezena
const digito_3 = Math.pow(2 * 2) * centena
const digito_4 = Math.pow(2 * 3) * milhar
const digitos_totais =(digito_1 + digito_2 + digito_3 + digito_4)

// Final
console.log('E em decimal é: ', digitos_totais, 'decimal')