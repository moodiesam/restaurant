const startPage = () => {
    const contentDiv = document.getElementById('content');
    const headline = document.createElement('div');
    const menu = document.createElement('button');
    const about = document.createElement('button');
    const contact = document.createElement('button');
    const info = document.createElement('div');
    const banner = document.createElement('div')
    const reviews = document.createElement('div');
    const review1 = document.createElement('div');
    const reviewQuote1 = document.createElement('div')
    const reviewAuthor1 = document.createElement('div');
    const review2 = document. createElement('div');
    const reviewQuote2 = document.createElement('div')
    const reviewAuthor2 = document.createElement('div');
    const review3 = document.createElement('div');
    const reviewQuote3 = document.createElement('div')
    const reviewAuthor3 = document.createElement('div');

    headline.classList.add('headline');
    contentDiv.appendChild(headline);

    menu.classList.add('tab');
    menu.setAttribute('type', 'button');
    menu.setAttribute('id', 'menu');
    menu.innerHTML = 'Menu';
    headline.appendChild(menu);

    about.classList.add('tab');
    about.setAttribute('type', 'button');
    about.setAttribute('id', 'about');
    about.innerHTML = 'About';
    headline.appendChild(about);

    contact.classList.add('tab');
    contact.setAttribute('type', 'button');
    contact.setAttribute('id', 'contact');
    contact.innerHTML = 'Contact';
    headline.appendChild(contact);

    info.classList.add('info');
    info.setAttribute('id', 'infoDiv');
    contentDiv.appendChild(info);

    banner.classList.add('banner');
    banner.setAttribute('id', 'toRemove');
    banner.innerHTML = "TOM'S BISTRO";
    info.appendChild(banner);

    reviews.classList.add('reviews');
    contentDiv.appendChild(reviews);

    review1.classList.add('review');
    reviews.appendChild(review1);

    reviewQuote1.classList.add('quote');
    reviewQuote1.innerHTML = "'This place is incredibly fine'"
    review1.appendChild(reviewQuote1);

    reviewAuthor1.classList.add('author');
    reviewAuthor1.innerHTML = "--Larry Johnson";
    review1.appendChild(reviewAuthor1);
    
    review2.classList.add('review');
    reviews.appendChild(review2);

    reviewQuote2.classList.add('quote');
    reviewQuote2.innerHTML = "'I ordered the burger and it was a burger'"
    review2.appendChild(reviewQuote2);

    reviewAuthor2.classList.add('author');
    reviewAuthor2.innerHTML = "--Liz Anderson";
    review2.appendChild(reviewAuthor2);

    review3.classList.add('review');
    reviews.appendChild(review3);

    reviewQuote3.classList.add('quote');
    reviewQuote3.innerHTML = "'Very reasonably priced'"
    review3.appendChild(reviewQuote3);

    reviewAuthor3.classList.add('author');
    reviewAuthor3.innerHTML = "--Frank O'Mally";
    review3.appendChild(reviewAuthor3);
};

export default {startPage};

