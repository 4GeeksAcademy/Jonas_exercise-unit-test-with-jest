// Importamos las funciones del archivo que queremos testear
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app");

// Prueba de conversión de Euros a Dólares
test("Convierte 1 Euro a Dólares", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

// Prueba de conversión de Dólares a Yenes
test("Convierte 1 Dólar a Yenes", () => {
    expect(fromDollarToYen(1)).toBeCloseTo(156.5 / 1.07);
});

// Prueba de conversión de Yenes a Libras
test("Convierte 1 Yen a Libras", () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.87 / 156.5);
});


// // Importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// // Comienza tu primera prueba
// test('adds 14 + 9 to equal 23') () => {
//     // Dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);
// }

//     // Esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });