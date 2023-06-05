let i = 0;
let f = 40;
let p = 1;
let distancia = 0;

function atravessaRua () {

    while(i < f) {
        i = i + p;
        distancia++;
    }
    return distancia;
};

atravessaRua();

console.log('A distancia entre o inicio e o fim é de', distancia ,'passos!');

