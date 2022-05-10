const prompt = require('prompt-sync')();

// Entrada 
const temperatura = Number(prompt('Digite a temperatura(°C):'))

// Processamento
const temF = (9 * temperatura + 160) / 5
 // Saida
 console.log('A temperatura: ', temperatura,'(°C) ')
 console.log('É equivalente a: ', temF,'(°F) ')