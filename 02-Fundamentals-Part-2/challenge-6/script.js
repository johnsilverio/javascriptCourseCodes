/* 
Desafio de Programação #3

Vamos voltar a comparar os IMCs de Mark e John! Desta vez, vamos usar objetos para implementar os cálculos! Lembre-se: IMC = massa / altura ** 2 = massa / (altura * altura) (massa em kg e altura em metros).

Suas tarefas:

Para cada um deles, crie um objeto com propriedades para o nome completo, massa e altura (Mark Miller e John Smith).
Crie um método 'calcIMC' em cada objeto para calcular o IMC (o mesmo método em ambos os objetos). Armazene o valor do IMC em uma propriedade e também o retorne a partir do método.
Exiba no console quem tem o IMC mais alto, juntamente com o nome completo e o respectivo IMC. Exemplo: "O IMC de John (28.3) é maior que o de Mark (23.9)!"
Dados para teste: Mark pesa 78 kg e tem 1,69 m de altura. John pesa 92 kg e tem 1,95 m de altura.
*/

function imcChallenge() {
    const mark = {
        firstName: "Mark",
        lastName: "Miller",
        massa: 78,
        altura: 1.69,
        calcIMC: function () {
            this.IMC = this.massa / this.altura ** 2;
            return this.IMC.toFixed(2);
        }
    };
    const john = {
        firstName: "John",
        lastName: "Smith",
        massa: 110,
        altura: 1.95,
        calcIMC: function () {
            this.IMC = this.massa / this.altura ** 2;
            return this.IMC.toFixed(2);
        }
    };
    const imcMark = mark.calcIMC();
    const imcJohn = john.calcIMC();
    
    if (imcMark > imcJohn) {
        console.log(`O IMC de Mark (${imcMark}) é maior que o de John (${imcJohn})!`);
    } else {
        console.log(`O IMC de John (${imcJohn}) é maior que o de Mark (${imcMark})!`);
    }
}
imcChallenge();