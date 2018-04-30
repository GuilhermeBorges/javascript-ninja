(function () {
  /*
  Envolva todo o código desse desafio em uma IIFE.
  */

  /*
  Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
  elemento será um objeto no formato:
  { number: [NUMBER] }
  Os números devem ser de 1 a 10.
  Mostre esse array no console.
  */
  console.log('Number Objects Array:')
  let numberObjects = Array.from({length: 10}, (i, j) => { return {number: j + 1} })
  console.log(numberObjects)
  /*
  Crie um array chamado `justNumbers`, que terá como elementos somente os
  números do array criado acima. Mostre esse novo array no console.
  */
  console.log('\nJust Numbers:')
  let justNumbers = numberObjects.reduce(function (combinado, atual) {
    combinado.push(atual.number)
    return combinado
  }, [])

  let justNumbers2 = numberObjects.map(a => a.number)
  console.log(justNumbers)
  console.log(justNumbers2)

  /*
  Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
  somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
  no console.
  */
  console.log('\nJust module of division by 2 or 3:')
  // ?
  let justMod2Or3 = justNumbers.filter((n) => n % 2 === 0 || n % 3 === 0)
  let justMod2Or3Reduce = justNumbers.reduce((prev, atual) => {
    if (atual % 2 === 0 || atual % 3 === 0) prev.push(atual)
    return prev
  }, [])
  console.log(justMod2Or3)
  console.log(justMod2Or3Reduce)
  /*
  Declare uma variável chamada operation que receba, do array criado acima,
  um valor reduzido pela seguinte operação:
  - Somar 1 ao último valor retornado
  - Multiplicar o resultado pelo valor atual.
  O cálculo deve começar com zero.
  Mostre o resultado no console.
  */
  console.log('\nOperation:')

  let operation = justMod2Or3.reduce((acumulado, atual) => {
    return (acumulado + 1) * atual
  }, 0)
  console.log(operation)
  /*
  Faça o mesmo cálculo passado acima, mas começando do último item para o
  primeiro. O nome da variável deve ser operation2. Mostre o resultado no
  console.
  */
  console.log('\nOperation 2:')

  let operation2 = justMod2Or3.reduceRight((prev, atual) => {
    return (prev + 1) * atual
  }, 0)
  console.log(operation2)

  /*
  Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
  do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
  a "língua do P".
  PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
  infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
  falada, como se você estivesse falando em código xD
  */
  console.log('\nSeu nome na língua do "P":')

  let name = ['Gui', 'lher', 'me']
  let p = name.reduce((prev, actual) => (prev + 'p' + actual), '')
  console.log(p)

  /*
  Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
  e atribuirá o seu nome invertido (usando o array criado acima).
  */
  console.log('\nInversed Name:')

  let inversedName = name.reduceRight((prev, atual) => {
    return prev + atual.split('').reverse().join('')
  }, '')
  console.log(inversedName)
  /*
  Mostre no console o array `numberObjects`.
  */
  console.log('\nNumber objects')

  console.log(numberObjects)
  /*
  Verifique se existem em algum índice de numberObjects um objeto ìgual a
  { number: 2 }. Se houver, mostre no console:
  - "Existe um objeto { number: 2 } em numberObjects!"
  Senão, mostre a frase:
  - "Não existe um objeto { number: 2 } em numberObjects :("
  Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
  o que acontece )
  */
  console.log('\nExiste um { number: 2 } em numberObjects?')
  let existe = numberObjects.indexOf({ number: 2 })
  console.log('Quando criamos um objecto ele cria uma identificação única na memória, um objeto nunca será igual a outro')

  let funcionaria = numberObjects[1]
  console.log(numberObjects.indexOf(funcionaria))

  let existe2 = numberObjects.reduce((p, a) => (a.number === 2) ? true : p, false)
  let texto = (existe2) ? 'Existe um objeto { number: 2 } em numberObjects!' : 'Não existe um objeto { number: 2 } em numberObjects!'
  console.log(texto)
  /*
  Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
  será que obtemos um resul tado diferente? Faça a busca a partir do índice 2.
  */
  console.log('\nE buscando a partir do último índice, o { number: 2 } existe?')
  // let existeInvertido = numberObjects.lastIndexOf({ number: 2 })
  let existeInvertido = numberObjects.lastIndexOf({number: 2})
  console.log(existeInvertido)
  let existeInvertido2 = numberObjects.some(e => e.number === 2)
  console.log(existeInvertido2)
  let textoInvertido = (existeInvertido >= 0) ? 'Existe um objeto { number: 2 } em numberObjects!' : 'Não existe um objeto { number: 2 } em numberObjects!'
  console.log(textoInvertido)

  /*
  Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
  formato de String.
  */
  console.log('\njustMod2Or3 é um array? Se for, a representação dele em String é:')
  console.log(Array.isArray(justMod2Or3) ? justMod2Or3.join('') : 'Não é um array')
})()
