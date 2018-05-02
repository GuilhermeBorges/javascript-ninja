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
aulas[11] = {}
aulas[12] = {}
aulas[13] = {}
aulas[14] = {}
aulas[15] = {}
aulas[16] = {}
aulas[17] = {}
aulas[18] = {}
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
function myFunc () {
  var x = 0
  return (x,x += 1, x)
}
console.log(myFunc())

var x = (x) => (x *= 2, x += 1, x)
console.log(x(2))
aulas[6] = {}
aulas[6][1] = aula18
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

// -- AULA 10.01: WRAPPER OBJECTS --------------------------------------
var aula31 = `
    Valores primitivos não são objetos
    - Se lee tem propriedades  e métodos ele é um objeto caso contrário ele é um valor primitivo
    var name = 'Daciuk'
    name.length
    Se valors primitivos não são objetos como conseguimos usar propriedades como este length
        -> É aí que entra os wrappers
        -> Contrutores: Criam novos objetos 
            var name = new String('Guilherme')
            var age = new Number(25)
            var ninja = new Boolean(false)
        -> Por debaixo dos panos é isso o que o JS faz
        -> Sempre serão um objeto (valor real é o .valueOf)
            name.valueOf()
        -> Se usarmos sem o NEW eles servem mais de conversores do que construtores
            - var name = String(30)
            - var age = Number('150')
            - var ninja = Boolean(0)
`
aulas[10][1] = aula31
// importantes.push(aula31)

// -- AULA 10.02: COMO TESTAR TIPOS DE VALORES --------------------------------------
var aula32 = `
    COMO TESTAR TIPOS DE VALORES
    typeof <operand>


    typeof undefined // 'undefined'
    typeof function () {} // 'function'
    typeof true // 'boolean'
    typeof 10 // 'Number'
    typeof 'JS ninja' // 'string'
    typeof {} // 'object'
    typeof [] // 'object'
    typeof null // 'object'
`
console.log(typeof undefined) // 'undefined'
console.log(typeof function () { }) // 'function'
console.log(typeof true) // 'boolean'
console.log(typeof 10) // 'number'
console.log(typeof 'JS ninja') // 'string'
console.log(typeof {}) // 'object'
console.log(typeof []) // 'object'
console.log(typeof null) // 'object'

console.log('JS' + 2)
console.log('2' + 2)
console.log(2 + '2')
console.log(2 + ['w'])

aulas[10][2] = aula32
// importantes.push(aula32)



// =========================================================================
// ==========================   AULA 11   ==================================
// =========================================================================

// -- AULA 11.01: LAÇOS LOOPS DO WHILE --------------------------------------
let aula33 = `Do while e FOR IN
do {... } while(x < 10)

for in
var car = {
  brand: 'W',
  model: 'Gol',
  year: 2014
}

for (x in car) {
  console.log(x) // brand, model, year
}
for (x in [1, 2, 3, 45]) {
  console.log(x) // 0, 1, 2, 3
}

O for in também pode ser usado para verificar se um objeto tem um elemento

console.log('brand' in car) //true
console.log('wheels' in car) //false
`
car = {
  brand: 'W',
  model: 'Gol',
  year: 2014
}

for (x in car) {
  console.log(x)
}
for (x in [1, 2, 3, 45]) {
  console.log(x)
}
console.log('brand' in car)
console.log('wheels' in car)
aulas[11][1] = aula33
importantes.push(aula33)

// -- AULA 11.02: SALTOS --------------------------------------
let aula34 = `
  - return é considerado um salto que só pode ser executado dentro de funções
    pula o resto das coisas da função
  - break 
    - dentro do switch case
    - dentro de um loop
  - continue
    - quasde a mesma coisa do que o break só que não cancela o loop e sim deixa de executar o que está para baixo e continua para a próxima iteração do loop
`
aulas[11][2] = aula34
// importantes.push(aula34)




// =========================================================================
// ==========================   AULA 12 OBJETOS  ==================================
// =========================================================================

