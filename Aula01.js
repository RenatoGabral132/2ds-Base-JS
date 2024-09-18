// tipo number

// var era utilizado para todas as variáveis
var numero01 = 4
// let é uma atualização do var e é passível de variação
let numero02 = 10
// const é uma maneira de declarar uma variavél que irá permanecer constante
const numero03 = 7

const soma = numero01 + numero02
const subtracacao = numero02 - numero01
const multiplicacao = numero03 * numero02
const divisao = numero02 / numero01

console.log(soma)
console.log(subtracacao)
console.log(multiplicacao)
console.log(divisao)

// tipo Float -- Texto Flutuante

const numero04 = 3.2
const numero05 = .5

const multiplicacao2 = numero04 * numero05

console.log(multiplicacao2)

//NaN -> Not a Number

const nome = 'Gabral'
const falsoNumero = '7'

const naoEnumero = nome * 0.4
const concatenacao01 = falsoNumero + numero04

console.log(naoEnumero)
console.log(concatenacao01)

// Dados do Tipo String = Textos

const frase = 'Meu nome é: '
const frase2 = 'O segundo DS é "estudioso", não é? '

const concatenacao02 = frase + nome

console.log(concatenacao02)
console.log(frase2)

// Dados do tipo Boolean
// True -> Verdadeiro
// False -> Falso

const numero06 = 7

const comparacao01 = numero06 == falsoNumero
const comparacao02 = numero06 === falsoNumero

// Um sinal de igual (=) é para declarar
// Dois sinaisde igual (==) comparando os valores e não o tipo do dado. (comparação fraca)
// Três sinais de igual (===) comparando os tipos do dado (Comparação forte)

console.log(comparacao01)
console.log(comparacao02)
