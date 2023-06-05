const senhasGeradas = [];
const senhas = [];
let limite = 1;

function geraSenha () {
    const senha = Math.random().toString(36).slice(5);

    return senha;
}

for(let i = 0; i < 10; i++) {

    posicao = senhas.indexOf(geraSenha()); 
    
    if (posicao < 0) {                                       
        senhas.push(geraSenha())
        limite = limite + 1
    }
};
    
senhasGeradas.push(senhas);


console.log(...senhasGeradas);


