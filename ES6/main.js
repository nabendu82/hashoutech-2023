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
let x1 = [1, 2], a1 = [3, 4], c1 = [9, 10];
let d1 = [...x1, ...a1, ...c1];
console.log(d1);

//Used in Objects
let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13 };
let clonedObj = { ...obj1 };
clonedObj.z = 45;
// console.log(obj1);
console.log(clonedObj);
let mergedObj = { ...obj1, ...obj2, ...clonedObj };
console.log(mergedObj);


