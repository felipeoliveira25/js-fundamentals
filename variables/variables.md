## Variáveis

### Servem para evitar repetições

### Usadas para que peguemos um pedaço da memória para armazenar um valor e não precisar ficar repetindo-o todas as vezes que precisar ser utilizado.

### No JavaScript temos:
    - const
    - let
    - var
    * atualmente, o const é de longe o mais utilizado

### var e let podem ser inicializados sem valores, mas as const's não. Caso tente inicializar const sem valor definido, tomará um erro:
    "'const' declarations must be initialized"
    
### -> É comum nomearmos as variáveis ou constantes em Camel case -> abrirModal 

### Hoisting -> as variáveis quando criadas são movidas para cima do código, porém o valor atribuído não é movido junto. Ou seja:

    ```js
    
        console.log(nome);
        var nome = 'Felipe';
        //o log vai retornar undefined, pois executa como se estivesse da seguinte forma:
        var nome;
        console.log(nome);
        nome = 'Felipe';
    
    -> esse comportamento de hoisting só acontece com o var, pois let e const dão erro ao tentarmos acessar um valor antes do mesmo ser inicializado.
### É possível mudarmos o valor atribuído a variáveis declaradas como let ou var, mas com const isso não é possível:

    ```js
    
        var idade = 28;
        idade = 32;

        let nome = 'Felipe';
        nome = 'Lara';

        const preco = 56;
        preco = 78;
        -> retorna um erro: Assignment to constant variable -> que significa estarmos tentanto atribuir um novo valor a uma constante, isso não é permitido

### const é um valor único, que você não deseja que mude