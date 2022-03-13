import {createMain} from './mainPage';
import {createMenu} from './menu';

console.log('load header');

const divContent = document.querySelector('#content');

const header = createMain.headerElements();
//Create main page as default
divContent.className = "home";
createMainPage();

// Choosing which page to display
document.querySelectorAll('button').forEach(tabs => {
    tabs.addEventListener('click', event => {
        console.log(event.target.id);
        if (event.target.id === "homeButton") {
            divContent.className = "home";
            console.log("Change to home");
            clearContent();
            createMainPage();
        } else if (event.target.id === "menuButton") {
            divContent.className = "menu";
            console.log("Change to menu");
            clearContent();
            createMenuPage();
        } else {
            //divContent.className = "contacts";
            console.log("Change to contacts");
        }
    });
});

// displaying the main page
function createMainPage() {
    divContent.appendChild(header);
    createMain.headlineElement();
    createMain.pageFooter();
}

//displaying the menu
function createMenuPage() {
    divContent.appendChild(header);
    const menu = createMenu.menuItem();
    divContent.appendChild(menu);
    const menuFood = createMenu.foodMenu();
    divContent.appendChild(menuFood);
    const menuDrinks = createMenu.drinksMenu();
    divContent.appendChild(menuDrinks);
    createMain.pageFooter();
}

// clearing all of the elements
function clearContent() {
    while (divContent.firstChild) {
        divContent.firstChild.remove();
    }
}