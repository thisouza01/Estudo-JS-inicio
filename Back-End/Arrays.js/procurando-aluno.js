
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];

        //Para melhora ainda mais o código
        // Atribuimos alunos como sendo a posição "0" e medias como a posição "1"
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");

// .includes (verifica se o que estamos passando, contem na lista)
// .indexOf (verifica o indice do que sera passado ao parâmetro)