// -- AULA 12.01: OBJETOS --------------------------------------
let aula35 = `
Objetos são:
  - Mutáveis
    - Posso adicionar algo, deletar, alterar uma propriedade
  - Manipulados por referência
    - Mesmo que dois objetos sejam identicos se eu usar o comparador eles não vão ser iguais
      - Isso se deve por eles serem manipulados na memória
      - var objCopy = obj
      - Se eu mudar a prop1 do objCopy ela também será alterada no obj
  - Criando Objetos:
    - Literais
    - Como constructor (new)
      var newObj = new Object() // Mesma coisa que um literal (mas com literal é sempre mais rápido)
    - com Object.create()
      var obj = Object.create() // retorna um erro
  - Prototipo
    - Objeto tem uma propriedade chamada protótipo (Object.prototype)
    - herda do protótipo do próprio objeto
      - Object.prototype
    - Todo objeto herda de Object.prototype menos o próprio Object.prototype
`

var obj1 = {prop1: 'prop1', prop2: 'prop2'}
var obj2 = {prop1: 'prop1', prop2: 'prop2'}

console.log(obj1)
obj1.prop1 = 'propriedade'
console.log(obj1)
delete obj1.prop1
console.log(obj1)
var objCopy = obj1
console.log(obj1)
console.log(objCopy)
objCopy.a = 'ola'
console.log(obj1)
console.log(objCopy)


aulas[12][1] = aula35

// -- AULA 12.02: Criando objetos --------------------------------------
let aula36 = `
  OBJECT.CREATE
    - Ao usar o Object.create(obj) ele irá copiar todo o objeto para o novo, porém caso mudamos alguma propriedade no pai ele também é mudado.
        - Se mudarmos alguma coisa nele não é alterado no pai
        - Se alterarmos alguma propriedade dentro filho que seja igual ao do pai este vinculo é perdido (ex.: mudamos o valor de uma prop no filho para um valor = X, mudamos no pai para um valor = Y, como o filho já foi modificado ele agora não é mais influenciado)

            var objA = {x: 1, y: 2}
            var objB = Object.create(objA)
            console.log(objA) // {x:1, y:2}
            console.log(objB) // {}
            console.log(objB.prototype) undefined
            console.log(objB.x) 1
            console.log(objB.y) 2

            objA.x = 7
            console.log(objA) // {x:7, y:2}
            console.log(objB) // {}
            console.log(objB.x) // 7
            console.log('x' in objB) true

            objB.x = 10
            console.log(objA) {x:7, y:2}
            console.log(objB) {x: 10}
            console.log(objB.x) 10

            objA.x = 12
            console.log(objB.x) //10
            console.log(objA.x) //12

        - Isso acontece pq esta prop deixa de ser uma pro herdada para ser uma propriedade própria do objeto filho
            console.log(objB.hasOwnProperty('x')) //false -> vem do pai
            objB.x = 10
            console.log(objB.hasOwnProperty('x')) //true -> agora é dele
    - Os valores são literalmente herdados. Se um filho muda o valor não é mudado no pai, porém, caso um pai mude um valor o mesmo é espelhado no filho
    - As propriedades herdadas não são mostradas no console.log mas da para ver quais são as herdades e quais não são
        - Mostrar apenas o que é dele: obj.hasOwnProperty('p') -> Retorna true se a propriedade p for do filho e não herdada
        - Da para usar ela dentro de um foreach para filtar e mostrar apenas as propriedades próprias do objeto
        
`
var objA = {x: 1, y: 2}
var objB = Object.create(objA)
console.log(objA)
console.log(objB)
console.log(objA === objB)
console.log(objB.prototype)
console.log(objB.x)
console.log(objB.y)

objA.x = 7
console.log(objA)
console.log(objB)
console.log(objB.x)
console.log('x' in objB)
console.log(objB.hasOwnProperty('x'))
objB.x = 10
console.log(objB.hasOwnProperty('x'))
console.log(objA)
console.log(objB)
console.log(objB.x)
objA.x = 12
console.log(objB.x)
console.log(objA.x)

aulas[12][2] = aula36
importantes.push(aula36)

// -- AULA 12.03: Object.keys --------------------------------------X

