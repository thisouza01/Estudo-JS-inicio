const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

  // Validar a conta do cliente
  // Recibo / Entrega

  const chavesDoObjet = Object.keys(cliente);

  console.log(chavesDoObjet)

// ! Sinal de exclamação, serve para alterar o valor
// Caso o if funcione so quando for "false", colocando " ! " antes da condição do if
// ele altera o valor de funcionalidade

  if (!chavesDoObjet.includes("enderecos")) {
    console.error("Erro. É necessário ter um enderoço cadastrado.")
  }