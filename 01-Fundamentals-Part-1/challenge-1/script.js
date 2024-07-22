/*
JavaScript Fundamentals – Part 1

    Mark e John estão tentando comparar seus IMC (indice de massa corporal), que é calculada usando a formula:
    IMC = peso / altura ** 2 = peso / (altura * altura) (massa em kg e altura em metros).

    Tarefas:
        1 - Guardar as massas e alturas do John e Mark em variáveis.
        2 - Calcular seus IMCs usando a fórmula.
        3 - Criar uma variável booleana 'markTamanhoIMC' contendo informações sobre se o IMC do Mark é maior que o John.

        Test data:
        * Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
        * Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

// const markAltura = 1.88
// const markPeso = 95;
// const johnAltura = 1.76;
// const johnPeso = 85;
const markAltura = 1.69;
const markPeso = 78;
const johnAltura = 1.95;
const johnPeso = 92;

const markIMC = markPeso / markAltura ** 2;
const johnIMC = johnPeso / johnAltura ** 2;

function resultado() {
    console.log(`Mark pesa ${markPeso} kg e tem ${markAltura} m de altura. John pesa ${johnPeso} kg e tem ${johnAltura} m de altura.`)

    console.log(`Mark tem um IMC de: ${markIMC.toFixed(2)}`);
    console.log(`Enquanto John tem um de: ${johnIMC.toFixed(2)}`);

    if (markIMC > johnIMC) {
        console.log("O IMC de Mark é maior do que o do John");
    } else {
        console.log("O IMC do John é maior que o de Mark");
    }
}

resultado();
