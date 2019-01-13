// commonjs export can't exist in the file that contains ESM export
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'title';
ul.appendChild(li1);
nav.appendChild(ul);
export { nav };
