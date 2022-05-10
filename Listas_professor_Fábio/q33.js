const prompt = require('prompt-sync')();

// Inicio
const numero = Number(prompt('Digite um numero de 3 digitos: '))

// Processamento
const unidade = Math.trunc(numero / 100)
const resto = (numero % 100)
const dezena = Math.trunc(resto / 10)
const centena = (resto % 10)

const inverso = (unidade * 1 + dezena * 10 + centena * 100)
const soma = (numero + inverso)

// Final
console.log('a soma do numero e do inverso é: ', soma, 'E o inverso é; ', inverso)