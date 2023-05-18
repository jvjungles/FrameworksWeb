import Combustivel from './Combustivel';
import Posto from './Posto';
import readline from 'readline';

const postos: Posto[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function promptAsync(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => { resolve(answer); });
    });
}

async function main() {
    while (postos.length < 3) {
        postos.push(
            new Posto(
                await promptAsync('\nDigite o posto: '),
                new Combustivel('gasolina' , parseFloat(await promptAsync('Digite valor da Gasolina: '))),
                new Combustivel('etanol', parseFloat(await promptAsync('Digite valor da Etanol: ')))
            )
        );
    }

    console.log('');

    postos.forEach((posto) => {
        posto.sugereCombustivel();
    });
    
    rl.close();
}

main().catch((error) => {
    console.error(error);
});
