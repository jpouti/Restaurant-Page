import './styles.css';

const createMain = (() => {
    
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

    const pageFooter = (link1, text1, link2, text2) => {
        const footerContainer = document.createElement('div');
        footerContainer.id = "footerContainer";

        const divContent = document.querySelector('#content');
        divContent.appendChild(footerContainer);

        const elementText = document.createElement('p');
        elementText.id = 'imageCredit';
        elementText.textContent = 'Background photo by: '
        footerContainer.appendChild(elementText);

        const imageCredit1 = document.createElement('a');
        imageCredit1.id = "imageCredit";
        imageCredit1.href = link1;
        imageCredit1.textContent = text1;
        footerContainer.appendChild(imageCredit1);

        const elementText2 = document.createElement('p');
        elementText2.id = 'imageCredit';
        elementText2.textContent = ' on ';
        footerContainer.appendChild(elementText2);

        const imageCredit2 = document.createElement('a');
        imageCredit2.id = "imageCredit";
        imageCredit2.href = link2;
        imageCredit2.textContent = text2;
        footerContainer.appendChild(imageCredit2);
        return footerContainer;
    }

return {headerElements, headlineElement, pageFooter};

})();

export {createMain};

