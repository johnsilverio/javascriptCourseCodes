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

const friend1 = 'Michael';
const friend2 = 'John';
const friend3 = 'Steven';
*/

// const friends = ['Michael', 'John', 'Steven'];
// console.log(friends);

// // const years = new Array(1991, 1994, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Phill'];

// const firstName = 'John';
// const johnInfo = new Array(firstName, 'Silverio', 2024 - 2002, 'programmer', friends); 
// console.log(johnInfo);
// console.log(johnInfo.length);

// // Exercise 
// const calcAge = function(birthYear) {
//     return 2024 - birthYear;
// }

// const years = [1990, 1968, 2002, 2010, 2018]; 

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[years.length - 1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[1]);

// console.log(age1, age2, age3);  

// const ages = [age1, age2, age3, age4, age5];
// console.log(ages);

// const friends = new Array('Michael', 'John', 'Nolan');

// // ADD ELEMENTOS
// const newLength = friends.push('Jay'); // Adicionar um elemento no final do Array
// console.log(friends);
// console.log(newLength);

// friends.unshift('Steven'); // Irá adicionar um elemento no começo do Array
// console.log(friends);

// // REMOVE ELEMENTS 
// friends.pop(); // Remove elemento no fim do array
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // Remove o primeiro elemento
// console.log(friends);

// console.log(friends.indexOf('John'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('John'));
// console.log(friends.includes('Steven'));

// friends.push('Peter');

// if (friends.includes('Peter')) {
//     console.log('Você tem um amigo chamado Peter');
// } else {
//     console.log('Você não tem nenhum amigo chamado Peter :(');
// }


// const johnArray = [
//     'John',
//     'Silverio',
//     2024 - 2002,
//     'programmer',
//     ['Lucas', 'Jean', 'Steven']
// ];

// const john = {
//     firstName: 'John',
//     lastName: 'Silverio',
//     age: 2024 - 2002,
//     job: 'programmer',
//     friends: ['Lucas', 'Jean', 'Steven']
// };
// console.log(john);

// console.log(john.lastName);

// console.log(john['lastName']);

// const nameKey = 'Name';
// console.log(john['first' + nameKey]);
// console.log(john['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about John? Choose between firstName, lastName, age, job and friends');

// const aswer = john[interestedIn] ? console.log(john[interestedIn]) : console.log('Error 404');

// john.location = 'Brazil';
// john['twitter'] = '@johnsilverio';
// console.log(john);

// // Challenge 
// // "John has 3 friends, and his best friends is called Lucas, Jean e Steven!"
// console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[1]}`);

// const john = {
//     firstName: 'John',
//     lastName: 'Silverio',
//     birthYear: 2002,
//     job: 'programmer',
//     friends: ['Lucas', 'Jean', 'Steven'],
//     hasDriversLicense: true,

//     // Method 
//     // calcAge: function (birthYear) {
//     //     return 2024 - birthYear; 
//     // }
//     // calcAge: function () {
//     //     return 2024 - this.birthYear; 
//     // }
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age; 
//     },
//     getSummary: function () {
//         return console.log(`${this.firstName} is a ${this.calcAge()}-years old ${this.job}, he has ${this.hasDriversLicense ? "a" : "no"} driver's liscense and your best friend is ${this.friends[0]}.`);
//     }
// };
// Challange 
// "John is a 22-year old programmer. and he has a driver's liscense, your best friend is Lucas"
// console.log(john.getSummary())

// Ainda deve ser calculado uma vez e depois chamar a propriedade de dentro do método uma vez que já foi chamado.

function loopsLecture() {
    // DRY Dont Repeat Yourself
    for (let index = 1; index <= 10; index++) {
        console.log(`Lifting weights repetition ${index} 🏋️`);
    }
}

function loopsArrayLecture() {

    const johnArray = [
        'John',
        'Silverio',
        2024 - 2002,
        'programmer',
        ['Jean', 'Lucas', 'Stevem']
    ];

    const types = [];

    for (let i = 0; i < johnArray.length; i++) {
        console.log(johnArray[i]);

        // types[i] = typeof johnArray[i];
        types.push(typeof johnArray[i]);
    }
    console.log(types);

    const years = [1991, 2007, 1969, 2020];
    const ages = [];
    for (let i = 0; i < years.length; i++) {
        ages.push(2024 - years[i]);
    }
    console.log(ages);
    console.log('---- ONLY STRINGS ----');
    for (let i = 0; i < johnArray.length; i++) {
        if (typeof johnArray[i] !== 'string') continue;
        console.log(johnArray[i], typeof johnArray[i]);
    }

    console.log('---- BREAK WITH NUMBER ----');
    for (let i = 0; i < johnArray.length; i++) {
        if (typeof johnArray[i] === 'number') break;
        console.log(johnArray[i], typeof johnArray[i]);
    }
}
// Continue and break 
function loopsBackwardsLoops() {

    const john = [
        'John',
        'Silverio',
        2024 - 2002,
        'programmer',
        ['Lucas', 'Jean', 'Steven'],
        true
    ];

    for (let i = john.length - 1; i >= 0; i--) {
        console.log(i, john[i]);
    }

    for (let exercises = 1; exercises < 4; exercises++ ) {
        console.log(`====== Starting exercises ${exercises} ======`);
        for (let rep = 1; rep < 6; rep++) {
            console.log(`Repetition: 🏋️‍♂️${rep}`)
        }
    }
}
// loopsBackwardsLoops();

function loopsWhile () {
//    for (let rep = 1; rep <= 10; rep++) {
    //    console.log(`Lifting weights repetition ${rep} 🏋️`);
//    }

    // let rep = 0;
    // while (rep <= 10) {
    //     console.log(`Lifting weights repetition ${rep} 🏋️`)
    //     rep++;
    // }   

    let dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6) console.log(`Loop is about to end...`);
    }
}
loopsWhile();







