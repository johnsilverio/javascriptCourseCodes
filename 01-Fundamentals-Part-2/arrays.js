let frutas = ['Maçã', 'Banana', 'Laranja'];
console.log(frutas[0]);
frutas[1] = 'Morango';
console.log(frutas[1], frutas.length);
frutas.push('Uva');
console.log(frutas[3], frutas.length);

let ultimaFruta = frutas.pop();
console.log(frutas.length);

let primeiraFruta = frutas.shift();

frutas.unshift('Pera');
console.log(frutas[0]);


let numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros.length);


let vazio = new Array(10);
vazio = [20, 12, 24, 10, 23, 11, 10, 5, 60, 40]
console.log(vazio[5]);