let aula37 = `
    => Operações com objetos
        - Object.keys(obj): retorna um array com todas as propriedades deste objeto
            - Apenas as propriedades qeu são próprias daquele objeto
        - objB.isPrototypeOf(objA) retorna true ou false caso o objeto B seja um objeto que herdou de A
        - JSON.stringify(obj): transforma meu objeto em uma string (como se fosse um JSON)
        - JSON.parse(string): transforma uma string que representa um objeto (em json) em um objeto mesmo
    
    => Drogas com array
        
        let arr = []
        arr[0] = 5
        arr[1] = 10
        arr[12] = 'tretas'
        console.log(arr) // [5, 10, , , , , , , , , , , , 'tretas']
    
    - array.push(item) => adiciona um item no array e retorna o tamanho do array após a inserção
    - array.pop() => remove o item do final e retorna ele

`
console.log(Object.keys(objB))
console.log(Object.keys(Object.create(objA)))
x = { 'a': (a, b) => a + b, 'b': 3 }
console.log(JSON.stringify(x))
aulas[12][3] = aula37

let arr = []
arr[0] = 5
arr[1] = 10
arr[12] = 'tretas'
console.log(arr)
importantes.push(aula37)

// -- AULA 12.04: ARRAYS MÉTODOS --------------------------------------X

let aula38 = `
  => Métodos com array
    -> arr.join(): Retorna uma string que é contatenação de cada elemento de um array separado por vírgula
      -> arr.join(', '): vai usar a virgula e espaço entre os elementos do array
    -> arr.reverse(): reverte os itens do array (modifica o array)
    -> arr.sort() : ordena o array (modifica o array principal)

`

aulas[12][4] = aula38
importantes.push(aula38)



// =========================================================================
// ==========================   AULA 13 OBJETOS  ==================================
// =========================================================================

// -- AULA 13.01: ARRAYS TO STRING, CONCAT, UNSHIFT e SHIFT --------------------------------------
let aula39 = `ARRAYS TO STRING, CONCAT, UNSHIFT e SHIFT
Diferente do push o método concat ele nao faz alterações no array, ele devolve um novo
    - PUSH: Adiciona um item no final
    - CONCAT: adiciona os elementos do array passado como parametro no fim do array
    - POP: remove o último elemento do array e retorna ele
    - UNSHIFT: Adiciona um item no começo do array
    - SHIFT: Remove o primeiro elemento do array (igual o pop só que para o primeiro item)
`

// A diferença do toString para o join é que no Join voc~e tem um parâmetro que deixa você escolher o separador
console.log([1, 2, 3].toString())
console.log(({ a: 1, b: 2, c: 3 }).toString())
let a = [1, 2, 3]
let arrayConcatenado = a.concat(4)
let arrayConcatenado2 = a.concat([4, 5])
console.log(a)
console.log(arrayConcatenado)
console.log(arrayConcatenado2)
a.push([1, 2])
console.log(a)
a.unshift(0)
console.log(a)
aulas[13][1] = aula39
importantes.push(aula39)

// -- AULA 13.02: SLICE e SPLICE --------------------------------------
let aula40 = ` SLICE e SPLICE
    - SLICE: retornar um pedaço do array que selecionamos
        1.p: indice onde queremos começar
        2.p: onde queremos parar
        - Retorna uma array novo, não altera o antigo
        - Podemos uar números negativos
    - SPLICE: Modifica o array principal e pode adicionar ou remover itens
        1.p: onde queremos começar a inserir ou remover itens do array
            - retorna o que foi removido
            - O array original fica sem isso
        2.p: quantos elementos queremos 
        3.p: começa a adicionar itens a partir daquele indice (adiciona o parametro tres)
        n.p: continua adicionando quanto mais parametros mais coisas adiciona
`
console.log(a)
console.log(a.slice(1))
console.log(a.slice(1, 4))
console.log(a.slice(-2, -1))
console.log(a)

console.log(a.splice(3))
console.log(a)
a = a.concat([3, 4, 5])
b = a
console.log(a)
console.log(a.splice(2,1))
console.log(a)
console.log(a.splice(2, 0, 2))
console.log(a)
console.log(a.splice(2, 1, 'a', 'b', 'c', 'd', 'e'))
console.log(a)
console.log(a.splice(2, 5, 2.5))
console.log(a)
aulas[13][2] = aula40

