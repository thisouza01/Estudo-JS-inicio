class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level
    }
    // greet() => atribuir métodos diretamente ao prototype ao invés da inicialização
    greet() {
        return `${this.name} says hello.`
    }
}

class Mage extends Hero {
    constructor(name, level, spell) {
        super(name, level);

        this.spell = spell;
    }
}

const hero1 = new Hero('Zurg', 1)
const hero2 = new Mage('Trokus', 6, 'Fire Tornade')

console.log(hero2)