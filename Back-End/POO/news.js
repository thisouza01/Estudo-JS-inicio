// function User(nome, email) { //funcao so pode receber um nome com minuscula de começo, a nao ser nesses casos
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }    

// ## Primeira forma de criar um new User

// const novoUser = new User('Thiago', 't@t.com')
// console.log(novoUser.exibirInfos())

// ## Segunda forma usando Object.create()

// function Admin(role) {
//     User.call(this, 'Thiago', 't@t.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role)

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Thiago', 't@t.com')
console.log(novoUser.exibirInfos())