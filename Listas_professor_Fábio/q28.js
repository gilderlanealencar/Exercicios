const prompt = require('prompt-sync')();

// Entada
const horas = Number(prompt('digite aqui o numero Horas: '))

// Processamento
const semanas = Math.trunc(horas / 168)
const Dias = Math.trunc(horas / 24)
const horas1 = Math.trunc(horas % 24)

console.log('Corresponde a: ', semanas, 'semanas', Dias, 'dias', horas1, 'horas')