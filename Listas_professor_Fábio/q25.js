const prompt = require('prompt-sync')();

// Entrada
const metros = Number(prompt('Digite o valor inteiro em (m): '))


//Processamento
const quilometro = metros / 1000

// Saida
console.log('O valor em quilometros é: ', quilometro,'(km)')
console.log('e em metros ´é: ', metros,'(m)')
