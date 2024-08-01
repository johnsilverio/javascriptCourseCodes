/*
Desafio de Codificação #1
Dado um array de temperaturas máximas previstas, o termômetro exibe uma string com as temperaturas fornecidas. Exemplo: [17, 21, 23] irá imprimir "... 17ºC em 1 dia ... 21ºC em 2 dias ... 23ºC em 3 dias ..."
Suas tarefas:

Crie uma função 'printForecast' que recebe um array 'arr' e registra uma string como a acima no console. Tente com os dois conjuntos de dados de teste.
Use a estrutura de resolução de problemas: compreenda o problema e divida-o em subproblemas!
Dados de teste:
§ Dados 1: [17, 21, 23]
§ Dados 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
    let forecastStr = '...';
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `${arr[i]}ºC em ${i + 1} dias ...`
    }
    console.log(forecastStr);
}


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);