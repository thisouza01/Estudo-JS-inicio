const clientes = require("./clientes.json");

function filtarApartamentosSemComplementos(clientes){
    return clientes.filter((cliente) => {
        return ( cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtarApartamentosSemComplementos(clientes);

console.log(filtrados);
