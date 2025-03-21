function normalizeUnits(title) {
    let normalizedTitle = title.toLowerCase();

    normalizedTitle = normalizedTitle.replace(/(\d+)\s*ml/g, (match, ml) => {
        const liters = parseInt(ml) / 1000;
        if (liters >= 1) {
            return `${liters}l`;
        } else {
            return match;
        }
    });

    normalizedTitle = normalizedTitle.replace(/(\d+)\s*g(ramas?)?/g, (match, g) => {
        const kilograms = parseInt(g) / 1000;
        if (kilograms >= 1) {
            return `${kilograms}kg`;
        } else {
            return match;
        }
    });

    return normalizedTitle;
}

function matchProductNames(title) {
    let transformedTitle = normalizeUnits(title.toLowerCase())
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")     // Retira assentos e char especiais
        .replace(/tipo/g, " ")    // Remove a palavra tipo
        .replace(/,/g, " ")
        .replace(/ litro/g, "l")     // Os proximos replace substituem unid de medidas em extenso por suas siglas
        .replace(/ quilos/g, "kg")
        .replace(/ quilo/g, "kg")
        .replace(/ gramas/g, "g")
        .replace(/[-]/g, " ")    // Remove -
        .split(' ').sort().join(' ')    // Separa e ordena as palavras p/ comparação
        .trim();    // Retira os excessos de espaço em branco que possam sobrar

    return transformedTitle;
}

export function categorizeData(productData) {
    const processedData = {};

    productData.forEach(product => {
        const productCategory = matchProductNames(product.title);

        if (!processedData[productCategory]) {
            processedData[productCategory] = {
                category: product.title,
                count: 0,
                products: []
            };
        }

        processedData[productCategory].products.push({
            title: product.title,
            supermarket: product.supermarket
        });
        processedData[productCategory].count++;
    });

    return Object.values(processedData);
}

