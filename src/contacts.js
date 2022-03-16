import './styles.css';

const contacts = (() => {
    const info = () => {
        const elementContainer = document.createElement('div');
        elementContainer.className = "infoContainer";

        const elementGrid = document.createElement('div');
        elementGrid.className = 'infoGrid';
        const locationSymbol = document.createElement('src');
        locationSymbol.id = 'locationSymbol';
        const location = document.createElement('p');
        location.textContent = "Burger Road 1, Burgertown";
        const phoneSymbol = document.createElement('src');
        phoneSymbol.id = 'phoneSymbol';
        const phone = document.createElement('p');
        phone.textContent = '1-222-333-4545';
        const emailSymbol = document.createElement('src');
        emailSymbol.id = "emailSymbol";
        const email = document.createElement('p');
        email.textContent = "info@email.com";

        elementGrid.appendChild(locationSymbol);
        elementGrid.appendChild(location);
        elementGrid.appendChild(phoneSymbol);
        elementGrid.appendChild(phone);
        elementGrid.appendChild(emailSymbol);
        elementGrid.appendChild(email);
        elementContainer.appendChild(elementGrid);
        return elementContainer;
    }
    // create opening hours to the page
    const hours = () => {
        const elementContainer = contacts.info();
        const hoursContainer = document.createElement('div');
        hoursContainer.className = 'hoursContainer';
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        days.forEach(day => {
            let dayCard = document.createElement('div');
            dayCard.id = day.toLowerCase();
            let name = document.createElement('p');
            name.textContent = day;
            let openingHours = document.createElement('P');
            openingHours.id = day.toLowerCase() + 'time';
            openingHours.textContent = '9am to 9pm';
            dayCard.appendChild(name);
            dayCard.appendChild(openingHours);
            hoursContainer.appendChild(dayCard);
        });
        elementContainer.appendChild(hoursContainer);
        return elementContainer;
    }
    // change opening hours by chosen date and new time
    const changeHours = (day, time) => {
        const open = document.getElementById(day.toLowerCase()+'time');
        console.log(open);
        open.textContent = time;
        return open;
    }
    //creates 3 social media mentions to the page by default (links not defined)
    const some = () => {
        const someContainer = document.createElement('div');
        someContainer.className = 'someContainer';

        const textElement = document.createElement('p');
        textElement.id = 'someText';
        textElement.textContent = 'Our Social Medias:';
        someContainer.appendChild(textElement);

        const linkContainer = document.createElement('div');
        linkContainer.className = 'linkContainer';

        const some1 = document.createElement('button');
        some1.id = 'socialMedia1';
        some1.textContent = 'Social Media 1';

        const some2 = document.createElement('button');
        some2.id = 'socialMedia2';
        some2.textContent = 'Social Media 2';

        const some3 = document.createElement('button');
        some3.id = 'socialMedia3';
        some3.textContent = 'Social Media 3';

        linkContainer.appendChild(some1);
        linkContainer.appendChild(some2);
        linkContainer.appendChild(some3);
        someContainer.appendChild(linkContainer)
        return someContainer;
    }
    //Add new social media to the page
    const addSome = (name) => {
        const elementContainer = document.querySelector('.linkContainer');
        const some = document.createElement('button');
        some.id = name;
        some.textContent = name;
        elementContainer.appendChild(some);
        return elementContainer;
    }

    return {info, hours, changeHours, some, addSome};
})();

export {contacts};