const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
                                            // acc      
    const SomaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0);
        // acumulador começa em 0 e toda vez que passar por uma nota, ela será somada

    const media = SomaDasNotas / notasDaSala.length;

    return media;
}

// indico qual a const usarei para calcular a média
console.log(`A média da sala de JS é ${calculaMedia(salaJS)}`);

console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);

console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);


// O reduce() "acumulador", para que ele comece com o valor em 0, teremos que indicar isso
// Por isso o zero dps do bloco da função