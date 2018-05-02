/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/
(function () {
  'use strict'
  /*
  Em todos os exercícios desse desafio, nós vamos utilizar expressões
  regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
  variável chamada `text`:
  "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
  */
  let text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), Apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'

  /*
  Vamos começar com umas brincadeiras fáceis :D
  Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
  no console:
  */
  console.log('Adicionando seu nome no texto:')
  text = text.replace(/Manuel Marques de Sousa/g
    , 'Guilherme Borges Oliveira')
  console.log(text)
  console.log(text.substr(0, 50))

  /*
  Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
  console.
  Ex: Se você for da São Paulo, substitua por "paulista".
  */
  console.log('\nTrocando naturalidade:');
  console.log(text.substr(200, 30))
  text = text.replace(/brasileiro/g
    , 'paulista')
  console.log(text.substr(200, 30))
  
  /*
  Substitua todos os números por um traço `-`. Cada caractere de número deve
  ser um traço. Mostre o resultado no console:
  */
  console.log('\nTrocando números por -:');
  console.log(text.substr(55, 100))
  let text1 = text.replace(/\d/g, '-')
  console.log(text1.substr(55, 100))

  /*
  Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
  minúsculo por "0" (número zero). Mostre o resultado no console:
  */
  console.log('\nTrocando de "D" a "h" por "0":');
  console.log(text.substr(55, 100))
  console.log(text.replace(/[D-h]/g, '0'))
  console.log(text.substr(55, 100))

  /*
  Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
  Mostre o resultado no console:
  */
  console.log('\nTrocando "A" e "a" por "4":');
  console.log(text.substr(55, 100))
  console.log(text.replace(/[aA]/g, 4)
    .substr(55, 100))
  console.log(text.substr(55, 100))

  /*
  Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
  o método `toUpperCase()`. Mostre o resultado no console:
  */
  console.log('\n"O Centauro de Luvas" em caixa alta:');
  console.log(text.substr(120, 180))
  let text2 = text.replace(/O Centauro de Luvas/g, (total) => total.toUpperCase())
  console.log(text2.substr(120, 180))

  /*
  Agora iremos substituir as datas no formato "13 de junho de 1804" para
  "13/06/1804". A primeira coisa a fazer é criar uma função chamada
  `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
  retornar o número correspondente a esse mês.
  Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
  Números com menos de dois dígitos devem ter um zero na frente.
  Crie então a função e mostre no console os retornos para os meses de março,
  setembro e dezembro.
  Use um console.log para cada mês, usando a frase:
  "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
  */
  console.log('\nMeses representados por números:');
  function getMonthNumber (monthName) {
    let month = monthName.toLowerCase()
    switch (month) {
      case 'janeiro': return '01'
      case 'fevereiro' : return '02'
      case 'março' : return '03'
      case 'abril' : return '04'
      case 'maio' : return '05'
      case 'junho' : return '06'
      case 'julho' : return '07'
      case 'agosto' : return '08'
      case 'setembro' : return '09'
      case 'outubro' : return '10'
      case 'novembro' : return '11'
      case 'dezembro' : return '12'
    }
  }
  console.log(`O mês de ${'Janeiro'} é representado pelo número ${getMonthNumber('Janeiro')}.`)
  console.log(`O mês de ${'Fevereiro'} é representado pelo número ${getMonthNumber('Fevereiro')}.`)
  console.log(`O mês de ${'Março'} é representado pelo número ${getMonthNumber('Março')}.`)
  console.log(`O mês de ${'Abril'} é representado pelo número ${getMonthNumber('Abril')}.`)
  console.log(`O mês de ${'Maio'} é representado pelo número ${getMonthNumber('Maio')}.`)
  console.log(`O mês de ${'Junho'} é representado pelo número ${getMonthNumber('Junho')}.`)
  console.log(`O mês de ${'Julho'} é representado pelo número ${getMonthNumber('Julho')}.`)
  console.log(`O mês de ${'Agosto'} é representado pelo número ${getMonthNumber('Agosto')}.`)
  console.log(`O mês de ${'Setembro'} é representado pelo número ${getMonthNumber('Setembro')}.`)
  console.log(`O mês de ${'Outubro'} é representado pelo número ${getMonthNumber('Outubro')}.`)
  console.log(`O mês de ${'Novembro'} é representado pelo número ${getMonthNumber('Novembro')}.`)
  console.log(`O mês de ${'Dezembro'} é representado pelo número ${getMonthNumber('Dezembro')}.`)

  /*
  Agora, declare uma variável chamada `regexDate` que irá receber a expressão
  regular que irá fazer o match com as datas. Crie grupos de captura para o
  dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
  meses que estão no texto, não precisa adicionar todos.
  Com o que vimos até agora, você consegue fazer :D
  Mostre a regex no console.
  */
  console.log('\nRegex que vai fazer o match com as datas do texto:');
  // ?
  let meses = /Janeiro|Fevereiro|Março|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro/gi
  // let datas = /(\d\d) [Janeiro|Fevereiro|Março|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezmebro] (\d\d\d\d)/g
  let regexDate = /(\d\d) de (janeiro|fevereiro|março|abril|maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro) de (\d\d\d\d)/gi
  console.log('Janeiro huehue'.replace(meses, 'february'))
  console.log('19 Outubro 1992'.replace(regexDate, 'february'))
  console.log('19 Outubro 1992'.replace(regexDate, '$1/$2/$3'))
  /*
  Agora crie a função que irá fazer o replace dos dados. A função será chamada
  de `replaceDate`. Ela deve retornar a data no formato:
  "[DIA]/[MÊS]/[ANO]"
  Após criar a função, faça o replace das datas no texto, mostrando no
  console o resultado.
  */
  function formatDate (days, month, year) {
    return `${days}/${getMonthNumber(month)}/${year}`
  }

  function replaceDate (regex, string) {
    return string
      .replace(regex, (a, d, m, y) => formatDate(d, m, y))
  }
  console.log('\nReplace de datas:');
  console.log('19 de Outubro de 1992'
    .replace(regexDate, (totalMatch, days, month, year) => `${days}/${getMonthNumber(month)}/${year}`))
  console.log(text.substr(55, 100))
  console.log(text
    .replace(regexDate, (totalMatch, days, month, year) => `${days}/${getMonthNumber(month)}/${year}`)
    .substr(55, 100))
  console.log(text
    .replace(regexDate, (a, d, m, y) => formatDate(d, m, y))
    .substr(55, 100))
  console.log(replaceDate(regexDate, text)
    .substr(55, 100))
})()
