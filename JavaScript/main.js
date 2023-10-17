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
const person = {
    firstName: 'Nabendu',
    'Last Name': 'Biswas',
    age: 41,
    isDeveloper: true,
    hobbies: ['coding', 'blogging', 'youtubing'],
    address: {
        hno: 95,
        city: 'Bhopal',
        state: 'MP'
    }
}

console.log(person);
console.log(person.firstName); //Dot notation
console.log(person['Last Name']); //Bracket notation
console.log(person.hobbies[2]);
console.log(person.address.city);

console.log(Object.keys(person));
console.log(Object.values(person));



