const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// Filter serve para retornar verdadeiro ou falso
// Gerando um novo array (alunosReprovados)

// *** Quando queermos apenas usar o indice para algo, teremos sempre que nomear o primeiro parâmetro ***
// *** usando algum nome ou o "_" ***

const alunosReprovados = alunos.filter((_, i) => {
    return medias[i] < 7;
});

console.log(alunosReprovados);

// Explicando o return medias[i] < 7;

// ele passará por todos os indices "i", e qual for menor que 7, sera uma condição verdadeira
// Assim, fazendo com que ele apareça no console.log