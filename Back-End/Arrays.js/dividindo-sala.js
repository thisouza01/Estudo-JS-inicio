const alunos = [
    'João',
    'Juliana',
    'Ana',
    'Caio',
    'Lara',
    'Marjorie',
    'Guilherme',
    'Aline',
    'Fabiana',
    'Andre',
    'Carlos',
    'Paulo',
    'Bia',
    'Vivian',
    'Isabela',
    'Vinícius',
    'Renan',
    'Renata', 
    'Daisy',
    'Camilo'
];
// Nao altera o array original

    // Fatiar ou dividir
const sala1 = alunos.slice(0, 10)
        // "0" onde começa, "10" onde termina
const sala2 = alunos.slice(10)

console.log(sala1);
console.log(sala2);

// Para outros números, caso a sala seja com mais alunos
// const sala1 = alunos.slice(0, alunos.length / 2);