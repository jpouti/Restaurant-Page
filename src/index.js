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
    addMenuContent(4, 3);
    createMain.pageFooter();
}

// clearing all of the elements
function clearContent() {
    while (divContent.firstChild) {
        divContent.firstChild.remove();
    }
}

// Input the content for restaurant menu
// Add number of foods & drinks wanted as parameter
function addMenuContent(food, drink) {
    const menuFood = createMenu.foodMenu(food);
    divContent.appendChild(menuFood);
    const menuDrinks = createMenu.drinksMenu(drink);
    divContent.appendChild(menuDrinks);
    createMenu.addFoods(0, "CHEESEBURGER", "beef, onion, lettuce, cheese");
    createMenu.addFoods(1, "BEEF BURGER", "Basic Burger");
    createMenu.addFoods(2, "CHICKEN BURGER", "Basic Burger");
    createMenu.addFoods(3, "HALLOUMI BURGER", "Basic Burger");
    createMenu.addDrinks(0, "BEER");
    createMenu.addDrinks(1, "SOFT DRINKS");
    createMenu.addDrinks(2, "MILKSHAKE");
}