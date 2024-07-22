'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriverLicense = true;
// }

// console.log(hasDriverLicense);

// // const interface = 'audio';
// // const if = 23; 

// function logger() {
//     console.log('Meu nome é John');
// }

// // Chamar / rodar / invocar
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     //console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// //console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function declaration
/*
function calcAge1(data) {
    data = `Tem ${2024 - data} anos`;
    return data;
}

const idadeJohn = calcAge1(2002);
// console.log(idadeJohn);

// Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(2002);
console.log(age2);

// // Function expression
// const calcAge2 = function (birthYear) {
    //     return 2027 - birthYear;
    // }
    
    // Arrow function
    const calcAge3 = birthYear => 2037 - birthYear;
    const age3 = calcAge3(1991);
    console.log(age3);
    
    const yearsUltilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `Faltam ${retirement} anos para o ${firstName} se aposentar.`
}

console.log(yearsUltilRetirement(2002, 'John'));
console.log(yearsUltilRetirement(1980, 'Bob'));

function cutPieces(fruit) {
    return fruit * 2;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};

const juice = fruitProcessor(2, 3);
console.log(juice);
*/

const calcAge = function (birthYear) {
}

return 2024 - birthYear;
const age = calcAge(birthYear);
const retirement = 60 - age;
function yearsUltilRetirement(birthYear, firstName) {
    if (retirement < 0) {
        return `${firstName} você já está aposentado`
    } else {
        return `${firstName} você irá se aposentar em ${retirement} anos`;
    }
    //return `${firstName} você irá se aposentar em ${retirement} anos`;
}

console.log(yearsUltilRetirement(1991, 'João'));
console.log(yearsUltilRetirement(2002, 'John'));
console.log(yearsUltilRetirement(1960, 'Samuel'));














