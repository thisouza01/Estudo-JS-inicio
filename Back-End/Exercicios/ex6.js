const indicesEncontrados = [];
const arr = [1, 2, 1, 2, 3, 1, 1];
const elemento = 4;

function contaNumRepetidos() {
    let idc = arr.indexOf(elemento);
    while (idc != -1) {
        indicesEncontrados.push(idc)
        idc = arr.indexOf(elemento, idc + 1);
    }
    return indicesEncontrados
}

contaNumRepetidos();
console.log(indicesEncontrados)