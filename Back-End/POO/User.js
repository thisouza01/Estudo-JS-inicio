export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome,sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {    // função acessora - apernar retornam oque estao dentro dela
                    // Lógica de condicional
        return `${this.#nome} ${this.#sobrenome}`
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if(novoNome === '') {
            throw new Error('Formato não válido')
        }

        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome

        this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`
    }
}

// const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
// console.log(novoUser.nome) //'Juliana'
// novoUser.nome = 'Juliana Silva Souza'
// console.log(novoUser.nome) //'Juliana'
// console.log(novoUser.sobrenome) //'Silva Souza'

// sem o encapsulamento o código fica inseguro
// colocando o #nome... nos posibilita a criar uma propiedade privada, que nao pode ser alterada e impossibiliando o acesso de outras partes do codigo
// Nao conseguimos fazer nenhuma alteração da propiedade User, fora de sua classe








