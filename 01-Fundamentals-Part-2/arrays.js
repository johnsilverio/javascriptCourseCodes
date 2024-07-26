// // let frutas = ['maçã', 'banana', 'laranja']; // Usando Colchetes

// let frutas = new Array('maçã', 'banana', 'laranja'); // Usando construtor
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// frutas.push('uva'); // push(): Adiciona um ou mais elementos ao final do Array
// console.log(frutas);

// frutas.pop(); // Remove do final do array
// console.log(frutas);

// frutas.shift(); // Remove o primeiro elemento do Array
// console.log(frutas);

// frutas.unshift('manga'); // adiciona primeiro elemento do Array
// console.log(frutas);

// console.log(frutas.length);

// frutas.unshift('limão');

// let citricas = frutas.slice(1, 3); // retorna cópia de parte do array.
// console.log(citricas);

// frutas.splice(1, 1, 'morango');
// console.log(frutas);

const somaArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // arr.forEach(num => {
    //     sum += num;
    // });
    return sum;
}

const test1Sum = [1, 2, 3, 4, 5];
const test2Sum = [10, 20, 30];

// console.log(somaArray(test1Sum));
// console.log(somaArray(test2Sum));

const mediaArray = function (array) {
    let media = 0;
    for (let i = 0; i < array.length; i++) {
        media += array[i];
    }
    return media / array.length;
}
const arrMedia1 = new Array(2, 4, 6, 8, 10);
const arrMedia2 = new Array(5, 15, 25, 35);

// console.log(mediaArray(arrMedia1));
// console.log(mediaArray(arrMedia2));

const elementosPares = function (array) {
    const count = 0;
    for (let i = 0; i < array.length; i++) {

    }
    return count % 2 === 0;
}

const arrPar1 = [1, 2, 3, 4, 5, 6];
const arrPar2 = [2, 4, 6];

console.log(elementosPares(arrPar1));
console.log(elementosPares(arrPar2));




