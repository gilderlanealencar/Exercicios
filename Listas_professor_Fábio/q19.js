const prompt = require('prompt-sync')();

// Entrada 
const raio = Number(prompt('Digite o Raio da Esfera: '))

// Processamento
const volume = (4 * 3.14 * Math.pow(raio, 3) / 3)

// Saida 
console.log('Volume: ', volume.toFixed(2), '(cm³)')