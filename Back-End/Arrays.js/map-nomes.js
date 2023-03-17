const nomes =['ana Julia', 'Caio vinicius', 'BIA silva'];

                                        //=> (function)
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
                                            //forma menor de escrever "arrow function sem o return"
console.log(nomesPadronizados);


// Outra forma de fazer o msm, porem com forEach

// Precisamos de uma variável vazia, para conter o array modificado
let nomesAtualizados = [];

nomes.forEach ((nome, i) => {
    nomesAtualizados[i] = nome.toLowerCase();
})

console.log(nomesAtualizados);