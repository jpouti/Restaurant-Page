import {createMain} from './mainPage';

console.log('load header');

const divContent = document.querySelector('#content');
//createMain.backgroundImg();
let header = createMain.headerElements();
divContent.appendChild(header);


console.log('load main');

createMain.headlineElement();

createMain.pageFooter();

console.log("end");