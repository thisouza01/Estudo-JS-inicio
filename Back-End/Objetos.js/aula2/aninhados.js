// // Código aninhado

const cliente = {
    nome: "Thiago",
    idade: 20,
    email: "thiago@firm.com",
    telefone: ["11 996999999", "11 995599999"], // Mais facil guardar dados iguais em listas
};

cliente.endereco = {
    rua: "R. Tiradentes",
    numero: 573,
    apartamento: true,
    complemento: "ap 934",
}

console.log(cliente);