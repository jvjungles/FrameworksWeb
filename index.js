import { Combustivel } from './combustivel.js';
import { Posto } from './posto.js';
import readline from 'readline';

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
    rl.question(question, (answer) => {
    resolve(answer);
    });
});
}

// Posto
let postoRet = new Posto(await promptAsync('Digite o posto: '), 
                         new Combustivel(TIPO_COMBUSTIVEL.GASOLINA, 
                                        await promptAsync('Digite valor da Gasolina: ')), 
                         new Combustivel(TIPO_COMBUSTIVEL.ETANOL, 
                                        await promptAsync('Digite valor da Etanol: ')));
postoRet.sugereCombustivel();

rl.close();