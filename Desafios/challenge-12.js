;(function () {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
  `name`: String
  `lastname`: String
  `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  let person = {
    name: 'Guilherme',
    lastname: 'Oliveira',
    age: 25
  }
  console.log('Propriedades de "person":')

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */

  console.log(Object.keys(person).join(', '))

  /*
  Crie um array vazio chamado `books`.
  */
  let books = []

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  let livro1 = {
    name: 'Chapeuzinho',
    pages: 54
  }
  let livro2 = {
    name: 'Branca de neve',
    pages: 58
  }
  let livro3 = {
    name: 'Moby pato',
    pages: 89
  }
  books.push(livro1)
  books.push(livro2)
  books.push(livro3)
  console.log('\nLista de livros:');

  /*
  Mostre no console todos os livros.
  */
  console.log(books)

  console.log('\nLivro que está sendo removido:')
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop())

  console.log('\nAgora sobraram somente os livros:')
  /*
  Mostre no console os livros restantes.
  */
  console.log(books)
  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  books = books.map(JSON.stringify)
  console.log('\nLivros em formato string:')

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books)

  /*
  Converta os livros novamente para objeto.
  */
  books = books.map(JSON.parse)
  console.log('\nAgora os livros são objetos novamente:')
  console.log(books)
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
  "[PROPRIEDADE]: [VALOR]"
  */
  books.forEach(function (book) {
    Object.keys(book).forEach(function (prop) {
      console.log(`${prop}: ${book[prop]}`)
    })
  })

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  // 
  let myName = 'Guilherme'.split('')
  console.log('\nMeu nome é:');
  console.log(myName)
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''))

  console.log('\nMeu nome invertido é:')

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse().join(''))

  console.log('\nAgora em ordem alfabética:')
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort())
})()
