const cliente = {
    nome: "Thiago",
    idade: 32,
    cpf: "11111111111",
    email: "thiago@dominio.com",
};

// Podemos acessar as propriedades usando tbm os colchetes
// Ex: cliente["nome"]

console.log (`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente
    ["idade"]} anos.`);

// Quando não sabemos oque está guardado nas chaves 

// Caso esteja querendo saber alguma chave que nao tenha na "lista"
// Como o caso da altura, o valor retornado, será UNDEFINED.
const chaves = ["nome", "idade", "cps", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});
