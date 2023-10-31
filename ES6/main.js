// const firstAge = 6;
// firstAge = 8;
// console.log(firstAge);

// const childAges = [5, 6, 8, 10];
// // childAges = [5, 6, 8, 10, 12];
// childAges.push(12);
// console.log(childAges);

// const personObj = {name: 'Nabendu', skill: 'JS'};
// console.log(personObj);
// personObj.skill = 'React';
// personObj.profession = 'Developer';
// console.log(personObj);

//Default Parameters
// const isEqual = (num1, num2=15) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 === num2;
// }

// console.log(isEqual(10, 20));
// console.log(isEqual(10));

//Object Literals Extensions
// let name = 'Nabendu';
// let age = 41;

// let obj = {
//     name,
//     age
// }

// console.log(obj);

//Dynamic Fields
// let ageField = 'age';

// let dynamicObj = {
//     name: 'Hriday',
//     [ageField]: 10
// }

// console.log(dynamicObj);

//Rest Operators
// let arrFunc = (...arr) => {
//     console.log(arr)
// }

// arrFunc(23, 46, 12, 67, 55, 33);

// let restFunc = (a, b, ...n) => {
//     console.log(a, b, n);
// }

// restFunc(23, 46, 12, 67, 55, 33);

//Spread Operators
// let a = [23, 46, 12, 67, 55, 33];
// console.log(Math.min(23, 46, 12, 67, 55, 33));
// console.log(Math.min(...a));
// console.log(Math.max(...a));

//Copy by reference problem
// let x = [46, 12, 67, 55, 33];
// let y = x;
// y.push(22);
// console.log(y);
// console.log(x);

//Solution with spread
// let c = [23, 46, 12, 67, 55, 33];
// let d = [...c];
// d.push(78);
// console.log(d);
// console.log(c);

//Spread operator to merge arrays
// let x1 = [1, 2], a1 = [3, 4], c1 = [9, 10];
// let d1 = [...x1, ...a1, ...c1];
// console.log(d1);

//Used in Objects
// let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13 };
// let clonedObj = { ...obj1 };
// clonedObj.z = 45;
// console.log(obj1);
// console.log(clonedObj);
// let mergedObj = { ...obj1, ...obj2, ...clonedObj };
// console.log(mergedObj);

//Array Destructuring
// const rgb = [255, 200, 0];

// const r = rgb[0];
// const g = rgb[1];
// const b = rgb[2];

// const [r, g, b] = rgb;
// console.log(r, g, b);

//Object destructuring
// const developer = {
//     firstname: 'Nabendu',
//     lastname: 'Biswas',
//     country: 'India'
// };

// const firstname = developer.firstname;
// const lastname = developer.lastname;
// const country = developer.country;

// const { firstname, lastname, country } = developer;
// console.log(firstname, lastname, country);

//ES6 classes
// class CreateRoom {
//     constructor(name) {
//         this.room = `${name}'s room`
//     }

//     cleanRoom(soap){
//         console.log(`Cleaning ${this.room} with ${soap}`)
//     }
// }

// const nabsRoom = new CreateRoom('Nabendu');
// const hridayRoom = new CreateRoom('Hriday');

// nabsRoom.cleanRoom('Domex');
// hridayRoom.cleanRoom('Lizol');

//Classical for loop
// let developers = ['Nabendu', 'Hari', 'Chetan'];
// for(let i=0; i<developers.length; i++){
//     console.log(developers[i]);
// }

//forEach
// developers.forEach(person => console.log(person));

//Map use case
// let numbers = [6, 8, 10];

// let doubled = [];
// for(let i=0; i<numbers.length; i++){
//     doubled.push(numbers[i]*2);
// }

// console.log(doubled)

//Map
// let doubledES6 = numbers.map(num => num*2);
// console.log(doubledES6);

//filter use case
let products = [
    { name: 'Samsung M21', category: 'smartphone'},
    { name: 'Samsung M31', category: 'smartphone'},
    { name: 'Macbook Air', category: 'laptop'},
    { name: 'Asus Zenbook', category: 'laptop'}
];

// let filtered = [];
// for(let i=0; i<products.length; i++){
//     if(products[i].category === 'smartphone'){
//         filtered.push(products[i])
//     }
// }

// console.log(filtered);

//filter
let filterES6 = products.filter(item => item.category === 'laptop');
console.log(filterES6);

//Classic use case of reduce
let numbers = [20, 30, 40];

// var sum = 0;
// for(let i=0; i<numbers.length; i++){
//     sum += numbers[i];
// } 

// console.log(sum);

const sumReduce = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0)
//0 + 20 = 20
//20 + 30 = 50
//50 + 40 = 90
console.log(sumReduce);