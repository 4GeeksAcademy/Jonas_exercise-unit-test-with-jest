// Objeto con tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
};

// Funciones de conversión
function fromEuroToDollar(amountInEuro) {
    return amountInEuro * oneEuroIs["USD"];
}

function fromDollarToYen(amountInDollar) {
    let amountInEuro = amountInDollar / oneEuroIs["USD"];
    return amountInEuro * oneEuroIs["JPY"];
}

function fromYenToPound(amountInYen) {
    let amountInEuro = amountInYen / oneEuroIs["JPY"];
    return amountInEuro * oneEuroIs["GBP"];
}

// Exportamos las funciones para pruebas con Jest
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };



// Esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // Solo un registro en consola para nosotros
// console.log(sum(7,3))

// // Exporta la función para usarla en otros archivos 
// // (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };