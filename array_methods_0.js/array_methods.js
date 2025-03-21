// Return the following sub-data
// Return the array of products, where the price is greater than 600
//     Level - Easy
// Return the first product where the producer is 'Զիվա ՍՊԸ' and the price is 200
//     Level - Easy
// Map over the array and add random ids to each product
//     Level - Easy
// Return the array which includes only item names and counts
//      [{ name: 'Անձեռոցիկ',  count: 2000 }, … ]
//   Level - Easy
// Find an element with price 7
//   Level - Medium
// Return elements grouped by the producer (like the following)


const products = [{ name: 'Անձեռոցիկ', price: '400դրամ', producer: 'Ախթամար ՍՊԸ', count: 300 },
{ name: 'Ատամի  մածուկ', price: '1250դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 234 },
{ name: 'Զուգարանի թուղթ', price: '200դրամ', producer: 'Զիվա ՍՊԸ', count: 120 },
{ name: 'Տուփ', price: '10դրամ', producer: 'Յունիփաք գրուփ', count: 1000 },
{ name: 'Թաց անձեռոցիկ', price: '600դրամ', producer: 'Ախթամար ՍՊԸ', count: 600 },
{ name: 'Ատամի խոզանակ', price: '960 դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 333 },
{ name: 'Սպունգ', price: '300դրամ', producer: 'Զիվա ՍՊԸ', count: 340 },
{ name: 'Գտդալ', price: '7դրամ', producer: 'Յունիփաք գրուփ', count: 2000 }];

let arrayOfProducts = products.filter(product => parseInt(product.price) > 600);
console.log(arrayOfProducts);

let firstProduct = products.find(product => product.producer === "Զիվա ՍՊԸ" && parseInt(product.price) === 200);
console.log(firstProduct);

let productsWithRandomIds = products.map(product => {
    product.id = Math.floor(Math.random() * 1000);
    return product;
});
console.log(productsWithRandomIds);

let productsNamesAndCounts = products.map(product => {
    return {
        name: product.name,
        count: product.count
    }
});
console.log(productsNamesAndCounts);

let productWith7 = products.find(product => parseInt(product.price) === 7);
console.log(productWith7);


let groupedProducers = products.reduce((acc, product) => {
    let producerKey = `${product.producer}`;

    acc[producerKey] ??= [];
    acc[producerKey].push(product);

    return acc;
}, {});

let formattedOutput = {};

Object.entries(groupedProducers).forEach(([producer, items]) => {
    formattedOutput[producer] = {};
    items.forEach((item, index) => {
        formattedOutput[producer][index] = item;
    });
});


console.log(formattedOutput);


