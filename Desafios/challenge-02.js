// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (a, b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var variavel = soma(1, 3) + 5

// Qual o valor atualizado dessa variável?
9;

// Declare uma nova variável, sem valor.
var x;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function somaImprime () {
    x += 2;
    console.log("O valor da variável agora é "+x)
}

// Invoque a função criada acima.
somaImprime();

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é NaN
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function mult3 (a, b, c) {
    return (arguments.length < 3) ?
     'Preencha todos os valores corretamente!'
     : (a * b * c) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
mult3(1,2);
console.log(mult3(1,2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 'Preencha todos os valores corretamente!' */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
mult3(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 8 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function crazy3Args (a, b, c) {
    switch(arguments.length) {
        case 0: return false
        case 1: return a
        case 2: return a + b
        case 3: return (a + b) / c
        default: return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
crazy3Args() // false
crazy3Args(1) // 1
crazy3Args(1,2) // 3
crazy3Args(1,2,3) // 1

console.log(crazy3Args())
console.log(crazy3Args(1))
console.log(crazy3Args(1, 2))
console.log(crazy3Args(1, 2, 3))