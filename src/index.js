import {createMain} from './mainPage';
import {createMenu} from './menu';
import {contacts} from './contacts';

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
            divContent.className = "contacts";
            console.log("Change to contacts");
            clearContent();
            createContacts();
        }
    });
});

// displaying the main page
function createMainPage() {
    divContent.appendChild(header);
    createMain.headlineElement();
    createMain.pageFooter("https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "Jonathan Borba", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash");
}

//displaying the menu
function createMenuPage() {
    divContent.appendChild(header);
    const menu = createMenu.menuItem();
    divContent.appendChild(menu);
    addMenuContent(4, 3, 3);
    createMain.pageFooter("https://unsplash.com/@slashiophotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "Slashio Photography", "https://unsplash.com/@slashiophotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash");
}

// clearing all of the elements
function clearContent() {
    while (divContent.firstChild) {
        divContent.firstChild.remove();
    }
}

//display the contacts page
function createContacts() {
    divContent.appendChild(header);
    divContent.appendChild(contacts.hours());
    divContent.appendChild(contacts.some());
    contacts.changeHours("saturday", "10am to 11pm"); 
    contacts.changeHours("sunday", "11am to 8pm");
    createMain.pageFooter("https://unsplash.com/@joshduke10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Josh Duke", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash");
}

// Input the content for restaurant menu
// Add number of foods & drinks & appetizers wanted as parameter
function addMenuContent(burgers, beverages, appetizers) {
    const menuBurgers = createMenu.foodMenu(burgers, 'burgers');
    divContent.appendChild(menuBurgers);
    const menuDrinks = createMenu.foodMenu(beverages, 'beverages');
    divContent.appendChild(menuDrinks);
    const menuAppetizers = createMenu.foodMenu(appetizers, 'appetizers');
    divContent.appendChild(menuAppetizers);
    createMenu.addFoods(0, "CHEESEBURGER", "beef, onion, lettuce, cheese", 10);
    createMenu.addFoods(1, "BEEF BURGER", "Basic Burger", 10);
    createMenu.addFoods(2, "CHICKEN BURGER", "Basic Burger", 10);
    createMenu.addFoods(3, "HALLOUMI BURGER", "Basic Burger", 15);
    createMenu.addDrinks(0, "BEER", 7);
    createMenu.addDrinks(1, "SOFT DRINKS", 7);
    createMenu.addDrinks(2, "MILKSHAKE", 7);
    createMenu.addAppetizers(0, "FRENCH FRIES", 5);
    createMenu.addAppetizers(1, "CHICKEN WINGS", 7);
    createMenu.addAppetizers(2, "ONION RINGS", 5);
}