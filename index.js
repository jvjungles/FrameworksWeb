import { Combustivel } from './combustivel.js';
import { Posto } from './posto.js';
import readline from 'readline';

const postos = [];

const TIPO_COMBUSTIVEL = {
    GASOLINA: 'GASOLINA',
    ETANOL: 'ETANOL'
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
function promptAsync(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {resolve(answer);});
    });
}

while (postos.length < 3) {
    postos.push(
        new Posto(await promptAsync('\nDigite o posto: '), 
                  new Combustivel(TIPO_COMBUSTIVEL.GASOLINA, 
                                  await promptAsync('Digite valor da Gasolina: ')), 
                  new Combustivel(TIPO_COMBUSTIVEL.ETANOL, 
                                  await promptAsync('Digite valor da Etanol: '))));
}

postos.forEach((posto) => {
    posto.sugereCombustivel();
});

console.log('');
rl.close();