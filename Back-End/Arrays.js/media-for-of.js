const notas = [10, 6.5, 8, 7.5];

// FOr of, ele ja sabe que tem que percorrer o array, do começo ao fim
// Vantagem: podemos pegar diretamente o valor do elemento e dar um console.log

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`)