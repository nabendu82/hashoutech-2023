//Grab single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//Grab multiple elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// console.log([23, 45, 67]);

//Iterating through
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');

// nodeItems.forEach(item => console.log(item));
// colItems.forEach(item => console.log(item));

// for(let i=0; i<colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM Manipulation
const ul = document.querySelector('.items');
// ul.remove();

ul.firstElementChild.textContent = 'HTML';
ul.children[1].innerText = 'CSS';
ul.lastElementChild.innerHTML = '<h2>JavaScript</h2>';

const btn = document.querySelector('.btn');
btn.style.backgroundColor = 'blue';
btn.style.textTransform = 'uppercase';