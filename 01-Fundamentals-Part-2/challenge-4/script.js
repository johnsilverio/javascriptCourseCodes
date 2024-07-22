/*
Desafio de Codificação #1
De volta aos dois times de ginástica, os Dolphins e os Koalas! Há uma nova disciplina de ginástica, que funciona de maneira diferente.

Cada equipe compete 3 vezes, e então a média das 3 pontuações é calculada (portanto, uma pontuação média por equipe).

Um time só vence se tiver pelo menos o dobro da pontuação média do outro time. Caso contrário, nenhum time vence!

Suas tarefas:

Crie uma função de seta 'calcAverage' para calcular a média de 3 pontuações.
Use a função para calcular a média para ambos os times.
Crie uma função 'checkWinner' que recebe a pontuação média de cada time como parâmetros ('avgDolhins' e 'avgKoalas') e então exibe o vencedor no console, junto com os pontos da vitória, de acordo com a regra acima. Exemplo: "Koalas win (30 vs. 13)"
Use a função 'checkWinner' para determinar o vencedor para ambos os Dados 1 e Dados 2.
Ignore empates desta vez.
Dados de teste:

Dados 1: Dolphins pontuam 44, 23 e 71. Koalas pontuam 65, 54 e 49.
Dados 2: Dolphins pontuam 85, 54 e 41. Koalas pontuam 23, 34 e 27.
Dicas:

Para calcular a média de 3 valores, some todos eles e divida por 3.
Para verificar se o número A é pelo menos o dobro do número B, verifique se A >= 2 * B. Aplique isso às pontuações médias dos times.

console.log('--------------PLACAR--------------')
console.log(`Dolphins: ${parseInt(mediaPontosDolphins)} pontos \nKoalas: ${parseInt(mediaPontosKoalas)} pontos`);
console.log('----------------------------------')

if (mediaPontosDolphins > mediaPontosKoalas && mediaPontosDolphins >= 100) {
    console.log(`Os vencedores são os Dolphins com ${parseInt(mediaPontosDolphins)} pontos🐬🏆`);
} else if (mediaPontosKoalas > mediaPontosDolphins && mediaPontosKoalas >= 100) {
    console.log(`Os vencedores são os Koalas com ${parseInt(mediaPontosKoalas)} pontos🐨🏆`);
} else if (mediaPontosDolphins === mediaPontosKoalas && mediaPontosDolphins >= 100 && mediaPontosKoalas >= 100) {
    console.log('Temos um empate!!🏆🏆');
} else {
    console.log('Ninguém ganhou o troféu!!😕')
}
*/

function calcAverage (primeiraRodada, segundaRodada, terceiraRodada) {
    return (primeiraRodada + segundaRodada + terceiraRodada) / 3;
}

const dolphinsPontos = calcAverage(44, 23, 71);
const koalasPontos = calcAverage(65, 54, 49);
console.log(dolphinsPontos, koalasPontos);

function checkWinner (avgDolphins, avgKoalas) {
    avgDolphins = dolphinsPontos;
    avgKoalas = koalasPontos;

    return `O ganhador é ${avgDolphins}`


}

const resultado = checkWinner(dolphinsPontos);