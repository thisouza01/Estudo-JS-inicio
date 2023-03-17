const cliente = {
    nome: "Thiago",
    idade: 20,
    email: "thiago@firm.com",
    telefone: ["11 996999999", "11 995599999"], // Mais facil guardar dados iguais em listas
};


cliente.endereco = [
    {
        rua: "R. Tiradentes",
        numero: 573,
        apartamento: true,
        complemento: "ap 934",
    },
];

cliente.endereco.push({
    rua: "R. Joseph Leader",
    numero: 444,
    apartamento: false,
});

// Utilizar esses métodos, para facilitar e fazer seleçoes ou relatórios.

const listaApenasApartamentos = cliente.endereco.filter (
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);