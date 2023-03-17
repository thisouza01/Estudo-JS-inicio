const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

            // função anônima
notas.forEach(function(notas) {
    somaDasNotas += notas;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`)

// forEach = em geral, é mais usado em códigos, do que o for of.