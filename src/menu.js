import './styles.css';

const createMenu = (() => {
    const menuItem = () => {
        const menuContainer = document.createElement('div');
        menuContainer.id = 'itemContainer';
        const menuHeader = document.createElement('h3');
        menuHeader.textContent = "MENU";
        menuContainer.appendChild(menuHeader);

        return menuContainer;
    }
    const foodMenu = (numbers, content) => {
        const menuContainer = document.getElementById('itemContainer');
        const foodContainer = document.createElement('div');
        const foodHeader = document.createElement('h1');
        foodHeader.textContent = content.toUpperCase();
        foodContainer.id = content + 'Container';
        foodContainer.appendChild(foodHeader);
        for (let index = 0; index < numbers; index++) {
            let foodElement = document.createElement('h3');
            foodElement.id = content + "Element" + index;
            let foodText = document.createElement('p');
            foodText.id = content + "Text" + index;
            foodContainer.appendChild(foodElement);
            foodContainer.appendChild(foodText);
        }
        menuContainer.appendChild(foodContainer);
        return menuContainer;
    }
    const addFoods = (index, name, text, price) => {
        const foodName = document.getElementById('burgersElement'+index);
        foodName.textContent = name + " " + price + " $";
        const foodText = document.getElementById('burgersText'+index);
        foodText.textContent = text;
    }
    const addDrinks = (index, name, price) => {
        const drinkName = document.getElementById('beveragesElement'+index);
        drinkName.textContent = name + " " + price + " $";
    }
    const addAppetizers = (index, name, price) => {
        const appetizerName = document.getElementById('appetizersElement'+index);
        appetizerName.textContent = name + " " + price + " $";
    }
    return {menuItem, foodMenu, addFoods, addDrinks, addAppetizers};

})();

export {createMenu};

