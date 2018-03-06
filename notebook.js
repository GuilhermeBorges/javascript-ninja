const aulas = {}
const importantes = []
// =========================================================================
// ==========================   AULA 01   ==================================
// =========================================================================
// -- AULA 1.02: Variáveis e tipos de dados ---------------------------- 
    var aula2 = `- NUll e nenhum valor
    - UNDEFINERD é a ausência de valor
        - Mais usado quando a variável não existe
    - Javascript na verdade não existe arrays, são tudo objeto
    `

    aulas[1] = {}
    [2] = aula2

// -- AULA 1.03: Operadoes ---------------------------------------------
    var aula3 = ` +,  -,  *,  /,  ++,  --,  +=,  -=,  *=,  /= `
    aulas[1][3] = aula3
// -- AULA 1.04: Operadoes de Igualdade e relacionais ------------------
    var aula4 = `
    == , != 
    1 == '1' -> true
    1 === '1' -> false 
    Javascript é uma linguagem de tipagem fraca e dinâmica
    <, >, <=, >=
    `
    aulas[1][4] = aula4
// -- AULA 1.05: Funções -----------------------------------------------
    var aula5 = `
    Sintaxe e semântica de como criar uma função (argumentos, return, e outra coisas )
    Um pouquinho sobre escopo de variável
    `
    aulas[1][5] = aula5
// -- AULA 1.06: desafio da semans -------------------------------------

    var aula6 = `
    DESAFIO
    `
    aulas[1][6] = aula6

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
    aulas[2] = {}
    var aula10 = `So ensinando como funciona o IF mesmo`
// -- AULA 2.06: DESAFIO SEMANA 02 -------------------------------------
    aulas[2][5] = aula10
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

aulas[3] = {}
aulas[3][1] = aula11
// -- AULA 3.02: Métodos de objetos --------------------------------------

var aula12 = ` 
    Objeto pode ter propriedas cada propriedade tem um valor e este valor pode ser um objeto
`
aulas[3][2] = aula12
var pessoa = {
    nome: "Fernando",
    idade: 30,
    altura: 1.85,
    peso: 85
}

pessoa = {sexo:'masculino'}
"Aqui eu perdi tudo do objeto"
var pessoa = {
    nome: "Guilherme",
    idade: 30,
    altura: 1.85,
    peso: 85,
    sexo: 'masculino',
    sobrenome: 'Borges'
}

pessoa.cor = 'caucasiano' //Assim nós não perdemos 
pessoa.andar = () => {console.log('Pessoa andando')}
pessoa.aniversario = () => pessoa.idade++
pessoa.nomeCompleto = () => (`${pessoa.nome} ${pessoa.sobrenome}`)
//pessoa. 
pessoa.aniversario()
pessoa.nomeCompleto()
console.log(pessoa.nomeCompleto())
pessoa

// =========================================================================
// ==========================   AULA 04   ==================================
// =========================================================================
// -- AULA 4.01: Truthy e Falsy --------------------------------------
aulas[4] = {}
var aula13 = `
    
    Falsy => todo valor que é representado por false
        - 0
        - undefined
        - null
        - NaN
        - 0
        - -0
        - '' 
        - ""
        - false
    Truthy => todo valor que é representado por true
        - 1
        - string com valor (ex.: 'Gui')
        - {}
        - []
        - true
        - qualquer outro valor diferente do falsy serão truthy!

    como descobrir? 
        !! (usar dois de bolleano converterm para boolean)
        !!'' -> false
    `

console.log(!! 0)
console.log(!! undefined)
console.log(!! null)
console.log(!! NaN)
console.log(!! 0)
console.log(!! - 0)
console.log(!! '')
console.log(!! "")
console.log(!! false)
importantes.push(aula13)
aulas[4][1] = aula13
// -- AULA 4.02: Condicional ternário --------------------------------
var aula14 = `
    condição ? true : false
`
aulas[4][2] = aula14
// -- AULA 4.03: Escopo de variáveis ---------------------------------

