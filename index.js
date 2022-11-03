const lodash = require("lodash");
const { arrayLetras, arrayNumeros } = require("./array");

console.log(arrayLetras);
console.log(arrayNumeros);

const arrayUnicoLetras = lodash.uniq(arrayLetras);
const arrayUnicoNumeros = lodash.uniq(arrayNumeros);

console.log(arrayUnicoNumeros);
console.log(arrayUnicoLetras);
