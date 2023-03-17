// Ordem dos parâmetros
    function nomeIdade (nome , idade) {
        return `meu nome é ${nome} e minha idade é 
        ${idade}`;
    }
    // Tomar cuidado com contas, para nao alterar os divisores
    //console.log (nomeIdade(40, "Thiago"))

    //

    // Função dentro de função

    function soma(num1 , num2) {
        return num1 + num2;
    }

                    //Dando um valor fixo para ambos
    function multiplica(num1 = 1 , num2 = 1) {
        return num1 * num2;
    }
 
    console.log(multiplica(soma(5, 5), soma(3, 3)))

    // Caso tenha apenas um parâmetro na função multiplica

    //console.log(multiplica(soma(5, 5), )) // NaN

