/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var qualquer = [1,5432,64,'fdsf',(x)=>x*2, {a:4}]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

var retornaArray = (array) => array

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

retornaArray(qualquer)[2]
console.log(retornaArray(qualquer)[4](8))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

var funcaoDoisParametros = (arrayValores, numero) => arrayValores[numero]

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var arrayCincoValores = ['2',2,(x) => x*2, true, 2.4]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

console.log(funcaoDoisParametros(arrayCincoValores,0))
console.log(funcaoDoisParametros(arrayCincoValores,1))
console.log(funcaoDoisParametros(arrayCincoValores,2))
console.log(funcaoDoisParametros(arrayCincoValores,3))
console.log(funcaoDoisParametros(arrayCincoValores,4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

var book = (nome) => {
    var biblioteca = {
        'Segredos de uma batata':    
            {
                quantidadePaginas:2,
                autor:'Joao',
                editora:'pinguin'
            },
        'Haly Pota':    
            {
                quantidadePaginas:2,
                autor:'Joao',
                editora:'pinguin'
            },
        'O homem porco':    
            {
                quantidadePaginas:2,
                autor:'Joao',
                editora:'pinguin'
            }
    }
    return biblioteca[nome] || biblioteca
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var bookName = 'Haly Pota'
console.log(`O livro ${bookName} tem ${book(bookName).quantidadePaginas}`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log(`O autor do livro ${bookName} é ${book(bookName).autor}`)


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}`)
