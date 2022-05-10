const prompt = require('prompt-sync')();

// inicio
const numero = Number(prompt('digitar numero de 3 digitos '))

// Processamento
const unidade = Math.trunc(numero / 100)
const resto = (numero % 100)
const dezena = Math.trunc(resto / 10)
const centena = (resto % 10)
const invertido = (centena * 100 + dezena * 10 + unidade * 1)

// Final
console.log('o invertido é ', invertido)