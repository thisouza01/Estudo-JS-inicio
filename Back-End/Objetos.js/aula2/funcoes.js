const cliente = {
    nome: "Thiago",
    idade: 20,
    email: "thiago@firm.com",
    telefone: ["11 996999999", "11 995599999"], // Mais facil guardar dados iguais em listas
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo ) {
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(135);

// This = isso
// Reresenta o objeto atual em que estamos trabalhando