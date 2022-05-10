const prompt = require('prompt-sync')();

// Inicio
const numero = Number(prompt('Digite um numero de 4 digitos: '))

// Processamento
const unidade  = Math.trunc(numero / 1000)
const resto = (numero % 1000)
const dezena = Math.trunc(resto / 100)
const resto2 = (resto % 100)
const centena = Math.trunc(resto2 / 10)
const milhar = (resto2 % 10)

const soma = (unidade + dezena + centena + milhar)


console.log(' o resultado da soma dos 4 digitos é: ', soma )