const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resultadoc;
let resultadok;
let resultadof;

rl.question("Digite 'f' para Fahrenheit, 'c' para Celsius e 'k' para Kelvin: ", (entrada) => {
    if (entrada === f) || (entrada === c) || (entrada === k){
        const conversor = entrada;
        rl.question("Agora digite uma temperatura:")