const prompt = require('prompt-sync')();

// entrada
const numero = Number(prompt('Digite um numero de 3 digitos: '))

// processamento
const unidade = Math.trunc(numero / 100)
const resto = (numero % 100)
const dezena = Math.trunc(resto / 10)
const centena = (resto % 10) 

const invertido = (centena * 100 + dezena * 10 + unidade * 1)
const diferenca = (numero - invertido)

// Final
console.log('A diferença é ente o numero e o inverso é: ', diferenca, 'E o inverso é: ',invertido)