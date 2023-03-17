const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

            // Elementos do Set nao podem repetir
const nomesAtualizados = [...new Set(nomes)]; //Usado para voltar a ser uma lista,sem o Set

console.log(nomesAtualizados);