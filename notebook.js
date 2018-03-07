const aulas = {}
const importantes = []

aulas[1] = {}
aulas[2] = {}
aulas[3] = {}
aulas[4] = {}
aulas[5] = {}
aulas[6] = {}
aulas[7] = {}
aulas[8] = {}
aulas[9] = {}
aulas[10] = {}
// aulas[11] = {}
// aulas[12] = {}
// aulas[13] = {}
// aulas[14] = {}
// aulas[15] = {}
// aulas[16] = {}
// aulas[17] = {}
// aulas[18] = {}
// aulas[19] = {}
// aulas[20] = {}
// aulas[21] = {}
// aulas[22] = {}
// aulas[23] = {}
// aulas[24] = {}
// aulas[25] = {}
// aulas[26] = {}
// aulas[27] = {}
// aulas[28] = {}
// aulas[29] = {}
// aulas[30] = {}
// aulas[31] = {}
// aulas[32] = {}
// aulas[33] = {}
// aulas[34] = {}
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
    console.log(Num:  num Arroz:  arroz)

    Num: 0 Arroz:3
    Num: 1 Arroz:6
    Num: 2 Arroz:9
    `

var num = 0
//while (num < 20) console.log(num++)

//for( var num = 0, arroz=3; num < 10, arroz<10; num ++, arroz+3) console.log(`Num: ${num} Arroz:${arroz}`)


aulas[7][4] = aula23
importantes.push(aula23)

// --AULA 7.05: desafio--------------------------------------

// =========================================================================
// ==========================   AULA 08   ==================================
// =========================================================================
aulas[8] = {}
// -- AULA 8.01: Operador modular --------------------------------------
var aula24 = `nomear funções
    - funções como tudo no js é um objeto e contém propriedades
        - ex.: name ->
            var func = function () {return 'hi';}
            func.name // ''
        - invocação é usando o parenteses, se eu não invocar a função 
        - Ao atribuir função a uma variável parece, que na versão do JS dele, que este valor era perdido.
            - Usando o quolla aqui não consegui encontrar problema, imprimiu o nome da func 
        var func = function () { return 'hi'; }
        var func2 = function minhaFuncao() { return 'hi'; }
        console.log(func())
        console.log(func.name) //func
        console.log(func2.name) //minhaFuncao
            - a variável apenas recebe a função mas o nome dela é a que é definida
        - função sem nome é uma função anonima
`
var func = function () { return 'hi'; }
var func2 = function minhaFuncao () { return 'hi'; }
console.log(func())
console.log(func.name)
console.log(func2.name)

aulas[8][1] = aula24
importantes.push(aula24)
// -- AULA 8.02: introdução à programação funcional --------------------------------------
var aula25 = `
    Programação funcional em JS
        - formato como escrevemos as cosias é baseado em funções 
        - Para escrever em funcional a linguagem tem que fornecer algumas coisas para nós
        - funções são objetos de primeira classe (ou cidadãos de primeira classe) 
            - significa que as funções tem o mesmo tratamento dos objetos no js
            - Tudo o que conseguimos fazer com objeto em JS conseguimos fazer com funções
    
    Alguns padrões que precisamos aprender para pegar o jeitin
        - Como você usa objetos literais você pode criar funções literais
            var car = { brand: 'chevrolet', model: 'silverado'}; //objeto literal, da forma como ele é apresentado para nós
            function sum(x,y) {return x+y} -> funções literais, são da forma como são apresentadas para nõs
        - Como você atribui objetos à variaveis você também pode atribuir funções
            var obj = {}
            var func = function x () {}
        - Da mesma forma uqe você retorna objetos em uma função podemos retornar uma função
            - function person() {return {name:'fernando'}}
            - person().name // fernando



`
var car = { brand: 'chevrolet', model: 'silverado' }
aulas[8][2] = aula25
importantes.push(aula25)

// -- AULA 8.04: PF parte 3 --------------------------------------
var aula26 = `
    - Da mesma forma uqe você retorna objetos em uma função podemos retornar uma função
        - function person() {return {name:'fernando'}}
        - person().name // fernando
        - function adder(x) {return function addOther (y) {return x+y}}
        function adder(x) { 
            return function addOther(y) { return x + y } 
        }
        var add2 = adder(2)

        console.log(add2.name) //addOther
        console.log(add2(3)) //5
        console.log(adder(5)(3)) //8

        - apenas linguagens que te dão o poder de usar funções como objetos de primeira classe
`

function adder(x) { 
    return function addOther(y) { return x + y } 
}
var add2 = adder(2)

console.log(add2.name)
console.log(add2(3))
console.log(adder(8)(3))

aulas[8][3] = aula26
importantes.push(aula26)

// -- AULA 8.03: PF parte 3 --------------------------------------
var aula27 = `
    - Conseguimos atribuir funções a variáveis, retornar e agora vamos ver que da para passar funções como parâmetros

