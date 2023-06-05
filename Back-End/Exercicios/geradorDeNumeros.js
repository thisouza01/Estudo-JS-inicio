let limite = 1 
numerosGerados = []

while(limite <= 6){ 
    let sorteio = Math.floor(Math.random()* 60);
    posicao = numerosGerados.indexOf(sorteio); 
                                                             //procura dentro do array a posicao do numero sorteado
    if (posicao < 0) {                                       //Se a posição for menor que 0 significa que esse numero não está dentro da array, se ele tiver uma posição, é pq esta dentro do array
     numerosGerados.push(sorteio)
     limite = limite + 1
    }
}




console.log(numerosGerados)