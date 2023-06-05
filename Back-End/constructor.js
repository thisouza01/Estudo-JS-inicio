function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// greet() => atribuir métodos diretamente ao prototype ao invés da inicialização

Hero.prototype.greet = function() {
    return `${this.name} says hello.`
}

// Criar um novo construtor a partir do elemento pai

function Mage(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;
}

const hero1 = new Hero('Zurg', 1)
const hero2 = new Mage('Lebron', 3, 'explosives sparks')

console.log(hero2)