/**
 * Funções
 * - Parâmetros e argumentos ->
 *      - Ao criar uma função, definimos os PARÂMETROS
 *      - Ao executar uma função, passamos os ARGUMENTOS
 * - função callback ->
 *      - é uma função que entregamos para outra função executar no momento que ela quiser
 * - Quando não definimos o return em uma função, ela irá nos retornar undefined
 * - Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele (escopo)
 * - Funções sempre conseguem acessar variáveis que foram criadas no contexto PAI
 * - Hoisting -> 
 *      - Ao ler o seu arquivo, o JS vai "jogando" as variáveis e funções para o topo, e após isso passa a executar o que precisar
 */













//Exercícios de funções
const randomColor = (cor) => {
    if (cor === 'verde') {
        return 'Eu sou muito palmeirense'
    }
    if (cor === 'azul') {
        return 'Eu gosto de praia haha'
    }
    return 'Eu não gosto de nada!'
}

// console.log(randomColor('verde'))
// console.log(randomColor());

//exercicio
// Crie uma função para verificar se um valor é Truthy

const isValueTrue = (value) => {
    if (value) {
        return "O valor é verdadeiro"
    }
    return "O valor é falso"
}

// console.log(true);


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

const calculateSquarePerimeter = (ladoA, ladoB, ladoC, ladoD) => {
    const valueCalculated = ladoA + ladoB + ladoC + ladoD

    return valueCalculated
}

// console.log(calculateSquarePerimeter(10, 5, 7, 8))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

const myFullName = (name, surname) => {
    return `Meu nome completo é ${name} ${surname}`
}

// console.log(myFullName("Felipe", "Oliveira"));


// Crie uma função que verifica se um número é par

const verifyPairNumber = (number) => {
    if(number % 2 === 0) {
        return "O número é par"
    }
    return "O número é ímpar"
}

// para selecionar uma linha ou mais e repetí-la nas linhas abaixo, usamos o atalho Shift + Alt + seta pra baixo
// console.log(verifyPairNumber(3));
// console.log(verifyPairNumber(5));
// console.log(verifyPairNumber(8));



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

const showTypeOfArgument = (value) => {
    return typeof value
}

// console.log(showTypeOfArgument('oi sou um texto'));
// console.log(showTypeOfArgument(45));
// console.log(showTypeOfArgument(true));


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

const myName = "Felipe";
const mySurname = "Oliveira";

addEventListener('scroll', () => {
    // console.log( `${myName} ${mySurname}`)
})

// Corrija o erro abaixo
  var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

/**-------------------------------------------------------------------------- */
