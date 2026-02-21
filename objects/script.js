
/**
 * Objetos
 * - Conjunto de variáveis e funções, que são chamadas de propriedades e métodos
 * - Usam chave e valor
 * - Métodos -> propriedade do objeto que possui uma função no local do seu valor
 * - Objetos servem para organizar o código em pequenas partes reutilizáveis e que possuem certa "conexão" entre si
 * - o "this" representa o contexto de execução atual, ou seja, o objeto ao qual aquela função está vinculada naquele momento.
 *      Ele permite que você acesse propriedades e métodos do próprio objeto dinamicamente, sem precisar saber o nome da variável
 *      que está segurando esse objeto.
 *      Resumindo: o this faz referência ao próprio objeto, retorna o próprio objeto.
 * - Object.hasOwnProperty('propriedade') -> verifica se tenho a propriedade passada como argumento, no meu objeto. Retorna um booleano.
 * - "Tudo é objeto" -> Strings, numbers, booleanos, objetos e mais, possuem propriedades e métodos. Por isso acabam sendo objetos também.
 *      No caso de uma string, por exemplo, ela herda todas as propriedades e métodos do construtor String()
 */











//Exercícios - Objetos
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

/**-------------------------------------------------------------------------------------------------------------------- */