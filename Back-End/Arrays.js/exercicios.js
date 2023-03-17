const arrayNumbers = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10
};
                            // .map() ele precisa de uma const, para armazenar seu valor (arraySomada) => (multiplicaPorDez)
const arraySomada = arrayNumbers.map(multiplicaPorDez);
     // Podemos substituir por **** (num => num * 10) ****

// Este callback retorna um valor, por isso devemos ter uma const para armazena-lo

console.log (arraySomada);  