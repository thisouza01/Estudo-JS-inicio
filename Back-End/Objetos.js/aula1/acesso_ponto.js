const cliente = {
    nome: "Thiago",
    idade: 32,
    cpf: "11111111111",
    email: "thiago@dominio.com",
};

// Acessamos as propriedades usando " . "
// Ex: cliente.nome

console.log (`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.
    idade} anos.`);

console.log (`Os 3 primeiros digitios do CPF são ${cliente.cpf.substring(0, 3)}`)

// Substring (manipulaçao para o nosso interesse)