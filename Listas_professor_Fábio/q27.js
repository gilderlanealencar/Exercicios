const prompt = require('prompt-sync')();

// Entrada 
const segundos = Number(prompt('digite um numero de segundos inteiro : '))

// Processamento
const horas = Math.trunc(segundos / 3600)
const minutos = Math.trunc(segundos / 60)
const segundos_total = (segundos % 60)

console.log('O valor correspomdente é: ', horas, 'horas', minutos, 'minutos', segundos_total, 'segundos')