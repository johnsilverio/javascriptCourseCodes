/* Lecture 1 - 9
let js = 'amazing';
/* if (js === 'amazing') {
    alert('Javascript is FUN!');
}

console.log(40 + 8 + 23 - 10);

console.log('John');
console.log(23);

// For convention, ever use camelCase for variables.
// Only symbols used is $ or _ for variables.
let firstName = 'Methew';
let first = 'John';
let fistNamePerson; // camelCase
let first_name_person; // snake_case
let FirstName; // PascalCase

console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Coder';
let myCorrentJob = 'Teacher';

let job1 = 'programmer'; // Not use like this
let job2 = 'teacher';  // Not use like this

console.log(myFirstJob);

let javaScriptIsFun = true;

// console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'John');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; NÃO PERMITIDO

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Silverio';
console.log(lastName);

const now = 2024;
const ageJohn = now - 2002;
const ageSarah = now - 2017;
console.log(ageJohn, 'and', ageSarah);

console.log(ageJohn * 2, ageJohn / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'John';
const lastName = 'Silverio';
console.log(firstName + ' ' + lastName);

// Assigment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
x--; // x = x - 1;
console.log(x);

// Comparison Operators
console.log(ageJohn > ageSarah); // >, <, >=, <=
console.log(ageSarah <= 6);

const isFullAge = ageSarah >= 18;

console.log(now - 2002 > now - 2018);

const now = 2024;
const ageJohn = now - 2002;
const ageSarah = now - 2018;

console.log(now - 2002 > now - 2018);

const firstName = 'John';
const job = 'Programador';
const birthYear = 2002;
const year = 2024;

const john = "Eu sou " + firstName + ", um " + job + "e tenho " + (year - birthYear) + " anos, nasci em " + birthYear + " e sou " + job;

console.log(john);

const johnNew = `Eu me chamo ${firstName}, sou um ${job} e tenho ${year - birthYear} anos.`;
console.log(johnNew);

console.log(`Just a regular string...`);

console.log('String with \n\ multiple \n\ lines');

console.log(`String
multiple
lines`);

const age = 19;
const isOldEnought = age >= 18;

if (isOldEnought) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
console.log(`Sarath can't start driving license 🚫, is too young. Wait another ${yearsLeft} years:`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear) + inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('John'));
console.log(typeof NaN);
// NaN quer dizer número inválido e não necessáriamente um número que não é um número, então por debaixo dos panos continua sendo um número.

console.log(String(23), 23);

// Type coersion
console.log('I am ' + 23 + ' years old'); // A conversão automática como o operador + sempre transforma em String
console.log('23' - '10' - 3); // Ao contrário do operador e coersão + o operador de - subtração transforma string numéricas em Number implicitamente.
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // O sinal de + sempre vai converter em uma string, então fica '11'
n = n - 1; // O sinal de menos - converte para Number logo '11' - 1 = 10;
console.log(n);  // resultado 10

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('John'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("D'ont spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // '23' === 23
console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('Cool! 9 is an amazing number!');
} else {
    console.log('Number is not 23 or 7! :('); 15
}

if (favorite !== 23) console.log('Why not 23?');
*/

// AND & OPERATOR OR || OPERATOR NOT ! OPERATOR

// const hasDriverLicense = false; // A
// const hasGoodVision = true; // B

// // const shouldDrive = hasDriverLicense && hasDriverLicense; (REFATORADO)
// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// // console.log(hasDriverLicense && hasGoodVision);
// // console.log(hasDriverLicense || hasGoodVision);
// // console.log(!hasDriverLicense);

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else if (isTired) {
//     console.log('Sarah should to sleep!');
// } else {
//     console.log('Someone else should drive...');
// }

const day = 'monday'

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjou the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjou the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }

// Expressões 
// 3 + 4
// 1991
// true && false && !false
// Expressões são tudo que produz algum valor

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// const age = 17;
// // age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let dringk2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);


























