//Variables
// var firstName = 'Nabendu';
// let age = 41;
// let rating = 5.5;
// const isDeveloper = true;
// isDeveloper = false;

// console.log(firstName)

// function varExp() {
//     if(true) {
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
//     console.log("Outside if var " + num1);
// }

// varExp();
// console.log("Outside function var " + num1);

// if(true) {
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }
// console.log("Outside if let " + num2);

//Datatypes
// const firstName = 'Nabendu';
// const age = 41;
// const rating = 5.5;
// const isDev = true;
// const x = null;
// let z;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDev);
// console.log(typeof x);
// if(typeof x === 'object'){
//     console.log("Do something with this null")
// }
// console.log(typeof z);

//String concatenation
// const firstName = 'Nabendu';
// const age = 41;

//old way
// console.log('My name is ' + firstName + ' and i am ' + age + ' year\'s old.');

//new way
// console.log(`My name is ${firstName} and i am ${age} year's old.`);

//String methods
// const str = 'Hello JavaScript which is language of the web';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0, 7));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));
// console.log(str.split(' '));
// console.log(str.split(''));
// console.log(str.startsWith('Hell'));
// console.log(str.endsWith('web'));

//Arrays
// const lang = ['JavaScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
// console.log(lang[2]);

// lang.pop();
// lang.pop();
// console.log(lang);

// lang.push('Pascal');
// lang.unshift('Swift');
// console.log(lang);

// lang.shift();
// console.log(lang);

//Array methods
// console.log(Array.isArray(lang));
// console.log(Array.isArray(lang[2]));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));
// console.log(lang.join());
// console.log(lang.join(''));
// console.log(lang.join('-'));
// console.log(lang.reverse());

// function compareNumbers(a, b) {
//     return b - a;
// }

// const array1 = [1, 30, 4, 21, 100000];
// console.log(array1.sort(compareNumbers));

//Objects
// const person = {
//     firstName: 'Nabendu',
//     'Last Name': 'Biswas',
//     age: 41,
//     isDeveloper: true,
//     hobbies: ['coding', 'blogging', 'youtubing'],
//     address: {
//         hno: 95,
//         city: 'Bhopal',
//         state: 'MP'
//     }
// }

// console.log(person);
// console.log(person.firstName); //Dot notation
// console.log(person['Last Name']); //Bracket notation
// console.log(person.hobbies[2]);
// console.log(person.address.city);

// console.log(Object.keys(person));
// console.log(Object.values(person));

//Loops
//Traditional for loop
// for(let i=0; i<=10; i++) {
//     console.log(`Loop Number - ${i}`);
// }

//while loop
// let i = 0;
// while(i<=10) {
//     console.log(`Loop Number - ${i}`);
//     i++;
// }

//do-while loop
// let i = 0;
// do {
//     console.log(`Loop Number - ${i}`);
//     i+=11;
// } while(i<=10)

//Arrays of object
// const lang = [
//     {id: 1, name: 'Pascal', year: 1970},
//     {id: 2, name: 'C', year: 1972},
//     {id: 3, name: 'C++', year: 1985},
//     {id: 4, name: 'Java', year: 1995},
//     {id: 5, name: 'JavaScript', year: 1996},
//     {id: 6, name: 'Kotlin', year: 2011}
// ];

//Traditional for loop
// for(let i=0; i<lang.length; i++) {
//     console.log(lang[i].id)
// }

//for..of loop
// for(let l of lang) {
//     console.log(l.name)
// }

//forEach
// lang.forEach(item => console.log(item.year));

//Conditionals
// const x = '10';

// if(x == 10){
//     console.log('x is 10');
// }

// const y = '20';
// if(y === 20) {
//     console.log('y is 20');
// } else {
//     console.log('y is string 20');
// }

//if-else if-else
// const z = 79;
// if(z > 100) {
//     console.log('z is greater then 100');
// } else if(z > 80) {
//     console.log('z is greater then 80');
// } else if(z > 60) {
//     console.log('z is greater then 60');
// } else if(z > 40) {
//     console.log('z is greater then 40');
// } else {
//     console.log('z is lesser then 40');
// }

//OR and AND operatores
// const x = 20;
// const y = 30;

// if(x === 20 || y === 40) {
//     console.log('Any one of the statement is true')
// }

// if(x === 20 && y === 30) {
//     console.log('Both of the statement are true')
// }

//Ternary operator
// const z = 10;
// let color;

// if(z > 10){
//     color = 'red';
// } else {
//     color = 'blue';
// }

// console.log(color);
// //Above if-else converted to ternary
// const color2 = z > 9 ? 'red' : 'blue';
// console.log(color2);

//Switch statement
// const color = 'green';

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'green':
//     case 'orange':
//         console.log('color is green or orange');
//         break;
//     default:
//         console.log('No color matched');
// }

//Functions

//Method #1 - Function decleration
function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(20, 39);

//Method #2 - Function expression
const multiNums = function(num1, num2) {
    return num1 * num2;
}

console.log(multiNums(20, 39));

//Method #3 - Arrow function
const modNums = (num1, num2) => {
    return num1 % num2;
}

console.log(modNums(50, 39));

//Method #4 - Condensed Arrow function
const divNum = num1 => num1 / 7;

console.log(divNum(50));









