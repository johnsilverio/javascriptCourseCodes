/*Desafio de Codificação #4
Vamos melhorar ainda mais a calculadora de gorjetas do Steven, desta vez usando loops!
Suas tarefas:

Crie um array 'contas' contendo os 10 valores de conta para teste.
Crie arrays vazios para as gorjetas e os totais ('gorjetas' e 'totais').

Use a função 'calcGorjeta' que escrevemos antes (não há necessidade de repetir) para calcular as gorjetas e os valores totais (conta + gorjeta) para cada valor de conta no array 'contas'. Use um loop for para realizar os 10 cálculos!

Dados de teste: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.

Dicas: Chame 'calcGorjeta' no loop e use o método push para adicionar valores aos arrays 'gorjetas' e 'totais'.

Bônus:
4. Bônus: Escreva uma função 'calcMedia' que recebe um array chamado 'arr' como argumento. Esta função calcula a média de todos os números no array dado. Este é um desafio difícil (ainda não fizemos isso antes)! Aqui está como resolvê-lo:
4.1. Primeiro, você precisará somar todos os valores do array. Para fazer a adição, comece criando uma variável 'soma' que começa em 0. Em seguida, faça um loop sobre o array usando um loop for. Em cada iteração, adicione o valor atual à variável 'soma'. Dessa forma, ao final do loop, você terá todos os valores somados.
4.2. Para calcular a média, divida a soma que você calculou pelo comprimento do array (porque esse é o número de elementos).
4.3. Chame a função com o array 'totais'.

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
console.log(bills, tip, totals);
*/

// Crição dos Arrays de contas e gorjetas e totais vazios
const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const gorjetas = [];
const totais = [];
// Calculadora de gorjeta que é uma função que retorna o valor da gojeta baseada na conta.
const calcGorjeta = function (contas) {
    return contas >= 50 && contas <= 300 ? contas * 0.15 : contas * 0.20;
}
// Um loop que adiciona todos os elementos já tratados pela função calcGorjeta dentro de seus respectivos arrays gorjetas e totais.
for (let i = 0; i < contas.length; i++) {
    gorjetas.push(calcGorjeta(contas[i]));
    totais.push(calcGorjeta(contas[i]) + contas[i]);
}
// Calcula a média dos elementos do array Totais
const calcMedia = function (arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma / arr.length;
}
// calcMedia(totais); // Aqui é chamado o array total
function mostraContas () {
    let mediaTotal = calcMedia(totais);
    console.log(`==== VALOR MÉDIO: ${mediaTotal} 🔥 ====`)
    for (let i = 0; i < contas.length; i++) {
        console.log(`A conta deu R$${contas[i].toFixed(2)} com a gorjeta do garçom de R$${gorjetas[i].toFixed(2)} ficou o total de R$${totais[i].toFixed(2)}`);
    }
}
mostraContas();




