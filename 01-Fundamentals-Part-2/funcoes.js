/*
    Função: Trecho de código que só é executado quando é chamado/invocado

        Função Void (vazia)
        Função com Parâmetros(s)
        Função com Return
        Função Arrow / Arrow Function

        let valor = 20;

        function incremento() {
            valor = valor + 30;
        }

        incremento();
        console.log(valor);
*/

// function mostraNome(nomeDaPessoa) {
//     console.log(nomeDaPessoa);
// }

// mostraNome('John');




// function saudacao(nome, hora) {
//     let mensagem;
//     switch (true) {
//         case (hora <= 12):
//             mensagem = 'Bom dia';
//             break;
//         case (hora <= 18):
//             mensagem = 'Boa tarde';
//             break;
//         case (hora <= 23):
//             mensagem = 'Boa noite';
//             break;
//         default:
//             mensagem = 'Olá'
//             break;
//     }
//     return `${mensagem} ${nome}, como você está?`;
// }

// const oiJohn = saudacao('John', 11);
// console.log(oiJohn);

function nomeDaFuncao(parametro1, parametro2) {
    // Corpo da função
    parametro1 = 'Hello World'
    parametro2 = 'Ola Mundo'
    console.log(parametro1, parametro2);
}

const nomeDaFuncaoEx = function (parametro1, parametro2) {
    console.log(parametro1, parametro2);
}

const nomeFuncaoArrow = (parametro1, parametro2) => console.log(parametro1, parametro2);

// Aceita parâmetros de argumentos
// function saudacao(nome) {
//     console.log(`Olá, ${nome}`);
// }
// saudacao('John');

// Retorno de Funções 
// function soma(a, b) {
//     return a + b;
// }
// const resultado = soma(2, 2);
// console.log(resultado);

function executar(funcao, valor) {
    return funcao(valor);
}

const dobra = (n) => n * 2;
const resultado = executar(dobra, 5);
// console.log(resultado);

// Funções Aninhadas e Clousures
function externa() {
    const x = 10;
    function interna() {
        console.log(x);
    }
    interna();
}
// externa();

//closures
let contagem = 0;
function criarContador() {
    return function () {
        contagem += 1;
        return contagem;
    };
}
const contador = criarContador();

function calcularArea(base, altura) {
    function multiplicar(a, b) {
        return a * b;
    }
    return multiplicar(base, altura) / 2;
}
const area = calcularArea(10, 5); // area é 25
// console.log(area);

function bemVindo(nome) {
    console.log(`Bem vindo ${nome}`);
}
// bemVindo('John');
// bemVindo('Maria');

const saudacaoNome = function (nome) {
    console.log(`Olá, ${nome}!`);
}
// saudacaoNome('Carlos');
// saudacaoNome('Ana');

const dobrar = (n) => n * 2;
// console.log(dobrar(4));
// console.log(dobrar(7));

const calcular = (a, b) => a + b;
// console.log(calcular(5, 3));
// console.log(calcular(10, 7));
// console.log(calcular(20, 4));

const multiplicarCalc = function (a, b) {
    return a * b;
}
// console.log(multiplicarCalc(3, 4));
// console.log(multiplicarCalc(7, 2));

function executarCalc(func, x) {
    return func(x);
}
const triplicar = (n) => n * 3;
// console.log(executarCalc(triplicar, 4));
// console.log(executarCalc(triplicar, 5));

function externaCalc() {
    const x = 50;
    function interna() {
        console.log(x);
    }
    interna();
}
// externaCalc();

function calcularIdade(anoNascimento) {
    return 2024 - anoNascimento;
}
// console.log(calcularIdade(2000));
// console.log(calcularIdade(2002));

function transformarNome(nomeCompleto) {
    const nome = nomeCompleto.split(' ');
    return `${nome[1]}, ${nome[0]}`;
}
// console.log(transformarNome('John Silverio'));
// console.log(transformarNome('Marina Silva'));

function filtrarPares() {

}

