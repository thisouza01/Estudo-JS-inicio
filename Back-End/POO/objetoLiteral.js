const user = {
    nome: "Thiago",
    email: "y@t.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome:"Mariana",
    email:"ma@ma.com",
    role:"admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user) // primeiro parâmetro, objeto que vai herdar as propriedades e qual vai sede-las
admin.criarCurso()
admin.exibirInfos()















// // user.exibirInfos();
// // const exibir = user.exibirInfos;
// // exibir()

// const exibir = function () {
//     console.log(this.nome)
// };

// const exibirNome = exibir.bind(user); // metodo do .this / para ligar o valor de this a ium contexto
// exibirNome();
// exibir();