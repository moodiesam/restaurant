import homePage from './pages/home';
import contact from './pages/contact';
import menu from './pages/menu';
import about from './pages/about'

homePage.startPage();

const contactTab = document.getElementById('contact');
const menuTab = document.getElementById('menu');
const aboutTab = document.getElementById('about');

contactTab.addEventListener('click', contact.contactPage);
menuTab.addEventListener('click', menu.menuPage);
aboutTab.addEventListener('click', about.aboutPage);