var aula15 = `
    - Escopo é o local onde declaramos a variável
    - Escopo global é um problema muito grande! 
        -Pode atrapalhar bastante
    - Function cria um escopo local. Ao criar fora de uma function é um escopo global
    - Garbage collector: quando vocÊ cria uma variavel dentro de um escopo local ela só vai aparecer dentro dessa função. A partid do momento que chamamos a função, criamos a variável e não vamos usá-la em lugar nenhum o JS livra ela da memório
    - Sempre usar var/let/const para criar variável (conseguimos criar uma variavel sem uasr o var). Js entende que está criando a variável dentro do escopo global, memso que você a crie em um escopo local 

        function newFunction() {
            myVar = 'variavelGlobal'
            return myVar
        }
        console.log(myVar) // -> myVar is not defined
        newFunction() // A partir do momento que eu chamar essa função a variável vai começara a existir
        console.log(myVar) // -> variavelGlobal

        - JS não vai conseguir usar o GL nesta variável e se ela tiver um tamanho grande pode dar merda

    `

function newFunction() {
    myVar = 'variavelGlobal'
    return myVar
}
//console.log(myVar) -> not defined
newFunction()
console.log(myVar)

aulas[4][3] = aula15
importantes.push(aula15)
// -- AULA 4.04: Desafio --------------------------------------



// =========================================================================
// ==========================   AULA 05   ==================================
// =========================================================================
// -- AULA 5.01: Funções --------------------------------------
var aula16 = `Ensinado quais são os retornos de unfções e acesso`
aulas[5] = {}
aulas[5][1]=aula16
// -- AULA 5.02: Funções --------------------------------------
var aula17 = `Falando sobre poder receber objetos, arrays e outras coisas como argumentos`
aulas[5][2] = aula17
// -- AULA 5.03: DESAFIO --------------------------------------

// =========================================================================
// ==========================   AULA 06   ==================================
// =========================================================================
// -- AULA 6.01: Operador virgula --------------------------------------
var aula18 = `Separar algumas instruções e juntar em uma só
    var a,b =2,c -> a=2 b=c
    function myFunc() {
        var x = 0;
        return (x+=1,x);
    }

    const x = (x) => (x*=2,x+=1,x)
    console.log(x(2)) -> retorna 5!!!!! <3

    Começou a falar do switch

    Dentro de um swith se eu não colocar o break ele continua avaliando as outras instruções (ex.: case 1: x++ case 2: console.log)
        var x = 1
        switch(x){
            case 1: x++
            case 2:console.log(x)
        }

        Ele vai imprimir 2 além de cair no default
`
function myFunc() {
    var x = 0;
    return (x,x += 1, x);
}
console.log(myFunc())

var x = (x) => (x *= 2, x += 1, x)
console.log(x(2))
aulas[6] = {}
aulas[6][1]=aula18
importantes.push(aula18)
// -- AULA 6.02: Estrutura de repetição (WHILE) --------------------------------------
var aula19 = `Falando sobre while`
aulas[6][2] = aula19

// -- AULA 6.03: DESAFIO --------------------------------------


// =========================================================================
// ==========================   AULA 07   ==================================
// =========================================================================
aulas[7] = {}
// -- AULA 7.01: Operador modular --------------------------------------
var aula20 = `apenas o operador mesmo`
aulas[7][1] = aula20
// -- AULA 7.02: Arrays = length --------------------------------------
var aula21 = `
    Array pe um tipo de objeto js que tem algumas propriedades
        - length: quantidade de elementos no array
    arr = [1,3,5,5]
    qtd = arr.length
    while(qtd>0)
        console.log (arr[--qtd])
    `
aulas[7][2] = aula21

// --AULA 7.03: Arrays push--------------------------------------
var aula22 = `
    propriedade push
    `
aulas[7][3] = aula22

// --AULA 7.04: Arrays push--------------------------------------
var aula23 = `
    propriedade push -> empurrar um valor par adentro do array
    Estrutura de repetição for(init, condition, final-expression)
        o init permite com que façamos quantoas iniciações quisermos
            for(var num = 2, arroz = 3; num <5; num++)


    for (var num = 0, arroz = 3; num < 10, arroz < 10; num++ , arroz +=3)
    console.log(Num: ${ num } Arroz: ${ arroz })

    Num: 0 Arroz:3
    Num: 1 Arroz:6
    Num: 2 Arroz:9
    `

var num = 0
while (num < 20) console.log(num++)

for( var num = 0, arroz=3; num < 10, arroz<10; num ++, arroz+3) console.log(`Num: ${num} Arroz:${arroz}`)


aulas[7][4] = aula23
importantes.push(aula23)

// --AULA 7.05: desafio--------------------------------------