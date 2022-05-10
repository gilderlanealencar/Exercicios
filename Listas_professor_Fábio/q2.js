const prompt = require('prompt-sync')();

// Entrada 
const horas = Number(prompt('numero de horas: '))

// Processamento
const minutos = horas * 60

// saida
console.log('O valor correspondente é : ', minutos, 'minutos')


