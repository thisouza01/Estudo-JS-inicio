function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(user, this.nome, this.email)
    }
   }
   
   user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

   // Arrow function não funciona o hoisting, por isso devemos criar a variavel antes da funçãoz

console.log(soma(1, 1));
const soma = (num1, num2) => num1 + num2;