importantes.push(aula40)

// -- AULA 13.03: FOREACH EVERY SOME --------------------------------------
let aula41 = `FOREACH EVERY SOME
  - forEach: executa função passada para cada elemento do array sento o primeiro parâmetro o elemento atual, o segundo o index atual e o terceiro o array
    - O array passado é passado pro referência, ou seja, caso dentro do foreach você mude o valor ele será alterado forevur
  - every: recebe uma função booleana onde a mesma recebe como parametro o item, caso essa função retorne true para cada elemento do array ele retorna true, caso contrário false
  - some: análogo ao every mas retorna true se pele menos um dos elementos retornar verdadeiro 
`

console.log(a)
console.log(a.splice(2, 1))
a.forEach(function (item, index, array) {
  console.log(item, index, array)
  array[index] = item * 2
  console.log(array)
})
console.log(a)

x = a.every(item => item > 3)
console.log(x)
console.log(a.some(item => item > 3))
aulas[13][3] = aula41

// -- AULA 13.04: MAP FILTER --------------------------------------
let aula42 = ` MAP FILTER
  - MAP: recebe uma função como parametro e retorna um novo array com esta função aplicada a cada um dos elementos do array
  - FILTER: faz basicamente o que o map faz mas retorna um novo array onde a função passada sobre o item retorne true
`
a = [1, 2, 3, 4, 5]
console.log(a.map(x => x * 3))
console.log(a)
console.log(a
  .map(x => x * 3)
  .filter(x => x % 2 === 0))
console.log(a)
console.log(a
  .map(x => x * 3)
  .filter(x => x % 2 === 0))
console.log(a)

aulas[13][4] = aula42



// =========================================================================
// ==========================   AULA 14 ARRAYS  ==================================
// =========================================================================

// -- AULA 14.01: Reduce e REduce RIgght --------------------------------------
let aula43 = `REDUCE e REDUCERIGHT
    - REDUCE não modifica o array
        - Valor acumulado
        - Valor atual no array
        - Index
        - Array
    - ReduceRight faz a mesma coia que o reduce só que de trás para frente
`

let arR = [1, 2, 3, 4, 5]
let reduce = arR.reduce(function (acumulado, atual, index, array) {
  return acumulado + atual
}, 0)

let nombrezinhu = ['G', 'u', 'i', 'l', 'h', 'e', 'r', 'm', 'e']
let reduce2 = nombrezinhu.reduce(function (acumulado, atual, index, array) {
  return acumulado + atual
})
console.log(reduce2)

reduce2 = nombrezinhu.reduceRight(function (acumulado, atual, index, array) {
  return acumulado + atual
})
console.log(reduce2)
aulas[14][1] = aula43
importantes.push(aula43)

// -- AULA 14.02: INDEXOF LASTINDEX e ISARRAY --------------------------------------
let aula44 = `INDEXOF LASTINDEX e ISARRAY
  - indexOf()
    - Dado um array do array retorna a posição que o elemento passado está no array ou -1 caso não exista
      - p1: O que queremos procurar
      - p2: A partir de que index queremos procurar (default = 0)
        - Se não passarmos o segundo parâmetro ele pega o primeiro elemento como o inicial e o segundo como o atual na primeira iteração
  - lastIndexOf()
    - Faz exatamente o que o indexOf faz só que começa no final
  - isArray()
    - Retorna true se é um array
    - ah mas qual é o uso disso (int)
      - O typeof[] => retorna Object
      - Ele usa apenas para valores primitivos
      - Ele usa apenas para valores primitivos

      `

console.log(nombrezinhu.indexOf('e'))
console.log(nombrezinhu.indexOf('a'))
console.log(nombrezinhu.indexOf('e', 6))
console.log(nombrezinhu.lastIndexOf('e'))
console.log(nombrezinhu.lastIndexOf('a'))
console.log(nombrezinhu.lastIndexOf('e', 6))
console.log(Array.isArray([]))
console.log(typeof [])

aulas[14][2] = aula44
importantes.push(aula44)

// =========================================================================
// ==========================   AULA 15 THIS  ==================================
// =========================================================================

