const startPage = () => {
    const contentDiv = document.getElementById('content');
    const headline = document.createElement('div');
    const menu = document.createElement('button');
    const about = document.createElement('button');
    const contact = document.createElement('button');
    const info = document.createElement('div');
    const reviews = document.createElement('div');
    const review1 = document.createElement('div');
    const review2 = document. createElement('div');
    const review3 = document.createElement('div');

    headline.classList.add('headline');
    contentDiv.appendChild(headline);

    menu.classList.add('menu');
    menu.setAttribute('type', 'button');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = 'Menu';
    headline.appendChild(menu);

    about.classList.add('about');
    about.setAttribute('type', 'button');
    about.setAttribute('id', 'about');
    about.innerHTML = 'About';
    headline.appendChild(about);

    contact.classList.add('contact');
    contact.setAttribute('type', 'button');
    contact.setAttribute('id', 'contact');
    contact.innerHTML = 'Contact';
    headline.appendChild(contact);

    info.classList.add('info');
    info.setAttribute('id', 'infoDiv');
    info.innerHTML = "TOM'S BISTRO";
    info.setAttribute('style', 'height:400px;background-color:lightgrey')
    contentDiv.appendChild(info);

    reviews.classList.add('reviews');
    contentDiv.appendChild(reviews);

    review1.classList.add('review');
    review1.innerHTML = "Can't go wrong with this spot!!"
    reviews.appendChild(review1);
    
    review2.classList.add('review');
    review2.innerHTML = "Just great!!"
    reviews.appendChild(review2);

    review3.classList.add('review');
    review3.innerHTML = "It's simply the best. Better then all the rest!!"
    reviews.appendChild(review3);
};

export default {startPage};