`

var mycar = { nome: 'xonathan', color: 'vermeio' }
function getCarColor(car) { return car.color }

console.log(getCarColor(mycar))

function showOtherFunction(func) { return func() }
console.log(showOtherFunction(() => 'Function JS NINJA'))
aulas[8][4] = aula27
importantes.push(aula27)
// -- AULA 8.05: DESAFIO --------------------------------------

// =========================================================================
// ==========================   AULA 09   ==================================
// =========================================================================
aulas[9] = {}
// -- AULA 9.01: Funções dentro de funções (escopos) --------------------------------------
var aula28 = `
    Sabemos que conseguimos colocar uma função dentro de uma função mas como fica  o escopo dessa função
    function myFunc() {
        var n1 = 1
        function sum() {return n1+2}
        return sum();
    }
    console.log(myFunc()) // 3
    // console.log(sum()) //Não funciona, sum não foi definida
    // console.log(n1) //Não funciona, n1 não foi definida

    A sum é uma closure
    Será que o posicionamento muda alguma coisa ?

       function myFunc() {
        function sum() {return n1+2}
        var n1 = 1
        return sum();
    }

    funciona ainda, e agora ?
        function myFunc() {
            var n1 = 1
            return sum();
            function sum() {return n1+2}
        }
    funciona por causa do hoisting!
    Maqueporraèessa
    Hoisting só no próximo vídeo

    `
function myFunc() {
    function sum() {return 1+2}
    return sum();
}
console.log(myFunc())
function myFunc() {
    var n1 = 1
    return sum();
    function sum() { return n1 + 1 }
}
console.log(myFunc())
// console.log(sum()) //Não funciona, sum não foi definida
aulas[9][1] = aula28
// importantes.push(aula28)

// -- AULA 9.02: Hoisting --------------------------------------
var aula29 = `
    Hoisting -> içamento ou elevação
    - Quando a gente declara uma variável depois o JS vai definir ela em cima e atribuir undefined e depois lá em baixo ele vai atribuir um valor a ela
        - Por isso ele fala que é undefined e não que a variável não existe (não definida)
    - Quanto temos uma função literal em JS o mesmo sobe a função para ela valer para todo o escopo
        - Por isso funções literais estão disponiveis em todo o escopo em que estão inseridas mas as que não são (são variáveis que recebem função) não vão funcionar caso estejam depois de um return pelo jeito como o JS trabalha com variáveis
    - Para evitar problemas com hoisting basta declarar todas as variáveis no início da função
-------------
FUNCIONA
-------------
function myFunc() {
    var n1 = 1
    return sum();
    function sum() { return n1 + 1 }
}
console.log(myFunc())

----------
//Não FUNCIONA@
----------
function myFunc() {
    var n1 = 1
    return sum();
    var sum = function() { return n1 + 1 }
}
O que o JS vai fazer é subir a variável com valor undefined mas ela só vai receber um valor quando for executada:

function myFunc() {
    var n1 = 1
    var sum = undefined
    return sum();
    var sum = function() { return n1 + 1 }
}
`
function myFunc() {
    var n1 = 1
    return sum();
    function sum() { return n1 + 1 }
}
console.log(myFunc())

//JS não faz o hoisting
// function myFunc() {
//     var n1 = 1
//     return sum();
//     var sum = function() { return n1 + 1 }
// }
// console.log(myFunc())
//PQ ISSO FUNCIONA (Qquestion)
aulas[9][2] = aula29
importantes.push(aula29)

// -- AULA 9.03: IIFE --------------------------------------
var aula30 = `
    IFE => IMMEDIATLY FUNCTION EXECUTION
    função auto executável
    - não existe uma forma de executar uma função anonima que não tem um nome e nãpo foi atribuida a nenhuma variável:
        function() {return 1+9} //Não conseguimos executar ela 
        Se eu colocar ela em parênteses ela é uma expressão
            (function(){console.log('hahaha')})
            E agora eu posso chamar essa expressão
            (function(){console.log('hahaha')})() // hahaha
            ((function(){console.log('hahaha')})()) // hahaha
    - Lembre-se de colcoar o ';' antes pq se não ele vai entender que é a continuação da expressão anterior
    - Qual é a vantagem
        - quando eu executo uma IFE eu não preciso ter um escopo global
        - ter um escopo global é uma merda por N motivos pois compartilha informação com todo o projeto e podemos perder o controle de variáveis e funções em escopos globais
/`
function sum() {return 1+2}
var sum2 = function() {return 2+3}
var sum3 = function otherSum() {return 2+3}
console.log(sum())
console.log(sum2())
console.log(sum3());
// console.log((function () { return 1 + 9 })())
(function () {
    console.log('hahaha')
})()
// function(){ console.log('hahaha')}()
// console.log(otherSum()) //otherSum is not defined

aulas[9][3] = aula30
importantes.push(aula30)

// -- AULA 9.04: DESAFIO --------------------------------------



// =========================================================================
// ==========================   AULA 10   ==================================
// =========================================================================



// -- AULA 10.01: DESAFIO --------------------------------------
var aula31 = `
`
aulas[10][1] = aula31
// importantes.push(aula31)