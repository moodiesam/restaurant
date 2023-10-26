const contactPage = () => {
    const infoDiv = document.getElementById('infoDiv');
    const contactHeader = document.createElement('div');
    const addressDiv = document.createElement('div');
    const hoursDiv = document.createElement('div');

    const items = document.querySelectorAll('#toRemove');
    items.forEach(item => infoDiv.removeChild(item));

    contactHeader.classList.add('header');
    contactHeader.setAttribute('id', 'toRemove');
    contactHeader.innerHTML = 'Contact us here:'
    infoDiv.appendChild(contactHeader);

    addressDiv.classList.add('address');
    addressDiv.setAttribute('id', 'toRemove');
    addressDiv.innerHTML = "Tom's Bistro Address"
    infoDiv.appendChild(addressDiv);

    hoursDiv.classList.add('hours');
    hoursDiv.setAttribute('id', 'toRemove');
    hoursDiv.innerHTML = "Hours of opperation"
    infoDiv.appendChild(hoursDiv);
};

export default {contactPage};