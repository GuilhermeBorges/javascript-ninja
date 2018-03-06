/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (x) => !!x

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

console.log(isTruthy(0))
console.log(isTruthy(undefined))
console.log(isTruthy(null))
console.log(isTruthy(NaN))
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(''))
console.log(isTruthy(""))
console.log(isTruthy(false))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

console.log(isTruthy(1))
console.log(isTruthy(-22))
console.log(isTruthy(3))
console.log(isTruthy("dsd"))
console.log(isTruthy({}))
console.log(isTruthy(function(){}))
console.log(isTruthy([]))
console.log(isTruthy({a:1}))
console.log(isTruthy(9))
console.log(isTruthy(10))
console.log(isTruthy(9,12,1234,34,4,1,34,1,123,43))


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `modelo` - String
- `marca` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    modelo:'Gol',
    marca:'Wolksvagen',
    placa:'1242-abcd',
    ano:2007,
    cor:'vermelhor',
    quantasPortas:4,
    assentos:5,
    quantidadePessoas:0,
}
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = (novaCor) => carro.cor = novaCor

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = () => carro.cor

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = () => carro.modelo

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = () => carro.marca

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.colocarPessoas = (novasPessoas) => {
    var vagasLivres = carro.assentos - carro.quantidadePessoas
    if (carro.quantidadePessoas === carro.assentos && (carro.quantidadePessoas + novasPessoas) > carro.assentos)  return `O carro já está lotado`
    if (carro.quantidadePessoas + novasPessoas  > carro.assentos)  return `Só cabem mais ${vagasLivres} pessoa${vagasLivres == 1 ? '' : 's'}!`
    else {
        carro.quantidadePessoas += novasPessoas
        return `Já temos ${carro.quantidadePessoas} pessoa${carro.quantidadePessoas == 1 ? '':'s'} no carro!`
    }
}
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor())

// Mude a cor do carro para vermelho.

carro.mudarCor('vermelho')

// E agora, qual a cor do carro?

console.log(carro.obterCor())

// Mude a cor do carro para verde musgo.

carro.mudarCor('verde musgo')


// E agora, qual a cor do carro?

console.log(carro.obterCor())

// Qual a marca e modelo do carro?

console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.

console.log(carro.quantidadePessoas)
console.log(carro.colocarPessoas(2))
console.log(carro.quantidadePessoas)

// Adicione mais 4 pessoas no carro.

console.log(carro.colocarPessoas(4))
console.log(carro.quantidadePessoas)

// Faça o carro encher.

console.log(carro.colocarPessoas(1))
console.log(carro.quantidadePessoas)

console.log(carro.colocarPessoas(1))
console.log(carro.quantidadePessoas)

console.log(carro.colocarPessoas(1))
console.log(carro.quantidadePessoas)

console.log(carro.colocarPessoas(1))
console.log(carro.quantidadePessoas)


// Tire 4 pessoas do carro.


console.log(carro.colocarPessoas(-4))
console.log(carro.quantidadePessoas)


// Adicione 10 pessoas no carro.

console.log(carro.colocarPessoas(10))
// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas)
