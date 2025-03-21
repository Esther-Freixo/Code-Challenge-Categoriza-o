import fs from 'fs';
import { categorizeData } from './categorizeData.js';

fs.readFile('data01.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Não foi possível obter dados');
        return;
    }

    const products = JSON.parse(data);
    const result = categorizeData(products);

    fs.writeFile('resultado.json', JSON.stringify(result, null, 2), (err) => {
        if (err) {
            console.log('Erro ao escrever o arquivo resultado.json', err);
        } else {
            console.log('Resultado escrito em resultado.json');
        }
    });
});