var aula = {}

// =========================================================================
// ==========================   AULA 01   ==================================
// =========================================================================
// -- AULA 1.02: Variáveis e tipos de dados ---------------------------- 
    var aula2 = `- NUll e nenhum valor
    - UNDEFINERD é a ausência de valor
        - Mais usado quando a variável não existe
    - Javascript na verdade não existe arrays, são tudo objeto
    `


// -- AULA 1.03: Operadoes ---------------------------------------------
    var aula3 = ` +,  -,  *,  /,  ++,  --,  +=,  -=,  *=,  /= `

// -- AULA 1.04: Operadoes de Igualdade e relacionais ------------------
    var aula4 = `
    == , != 
    1 == '1' -> true
    1 === '1' -> false 
    Javascript é uma linguagem de tipagem fraca e dinâmica
    <, >, <=, >=
    `

// -- AULA 1.05: Funções -----------------------------------------------
    var aula5 = `
    Sintaxe e semântica de como criar uma função (argumentos, return, e outra coisas )
    Um pouquinho sobre escopo de variável
    `

// -- AULA 1.06: desafio da semans -------------------------------------

    var aula6 = `
    DESAFIO
    `

    // # Desafio Semana #1
    // Declarar uma variável chamada `myvar`, sem valor.
    var myvar;

    // Após declarada, atribua o valor 10 à variável `myvar`.
    myvar = 10;

    // Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
    var soma = 15 + 8;

    // Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
    soma ++;

    // Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
    soma *= 3;

    // Qual é o valor da variável `soma` até aqui?
    72;

    // Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
    var souninja = true;

    // Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
    var comida = ['arroz', 'feijão', 'ovo'];

    // Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
    comida[1];

    // Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
    soma === myvar;

    // Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
    myvar <= soma;

    // Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
    function divisao(a, b) { return a / b };

    // Invoque a função criada acima, passando os parâmetros 10 e 2.
    divisao(10, 2);





// =========================================================================
// ==========================   AULA 02   ==================================
// =========================================================================
// -- AULA 2.01 Operadores lógicos -------------------------------------

    var aula7 = ``
// -- AULA 2.02: Operadores unários ------------------------------------
    var aula8 = ``
// -- AULA 2.03: Estrutura Léxica --------------------------------------
    var aula9 = ``

// -- AULA 2.05: Instrução condicional IF ------------------------------
    var aula10 = `So ensinando como funciona o IF mesmo`
// -- AULA 2.06: DESAFIO SEMANA 02 -------------------------------------

    var desafio02 = `Aqui ele explica como é feito as funções do GIT para fazer as coisas`
// =========================================================================
// ==========================   AULA 03   ==================================
// =========================================================================
// -- AULA 3.01: Estrutura Léxica --------------------------------------
var aula11 = 
`
Tipos primitivos
    - number
    - string
    - boolean
    - null e undefined 
Tipos de objeto

Conjunto de propriedades  ()
{propriedade:'valor'}
Apenas mostrou como criar objetos e acessas suas propriedades 

- Funções são onjetos de primeira classe no javascript
`
var myvar = function() {return 'variável myvar'}

// -- AULA 3.02: Métodos de objetos --------------------------------------

var aula12 = ` 
    Objeto pode ter propriedas cada propriedade tem um valor e este valor pode ser um objeto
`
var pessoa = {
    nome: "Fernando",
    idade: 30,
    altura: 1.85,
    peso: 85
}

pessoa = {sexo:'masculino'}
"Aqui eu perdi tudo do objeto"
var pessoa = {
    nome: "Fernando",
    idade: 30,
    altura: 1.85,
    peso: 85,
    sexo: 'masculino'
}

pessoa.cor = 'caucasiano' //Assim nós não perdemos 
pessoa.andar = () => {console.log('Pessoa andando')}
//pessoa. 