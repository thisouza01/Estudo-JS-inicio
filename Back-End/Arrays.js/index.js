// Array com 3 posições, porem nem=nhuma existe

const arrayVazia = [,,,];

console.log(arrayVazia) // 3 empty items
console.log(arrayVazia.length) // 3
console.log(arrayVazia[0]) //undefined
console.log(arrayVazia[1]) //undefined
console.log(arrayVazia[2]) //undefined

// Array com .push()

console.log(arrayVazia.length) // 3
arrayVazia.push(50)
console.log(arrayVazia) // 3 empty items, 50
console.log(arrayVazia.length) // 4