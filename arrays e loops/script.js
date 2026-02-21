
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