// -- AULA 15.01: Reduce e REduce RIgght --------------------------------------
let aula45 = `JS NO BROWSER
  - É sempre bom usar uma tag script pegando um arquivo pq a segunda vez que formos carregar a página irá pegar da memória
  - Escopo:
    - Estávamos sempre usando uma IIFE no script e o problema 
`
aulas[15][1] = aula45
// importantes.push(aula45)

// -- AULA 15.02: Reduce e REduce RIgght --------------------------------------
let aula46 = `THIS
  - Aparece em dois lugares:
    1) métodos de objetos
      - Referencia ao próprio objeto
    2) Funções
      - Pode ter dois valores
        1) referência ao objeto global (window dentro do browser , se for no node chamase global)
        2) referencia ao aobjeto instânciado
          - Podemos criar construtores no Js
          function MyConstructor () {
            this.prop1 = 'prop1'
            this.prop2 = 'prop2'
          }
          console.log(MyConstructor()) // vai undefined pq não retorna nada
            -- Ao chamar o construtor como uma função (sem adicionar o new) o this referencia ao objeto global, permitindo com que as coisas como estas sejam feitas:
              console.log(prop1) --> 'prop1' 
              console.log(global.prop1) --> 'prop1' 
          console.log(new MyConstructor()) //Myconstructor { prop1: 'prop1', prop2: 'prop2'}
          {} === {} -> Retorna false pq sempre é atribuido um valor diferente para cada objeto
          new Car() === new Car() -> Retorna false também

  - Escopo       
    var x = 2
    console.log(x) --> 2
    console.log(global.x) --> undefined
    y = 3
    console.log(global.y) --> 3
     -- Tudo que eu não declaro é pendurado na variável global (se fosse nobrowser seria a variável window)
        

`

;((function () {
  var myObject = {
    myProperty: 1,
    init: function () {
      return this // Seria a mesma coisa de retornar o myObject
      // Posso retornar this.myProperty => 1
    }
  }
  console.log(myObject.init())
  console.log(global)
})())

var newObj = new Object()
console.log('newObject', newObj)

function MyConstructor () {
  this.prop1 = 'prop1'
  this.prop2 = 'prop2'
}

console.log(MyConstructor()) // vai undefined pq não retorna nada
console.log(prop1) // vai undefined pq não retorna nada
console.log(new MyConstructor())

var x = 2
console.log(x)
console.log(global.x)
y = 3
console.log(global.y)

aulas[15][2] = aula46
importantes.push(aula46)

// -- AULA 15.03: arugments --------------------------------------
let aula47 = `ARGUMENTS
  - É um objeto arraylike (funciona como array mas não é um array, pelo o console.log é um Iterator)
`

;((function () {
  function myFunction (arg1, arg2) {
    return arguments
  }
  console.log(myFunction())
  console.log(myFunction(1, 2))
})())
aulas[16][1] = aula47
// importantes.push(aula47)

// =========================================================================
// ====   AULA 16 CRIAÇÕES DEVARIÁVEIS SEM O VAR  ==========================
// =========================================================================

// -- AULA 16.01: RUSE STRICT --------------------------------------
let aula48 = `USE STRICT
  - É uma diretiva (apenas uma string mesmo)
    - A partir da ECMA 5 tem isso (todas deste curso)
    - JS tem alguns problemas quanto a declarações de variáveis globais e etc
    - Mesmo colocando uma IIFE se declararmos uma variável dentro dela sem  var/let/const ela fica acessível no escopo global
          ;(function () {
            myVar = 'bananinha'
          })()
          console.log(myVar) --> Bananinha
      - Ao usar o use strict impedimos isso de acontecer
          ;(function () {
            'use strict';
            myVar = 'bananinha' --> dispara o um referenceerror: o disparo é feito aqui dentro não no console.log
          })()
          console.log(myVar) --> nada pq deu erro 
      - É apenas uma string mesmo
      - Colocamos o use strict dentro de uma IIFE que vamos usar pq isso pode quebrar código de terceiros que são colocados no código e aí teríamos que pedir para o pessoal 
  - Javascript chama-se ECMA SCRIPT

`

