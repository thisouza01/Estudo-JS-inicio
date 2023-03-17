const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3 ,5];

const numeros = [...numerosPares, ...numerosImpares]; // [ 2, 4, 6, 1, 3, 5 ]

// const num1 = 1;
// const num2 = 2;

// const [num1, num2] = [1, 2] // 1 2

                    // "..." desconstroi e adiciona todos a uma const
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]; // 1 2 [ 3, 4, 5 ]

console.log(num1, num2, outrosNumeros);

// Para facilitar o trabalho com arrays, caso venha algum dado que nao vemos
// Atribuimos um valor fixo, para caso nao saiba oque vira, facilitará o trabalho

const [nome1 = "Thiago"] = [] //caso o valor seja null ou undefined,aparecerá o valor fixo

console.log(nome1);

// Para desconstruir use " ... "; descontroi as arrays de dentro
