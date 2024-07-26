/*
Desafio de Codificação #2
Steven ainda está construindo sua calculadora de gorjetas, usando as mesmas regras de antes: Gorjeta de 15% da conta se o valor da conta estiver entre 50 e 300, e se o valor for diferente, a gorjeta é de 20%.
Suas tarefas:

Escreva uma função 'calcTip' que aceite qualquer valor de conta como entrada e retorne a gorjeta correspondente, calculada com base nas regras acima (você pode conferir o código do primeiro desafio da calculadora de gorjetas, se precisar). Use o tipo de função que você mais gostar. Teste a função usando um valor de conta de 100.

E agora vamos usar arrays! Então crie um array 'bills' contendo os dados de teste abaixo.

Crie um array 'tips' contendo o valor da gorjeta para cada conta, calculado a partir da função que você criou antes.
Bônus: Crie um array 'total' contendo os valores totais, ou seja, a conta + gorjeta.
Dados de teste: 125, 555 e 44.
Dica: Lembre-se de que um array precisa de um valor em cada posição, e esse valor pode ser, na verdade, o valor retornado de uma função! Então você pode simplesmente chamar uma função como valores de array (então não armazene os valores das gorjetas em variáveis separadas primeiro, mas diretamente no novo array).
BOA SORTE
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
console.log(bills, tip, totals);
