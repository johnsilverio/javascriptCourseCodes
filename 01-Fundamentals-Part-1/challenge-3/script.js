/*
Desafio de Codificação #4
    Steven quer construir uma calculadora de gorjetas muito simples para quando ele for comer em um restaurante. No país dele, é comum dar uma gorjeta de 15% se o valor da conta estiver entre 50 e 300. Se o valor for diferente, a gorjeta é de 20%.

Suas tarefas:

    Calcule a gorjeta, dependendo do valor da conta. Crie uma variável chamada 'tip' para isso. Não é permitido usar uma declaração if/else (Se for mais fácil para você, pode começar com uma declaração if/else e depois tentar convertê-la para um operador ternário!)
    
    Imprima uma string no console contendo o valor da conta, a gorjeta e o valor final (conta + gorjeta). Exemplo: 
    “The bill was 275, the tip was 41.25, and the total value 316.25”

Dados de teste:
- Dados 1: Teste para valores da conta 275, 40 e 430

Dicas:
- Para calcular 20% de um valor, basta multiplicá-lo por 20/100 = 0.2
- O valor X está entre 50 e 300, se for >= 50 && <= 300
*/

const conta = 430;
const gorjeta = conta >= 50 && conta <= 300 ? conta + ((15 / 100) * conta) : conta + ((20 / 100) * conta);
console.log(`Bill tinha $${conta.toFixed(2)}, a gorjeta foi de $${gorjeta - conta}, o valor total foi de $${gorjeta}`);