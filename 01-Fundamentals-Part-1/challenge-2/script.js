/*
Desafio de Codificação #3
    Existem duas equipes de ginástica, Dolphins e Koalas. Elas competem entre si 3 vezes. O vencedor com a maior média de pontos ganha um troféu!

Suas tarefas:

    - Calcule a média de pontos para cada equipe, usando os dados de teste abaixo.
    - Compare as médias de pontos das equipes para determinar o vencedor da competição e imprima no console. Não se esqueça de que pode haver um empate, então teste para isso também (empate significa que ambas têm a mesma média de pontos).
    - Bônus 1: Inclua um requisito para uma pontuação mínima de 100. Com essa regra, uma equipe só ganha se tiver uma pontuação maior que a outra equipe e, ao mesmo tempo, uma pontuação de pelo menos 100 pontos. Dica: Use um operador lógico para testar a pontuação mínima, bem como múltiplos blocos else-if.
    - Bônus 2: A pontuação mínima também se aplica a um empate! Portanto, um empate só acontece quando ambas as equipes têm a mesma pontuação e ambas têm uma pontuação maior ou igual a 100 pontos. Caso contrário, nenhuma equipe ganha o troféu.
    */


// Dados de teste:
//    Dados 1: Dolphins pontuam 96, 108 e 89. Koalas pontuam 88, 91 e 110.
// const mediaPontosDolphins = (97 + 108 + 89) / 3;
// const mediaPontosKoalas = (88 + 91 + 110) / 3;

//    Dados Bônus 2: Dolphins pontuam 97, 112 e 101. Koalas pontuam 109, 95 e 106.
// const mediaPontosDolphins = (97 + 112 + 101) / 3;
// const mediaPontosKoalas = (109 + 95 + 106) / 3;

//    Dados Bônus 1: Dolphins pontuam 97, 112 e 101. Koalas pontuam 109, 95 e 123.
const mediaPontosDolphins = (97 + 112 + 101) / 3;
const mediaPontosKoalas = (109 + 95 + 123) / 3;

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