const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados); //Object

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString); // Apenas um conjunto de letras
                            // Sem interações ou cores

console.log(typeof clienteEmString); // String

console.log(clienteEmString.nome); // Undefined (não é um objeto)

    //Traduzir ou adequar
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);

// Fiz todos os caminhos de ler um arquivo JSON, depois, transformar em String (para salvar os dados ou fazer algo com eles,
// como comunmente é feito) e terminando o ciclo transformando de volta em Objeto.