;(function () {
  let myVar = 'bananinha'
})()
aulas[16][1] = aula48
importantes.push(aula48)

// -- AULA 16.02: use strict e WITH --------------------------------------
let aula49 = `use strict e WITH
  - IFE serve para diminuir o tamanho de um objeto
    - Basicamente ele fala que o objeto passado como parâmetro vai ser o novo escopo do que vem abaixo 
    ;(function () {
      var obj = {
        prop1: {
          prop2: {
            prop3: {
              prop31: 'prop31',
              prop32: 'prop32',
              prop33: 'prop33'
            }
          }
        }
      }
      console.log(obj)
      console.log(obj.prop1)
      console.log(obj.prop1.prop2)
      console.log(obj.prop1.prop2.prop3) // serve para diminuir esse cara aqui
      with (obj.prop1.prop2.prop3) {
        console.log(prop31, prop32, prop33) --> printa bunitin
      }
    })()
  - O problema é que variaveis dentro do with podem ser confundidas com as que estao fora e por isso ele não é permitido quanso usamos o 'use strict'
  - use script faz o this ser undefined ao invés de ficar pendurado à variável global
`
;(function () {
  var obj = {
    prop1: {
      prop2: {
        prop3: {
          prop31: 'prop31',
          prop32: 'prop32',
          prop33: 'prop33'
        }
      }
    }
  }
  console.log(obj)
  console.log(obj.prop1)
  console.log(obj.prop1.prop2)
  console.log(obj.prop1.prop2.prop3) // serve para diminuir esse cara aqui
  with (obj.prop1.prop2.prop3) {
    console.log(prop31, prop32, prop33)
  }
})()
aulas[16][2] = aula49
// importantes.push(aula49)


// -- AULA 16.03: Operador Delete, objeto e funções --------------------------------------
let aula50 = `Operador Delete, objeto e funções
  - Delete não conseguimos deletar variáveis
    - porém, se estivermos no modo user strict, ao tentar deletar uma variável ele dispara um erro (deletar propriedades de objetos continua funcionando corretamente)
  - para objetos as propriedades devem ter nomes diferentes, caso contrário ao usar o modo estrito ele dispara um erro (no modo normal não)
    - O mesmo serve para atributos de funções e etc
`
  ; (function () {
    let x = 2
    let obj = {
      prop1: 'prop1',
      prop2: 'prop2',
      prop3: 'prop3',
      prop3: 'prop3'
    }
    console.log(obj.prop1)
    console.log(delete obj.prop1)
    console.log(obj.prop1)
    console.log(delete x)
    console.log(x)
  })()
aulas[16][3] = aula50
// importantes.push(aula50)


// -- AULA 16.04: Objeto String --------------------------------------
let aula51 = `Objeto String
  - String é um array like object também
  - .length 
    - faz a mesma cosia que o array, retorna a quantidade de caracteres
    - Acontece também pq o javascript transforma tudo em objeto
  - .charAt(index): 
    - diz para nós qual é o caracter no index que passarmos para ele
  - .concat(string)
    - concatena a string (sem modificar a inicial, retorna uma nova string) // mentira, aqui modificou a variável inicial
  - .indexOf (string [,start])
    - retorna a posição da string em que encontra, retornando -1 caso não encontre a string dentro da mesma
    - start é a posição onde queremos começar a varredura
  - .replace(string, newString)
    - substitui um trecho da string por uma nova string
    - Apenas o primeiro encontro (depois veremos como fazer para todas as ocorrências)
    - retorna uma nova string, não modifica o valor real
  - slice (start [, end])
    - funciona igual à de array
    - Não mostra o ultimo index 
    - retorna uma substring
  - split([separador], [limite])
    - Vai tranformar um a string em um array
    - p1: Separador é pelo o que queremos separar, se não tiver este elemento na string ele vai retornar um array contendo um único elemento que é a string inteira
    - O split remove os separadores das strings
      - ex.: console.log(gui.split('e')) => ['guilh', 'rm', '' ]
      - ex.: console.log(gui.split('l')) => ['gui', 'herme']
      - com isso podemos substituir todas as ocorrências por coisas nova usando o join
        => substiruir todos os 'e's de guilherme por 'a's
          => gui.split('e').join('a') -> guilharma
`
;(function () {
  var gui = 'guilherme'
  console.log(gui.length)
  console.log(gui.charAt(2))
  console.log(gui.concat(2))
  console.log(gui)
  console.log(gui.indexOf('e'))
  console.log(gui.indexOf('e', 6))
  console.log(gui.indexOf('j'))
  console.log(gui.indexOf('lher'))
  console.log(gui.indexOf('lheu'))
  console.log(gui.replace('e', 'a'))
  console.log(gui.replace('e', 'a').replace('e', 'a'))
  console.log(gui.slice(2))
  console.log(gui.slice(5, 8))
  console.log(gui.split('l'))
  console.log(gui.split('e'))
  console.log(gui.split('e').join('a'))
  console.log(gui.split('e', ))


})() 
aulas[16][4] = aula51
importantes.push(aula51)



