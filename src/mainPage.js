import './styles.css';
import img from './img/burger.jpg';

const createMain = (() => {

   /* 
    const backgroundImg = () => {
        console.log("background");
        const divContent = document.querySelector('#content');
        divContent.style.backgroundImage = "url('./img/burger.jpg')";
        console.log("set");
    } */
    
    // create elements for header
    const headerElements = () => {
        const headerContainer = document.createElement('div');
        headerContainer.setAttribute('id', 'headerContainer');

        const headerName = document.createElement('h2');
        headerName.textContent = "Burger Bar";
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttonsContainer';

        const homeButton = document.createElement('button');
        homeButton.setAttribute('id', 'homeButton');
        homeButton.textContent = "Home";

        const menuButton = document.createElement('button');
        menuButton.setAttribute('id', 'menuButton');
        menuButton.textContent = "Menu";

        const contactButton = document.createElement('button');
        contactButton.setAttribute('id', 'contactButton');
        contactButton.textContent = "Contacts";

        const divContent = document.querySelector('#content');
        divContent.appendChild(headerContainer);

        const container = document.getElementById('headerContainer');
        container.appendChild(headerName);
        container.appendChild(buttonsContainer);
        buttonsContainer.appendChild(homeButton);
        buttonsContainer.appendChild(menuButton);
        buttonsContainer.appendChild(contactButton);

        return container;
    }

    const headlineElement = () => {
        const headlineContainer = document.createElement('div');
        headlineContainer.id = 'headlineContainer';

        const divContent = document.querySelector('#content');
        divContent.appendChild(headlineContainer);


        const headline1 = document.createElement('h3');
        headline1.textContent = "HAVE YOU FOUND THE BEST BURGERS IN TOWN?";
        const headline2 = document.createElement('p');
        headline2.textContent = "Join us for your next meal to find it out"

        headlineContainer.appendChild(headline1);
        headlineContainer.appendChild(headline2);
    }

    const pageFooter = () => {
        const footerContainer = document.createElement('div');
        footerContainer.id = "footerContainer";

        const divContent = document.querySelector('#content');
        divContent.appendChild(footerContainer);

        const imageCredit = document.createElement('p');
        imageCredit.id = "imageCredit";
        imageCredit.textContent = "Background image https://unsplash.com/photos/8l8Yl2ruUsg";
        footerContainer.appendChild(imageCredit);
        return footerContainer;
    }

return {headerElements, headlineElement, pageFooter};

})();

export {createMain};

