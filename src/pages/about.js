const aboutPage = () => {
    const infoDiv = document.getElementById('infoDiv');
    const aboutHeader = document.createElement('div');
    const aboutBody = document.createElement('div');

    const items = document.querySelectorAll('#toRemove');
    items.forEach(item => infoDiv.removeChild(item));

    aboutHeader.classList.add('header');
    aboutHeader.setAttribute('id', 'toRemove');
    aboutHeader.innerHTML = "Tom's Bistro";
    infoDiv.appendChild(aboutHeader);

    aboutBody.classList.add('aboutBody');
    aboutBody.setAttribute('id', 'toRemove');
    aboutBody.innerHTML = "Tom's Bistro is super awesome.  We put all sorts of stuff on out menu just for fun!";
    infoDiv.appendChild(aboutBody);
}

export default {aboutPage}