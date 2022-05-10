const prompt = require('prompt-sync')();

// Inicio
const minutos = Number(prompt('Digite aqui um numero inteiro de minutos: '))

// Processamento
const dias = Math.trunc(minutos / 1440)
const horas = Math.trunc(minutos / 60)
const minutod1 = Math.trunc(minutos % 60)

// Final
console.log('Equivale: ', dias,'dias', horas,'horas', minutod1,'minutos')