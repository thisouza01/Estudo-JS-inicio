const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find(item => item[chave].includes(valor));
}

// Explicando em cima
// No return, coloco a lista que eu vou procurar, uso o .find, justamente para achar oque eu preciso
// dentro dos parametros dele
// passo que quero o no item, procurar nas chaves dele o valor correspondente
// ao qual passei abaixo.

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860"); // UNDEFINED o array de telefone, tem dois numeros
// Porem usando o método .includes, passamos o valor como parâmetro.

console.log(encontrado2);