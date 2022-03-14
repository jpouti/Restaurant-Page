// background img https://unsplash.com/photos/plwBDw9x5cE by Slashio Photography

import './styles.css';

const createMenu = (() => {
    const menuItem = () => {
        const menuContainer = document.createElement('div');
        menuContainer.id = 'itemContainer';
        menuContainer.textContent = "Menu";

        return menuContainer;
    }
    const foodMenu = (numbers) => {
        const menuContainer = document.getElementById('itemContainer');
        const foodContainer = document.createElement('div');
        const foodHeader = document.createElement('h1');
        foodHeader.textContent = "BURGERS";
        foodContainer.id = 'foodContainer';
        foodContainer.appendChild(foodHeader);
        for (let index = 0; index < numbers; index++) {
            let foodElement = document.createElement('h3');
            foodElement.id = "foodElement" + index;
            let foodText = document.createElement('p');
            foodText.id = "foodText" + index;
            foodContainer.appendChild(foodElement);
            foodContainer.appendChild(foodText);
        }
        menuContainer.appendChild(foodContainer);
        return menuContainer;
    }
    const drinksMenu = (numbers) => {
        const menuContainer = document.getElementById('itemContainer');
        const drinkContainer = document.createElement('div');
        drinkContainer.id = 'drinkContainer';
        const foodHeader = document.createElement('h1');
        foodHeader.textContent = "BEVERAGES";
        drinkContainer.appendChild(foodHeader);
        for (let index = 0; index < 4; index++) {
            let drinkElement = document.createElement('h3');
            drinkElement.id = "drinkElement" + index;
            let drinkText = document.createElement('p');
            drinkText.id = "drinkText" + index;
            drinkContainer.appendChild(drinkElement);
            drinkContainer.appendChild(drinkText);
        }
        menuContainer.appendChild(drinkContainer);
        return menuContainer;
    }
    const addFoods = (index, name, text) => {
        const foodName = document.getElementById('foodElement'+index);
        foodName.textContent = name;
        const foodText = document.getElementById('foodText'+index);
        foodText.textContent = text;
    }
    const addDrinks = (index, name) => {
        const drinkName = document.getElementById('drinkElement'+index);
        drinkName.textContent = name;
    }
    return {menuItem, foodMenu, drinksMenu, addFoods, addDrinks};

})();

export {createMenu};

