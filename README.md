Desafio de Categorização de Produtos

Este projeto Node.js tem como objetivo categorizar produtos com base em seus títulos, normalizando unidades de medida e lidando com variações nas descrições.

Estrutura do Projeto
index.js: Ponto de entrada da aplicação. Lê os dados, chama a função de categorização e escreve o resultado em um arquivo JSON.

categorizeData.js: Contém as funções para normalizar unidades de medida, combinar nomes de produtos e categorizar os dados.

data01.json: Arquivo JSON com os dados dos produtos a serem categorizados.

resultado.json: Arquivo JSON gerado com o resultado da categorização.

package.json: Arquivo de configuração do projeto Node.js.


Funções Principais

normalizeUnits(title): Normaliza unidades de medida nos títulos dos produtos (ml para L, g para kg).

matchProductNames(title): Normaliza os títulos dos produtos para facilitar a comparação e categorização.

categorizeData(productData): Categoriza os produtos com base nos títulos normalizados.
