import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

// const novoUser = new User('Thiago', 't@t.com', '2021-02-05')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin('Gabi', 'g@g.com', '2021-02-05')
// console.log(novoAdmin.nome) // nao chamo nome como uma função, mas sim como uma propriedade
// novoAdmin.nome = 'André'
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Renato', 'r@r.com', '2021-02-06')
console.log(novoDocente.exibirInfos())