## Conditionals

### -> Existem valores que retornam *true* e outros *false* em expressões booleanas.

```js
-> Falsy
if (false)
if (0)      // ou -0
if (NaN)
if (null)
if (undefined)
if ('')     // ou ""

-> Todo o resto é truthy
 ```

 ### -> Nós podemos utilizar os "!!" para que retorne se a variável ou o que estiver sendo verificado é true ou false.

 ### -> Temos os operadores de comparação. Que sempre vão nos retornar um valor booleano. São eles:
    ```js
    10 > 5 // maior que
    10 < 12 // menor que
    10 >= 5 // maior ou igual
    10 <= 12 // menor ou igual
    ```

## -> Temos outros operadores de comparação. Aqueles que verificam se valores são iguais, de forma estrita ou não tão estrita assim:
    ```js
    const myNumber = 10;
    if(myNumber == 10) -> retorna true
    if(myNumber == '10') -> retorna true também, porque ele força o '10' a virar um number e faz a comparação

    if(myNumber === 10) -> retorna true
    if(myNumber === '10') -> retorna false, por ser uma validação estrita, e os valores não possuem o mesmo tipo

    if(myNumber !== 10) -> retorna false, pois o valor é 10 e na condicional estou condicionando para caso a const myNumber seja diferente de 10
    ```

## Operadores lógicos

### && -> compara se uma expressão *e* a outra são verdadeiras. Procura a primeira que for false. Se algum valor for false, não vai continuar a verificar os próximos.

### || -> compara de uma expressão *ou* a outra são verdadeiras. Se qualquer uma das expressões for *true*, esse será o valor retornado, agora se todas forem *false*, irá retornar *false*

## Switch -> usado para comparar uma variável com vários valores. Caso seja igual a alguma, você pode usar a palavra chave *break* para cancelar a continuação da verificação.
