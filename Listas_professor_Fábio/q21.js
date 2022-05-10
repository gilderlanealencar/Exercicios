const prompt = require('prompt-sync')();

// Entrada
const temperatura = Number(prompt('Digite a temperartura em (°F): '))

// Processamento
const temC = (5 * temperatura - 160) / 9

// Saida
console.log('A temperatura: ', temperatura,'(°F)')
console.log('É equivalente a: ', temC,'(°C)')

