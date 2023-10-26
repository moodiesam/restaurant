const menuPage = () => {
    const infoDiv = document.getElementById('infoDiv');
    const menuHeader = document.createElement('div');
    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');

    const items = document.querySelectorAll('#toRemove');
    items.forEach(item => infoDiv.removeChild(item));

    menuHeader.classList.add('header');
    menuHeader.setAttribute('id', 'toRemove');
    menuHeader.innerHTML = 'Menu';
    infoDiv.appendChild(menuHeader);

    menuItem1.classList.add('menuItem');
    menuItem1.setAttribute('id', 'toRemove');
    menuItem1.innerHTML = "Menu Item 1 - $25";
    infoDiv.appendChild(menuItem1);

    menuItem2.classList.add('menuItem');
    menuItem2.setAttribute('id', 'toRemove');
    menuItem2.innerHTML = "Menu Item 2 - $25";
    infoDiv.appendChild(menuItem2);

    menuItem3.classList.add('menuItem');
    menuItem3.setAttribute('id', 'toRemove');
    menuItem3.innerHTML = "Menu Item 3 - $25";
    infoDiv.appendChild(menuItem3);

    menuItem4.classList.add('menuItem');
    men.setAttribute('id', 'toRemove');
    menuItem4.innerHTML = "Menu Item 4 - $25";
    infoDiv.appendChild(menuItem4);
}

export default {menuPage};