// -- AULA 16.05: Obj String parte 2 --------------------------------------
let aula52 = `Obj String parte 2
  - .substring(start [,end])
    - Basicamente o mesmo que o slice (vai tirar uma string do inicio até o fim se não passar o segundo parâmetro)
    - A principal diferença é que se o número inicial for maior que o final ele vai pegar do fim para o início
    - números negativos ele considera como zero
  - .toLowerCase() -> nome já diz; não modifica a string inicial
  - .toUpperCase() -> nome já diz; não modifica a string inicial
`
;(function () {
  let gui = 'guilherme'
  console.log(gui.substring(2))
  console.log(gui.substring(2, 5))
  console.log(gui.substring(5, 2))
  console.log(gui.substring(5, -2))
  console.log(gui.substring(5, 0))
  console.log(gui.substring(0, 5))
  console.log(gui
      .charAt(0)
      .toUpperCase()
      .concat(gui
        .substring(1)
        .toLowerCase()))
  console.log(gui)

})() 
aulas[16][5] = aula52
importantes.push(aula52)


// =========================================================================
// ====   AULA 17 EXPRESSÕES REGULARES  ====================================
// =========================================================================

// -- AULA 17.01: EXPRESSÕES REGULARES 1/3 --------------------------------------
let aula53 = `EXPRESSÕES REGULARES 1/3
  - Regex servem basicamente para manipular strings
    - Até agora usamos os loops e etc
    - Podemos fazer essas manipulações utilizando REGEX
  - É um itpo primitivo do JS como números, bollean e etc
  - são duas barras /expressão/flags
    - flags:
      -> g : todas as ocorrências (global)
      -> i : ignorando maiúscula e minúscula (ignore case)
  - Obejto RegExp()
  - O objeto string tem uma propriedade chamada .match() que recebe uma regex e retorna a aplicação desta regex na string
    - ex.: console.log(myText.match(myRegex))
`

;(function () {
  let myText = 'Menos desculpas e mais action. Ninguém lembra do médio, foque no excelente. Busque o next level. Bora pra action. Você tá realmente obcecado pelos seus sonhos? Bora pra action. Não adianta ter conhecimento se você não tem action. Busque o next level. Menos desculpas e mais action. O inconformismo é o combustível da alta performance. Bora pra action. Busque o next level. Você nunca vai estar pronto então comece agora. Se é pra entrar no jogo, vai all-in. O inconformismo é o combustível da alta performance. Você tá realmente obcecado pelos seus sonhos? Bora pra action. Se você não vê a oportunidade, ela passa.'
  let myRegex = /de/gi
  console.log(myText.match(myRegex))
})()

aulas[17][1] = aula53
importantes.push(aula53)

