// Objeto Literal

const objectLiteral = {

};

// Construtor de objeto

const objectConstructor = new Object();

class Personagem {
    constructor(name, race, weapon, age) {
        this.name = name;
        this.race = race;
        this.weapon = weapon;
        this.age = age;
    }

    greet() {
        return `Hi, my name is ${this.name}!`;
    }

    fight() {
        return `${this.name} attacks with a ${this.weapon}`
    }
}


const person1 = new Personagem('Trevus', 'Golem', 'Giant Staff of Gods', "531");
const person2 = new Personagem('Abelios', 'Angel', 'Death Sickle', '2023');

// Chamadas de funçoes criadas
console.log(person1.greet());
console.log(person2.fight());

// Ambos executam do msm jeito
console.log(person1.age);
console.log(person2["race"]);

// Update no objeto weapon
person1.weapon = 'Enourmous Axe';
console.log(person1)

// Remove algo da escolha
delete person2.weapon;
console.log(person2)

// For ... in => iterar sobre as propriedades de um objeto
for(let key in person1) {
    console.log(key.toUpperCase() + ':', person1[key]);
}

// Método para retornar uma matriz das chaves do objeto
console.log(Object.keys(person1));




