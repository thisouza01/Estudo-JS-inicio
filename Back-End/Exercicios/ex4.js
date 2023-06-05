const arr = [];
const numerosDeVetor = Math.floor(1 + Math.random()*9);

console.log(numerosDeVetor)
for(let i = 0; i <= numerosDeVetor; i++) {
    arr.push(i);
};
console.log(arr);
arr.reverse();
console.log(arr)