// -- AULA 17.02: EXPRESSÕES REGULARES 2/3 --------------------------------------
let aula54 = `EXPRESSÕES REGULARES 2/3
  - Termos
    -> \\: caractere de escape
    -> \\w: caracteres alfanuméricos e _
    -> \\d: números (digits)
    -> []: Classes de caracteres ou listas
      - Posso usar o ou como "|" ou apenas colocando dentro da lista [123] = [1|2|3]
    - (): agrupamemnto de caracteres
  - Sequências
    [0-9]: todos os números (igual a \\d)
    [a-z]: todas as letras minúsculas
    [A-Z]: tpdas as letras maiúsculas
    [a-zA-Z0-9]: todas as letras e números
  - Conseguimos usar isso no método replace
    - myText.replace(/de/g, 'DE')
    - deta forma conseguimos substituir todos os de por DE
    - Ao usar o agrupador () conseguimos dentro do replace referenciar uma captura
      ex.: console.log('meu texto com vários de pq de é bem legal'
        .replace(/(d)(e)/g, '$1$1$2$2')) -> meu texto com vários ddee pq ddee é bem legal
      - Se usarmos sem o parênteses ele substitui por $1$1$2$2 mesmo
    - $n => n-esima captura
    - $& => todas as capturas de uma vez só
      -> são caracteres especiais, não strings (não consigo fazer um .toUpperCase)
      -> console.log(textoLegal
          .replace(/(d)(e)/g, function(capturaTotal, d, e) {
            return (d + e).toUpperCase()
          }))
          
})()

`

;(function () {
  let myText = 'Menos desculpas e mais action. Ninguém lembra do médio, foque no excelente. Busque o next level. Bora pra action. Você tá realmente obcecado pelos seus sonhos? Bora pra action. Não adianta ter conhecimento se você não tem action. Busque o next level. Menos desculpas e mais action. O inconformismo é o combustível da alta performance. Bora pra action. Busque o next level. Você nunca vai estar pronto então comece agora. Se é pra entrar no jogo, vai all-in. O inconformismo é o combustível da alta performance. Você tá realmente obcecado pelos seus sonhos? Bora pra action. Se você não vê a oportunidade, ela passa 2000 km/h.'
  let myRegex = /\w/
  console.log(myText.match(/\w/g)) // retorna todas os chars 
  console.log(myText.match(/\d/g)) 
  console.log(myText.match(/\d\d/g)) 
  console.log(myText.match(/\d\d/g)) 
  console.log(myText.match(/\d\d\d/g)) 
  console.log(myText.match(/[da|de]/g)) 
  console.log(myText.match(/(da)|(de)/g)) 
  console.log(myText.match(/(or)|(ra)/g)) 
  console.log(myText.match(/[0-9A-Za-z]/)) 
  console.log(myText.replace('de', 'DE')) 
  console.log(myText.replace(/você/gi, 'VOCÊ')) 
  let textoLegal = 'meu texto com vários de pq de é bem legal'
  console.log(textoLegal
    .replace(/(d)(e)/g, '$1$1$2$2'))
  console.log(textoLegal
    .replace(/(d)(e)/g, function(capturaTotal, d, e) {
      return (d + e).toUpperCase()
    }))
  console.log('Guilherme'
    .replace(/(\w)(\w)/g, (capturaTotal, letra1, letra2) => letra1.toLowerCase() + letra2.toUpperCase()
    ))
})()

aulas[17][2] = aula54
importantes.push(aula54)

// -- AULA 17.03: EXPRESSÕES REGULARES  3/3 --------------------------------------
let aula55 = `EXPRESSÕES REGULARES 3/3

`

;(function () {
  let myVar = 'bananinha'
})()

aulas[17][3] = aula55
importantes.push(aula55)


// =========================================================================
// ====   AULA 18 CONTINUACAO EXPRESSÕES REGULARES  ====================================
// =========================================================================

// -- AULA 18.01: EXPRESSÕES REGULARES  --------------------------------------
let aula56 = `EXPRESSÕES REGULARES 1/3

`

  ; (function () {
    let myVar = 'bananinha'
  })()

aulas[18][1] = aula56
importantes.push(aula56)

// -- AULA 18.02: EXPRESSÕES REGULARES  --------------------------------------
let aula57 = `EXPRESSÕES REGULARES 2/3

`

  ; (function () {
    let myVar = 'bananinha'
  })()

aulas[18][2] = aula57
importantes.push(aula57)

// -- AULA 18.03: EXPRESSÕES REGULARES  --------------------------------------
let aula58 = `EXPRESSÕES REGULARES 3/3

`

  ; (function () {
    let myVar = 'bananinha'
  })()

aulas[18][3] = aula58
importantes.push(aula58)