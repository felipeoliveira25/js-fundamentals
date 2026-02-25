
/**
 * Diferença entre forEach e map:
 *
 * - Ambos iteram sobre cada elemento do array.
 * - Ambos recebem uma função callback.
 *
 * forEach:
 * - Executa a callback para cada elemento.
 * - Não retorna um novo array.
 * - Sempre retorna undefined.
 * - Usado quando queremos apenas executar efeitos colaterais
 *   (ex: logar algo, alterar variável externa, etc).
 *
 * map:
 * - Executa a callback para cada elemento.
 * - Retorna um novo array com os valores retornados da callback.
 * - Não altera o array original.
 * - Usado quando queremos transformar os dados.
 * 
 * RESUMINDO:
 * - forEach -> para executar algo
 * - map -> para transformar dados
 * 
 * INFORMAÇÃO:
 * - o map sempre precisa retornar algo, se você não retornar ele cria um array de undefined
 */
const myArrayWithNumbers = [4, 7, 9, 13, 38];

const forEachTest = myArrayWithNumbers.forEach((number) => {
    const finalNumber = number * 4;
    return finalNumber
})
console.log("🚀 ~ forEachTest:", forEachTest) //undefined

const mapTest = myArrayWithNumbers.map((number) => {
    const finalNumber = number * 3;
    return finalNumber
})
console.log("🚀 ~ mapTest:", mapTest) //[12,21,27,39, 114]


//Exercício
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const brazilWorldCups = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

brazilWorldCups.forEach((cup) => {
    console.log(`O Brasil ganhou a copa de ${cup}`);
    
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(i = 0; i <= frutas.length; i++) {
    if(frutas[i] === 'Pera') break

    console.log(frutas[i]);
    
}

frutas.forEach((fruta) => {
    if(fruta === 'Uva') return

    console.log(fruta);
    
})
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const lastFruit = frutas[frutas.length - 1]
console.log("🚀 ~ lastFruit:", lastFruit)

