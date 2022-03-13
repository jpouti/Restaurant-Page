// background img https://unsplash.com/photos/plwBDw9x5cE by Slashio Photography

import './styles.css';

const createMenu = (() => {
    const menuItem = () => {
        const menuContainer = document.createElement('div');
        menuContainer.id = 'itemContainer';
        menuContainer.textContent = "Menu";

        return menuContainer;
    }
    const foodMenu = () => {
        const menuContainer = document.getElementById('itemContainer');
        const foodContainer = document.createElement('div');
        foodContainer.id = 'foodContainer';
        foodContainer.textContent = "Foods";
        for (let index = 0; index < 4; index++) {
            let foodCard = document.createElement('div');
            foodCard.id = 'foodCard';
            foodCard.setAttribute('data-id', index); 
            foodContainer.appendChild(foodCard);
        }
        menuContainer.appendChild(foodContainer);
        return menuContainer;
    }
    const drinksMenu = () => {
        const menuContainer = document.getElementById('itemContainer');
        const drinkContainer = document.createElement('div');
        drinkContainer.id = 'drinkContainer';
        drinkContainer.textContent = "Drinks";
        for (let index = 0; index < 4; index++) {
            let drinkCard = document.createElement('div');
            drinkCard.id = 'drinkCard';
            drinkCard.setAttribute('data-id', index); 
            drinkContainer.appendChild(drinkCard);
        }
        menuContainer.appendChild(drinkContainer);
        return menuContainer;
    }
    return {menuItem, foodMenu, drinksMenu};

})();

export {createMenu};

