const notas = [7, 7, 8, 9];

// Quando fazemos uma ligação direta " = " de atribuição de valor
// ambas as constantes, serão interpretadas como as msm, caso altere uma, altera a outra

// const novasNotas = notas;

                //"... serve para espalhamento da array"
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
