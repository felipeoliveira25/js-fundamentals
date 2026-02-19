// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const myPerson = {
    name: 'Felipe',
    surname: 'Oliveira',
    age: 19,
    role: 'Desenvolvedor de Software',
    showFullName() {
        console.log(`Meu nome completo é ${this.name} ${this.surname}`)
    }
}

myPerson.showFullName()

// Crie um método no objeto anterior, que mostre o seu nome completo
// criei o showFullName

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

console.log(carro);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(viuHomem) {
        if(viuHomem) {
            console.log('auauauau');
            return
        }
        console.log('fico quietinho');
        
    }
}

cachorro.latir(true)