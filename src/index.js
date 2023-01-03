import './style.css';
import _ from 'lodash';
import menuPageRendering from './menu.js';
import testFunction from './contact.js';

/*  use this to refactor created elements.

const elementMaker = (name, element) => {
    const createElement = () => {
         name = document.createElement(element);
         name.classList.add(name);
         return name;
    }
    return {name, element, createElement};
};
};

*/

const content = document.getElementById('content')


const nav = document.createElement('div');
nav.classList.add('nav')

const main = document.createElement('div')
main.classList.add('main')

const footer = document.createElement('div')
footer.classList.add('footer')


content.appendChild(nav)
content.appendChild(main)
content.appendChild(footer)

const navbar = document.createElement('ol')
navbar.classList.add('navbar')

nav.appendChild(navbar)

const home = document.createElement('li')
home.classList.add('home')
const homelink = document.createElement('a')
homelink.textContent = 'Home'
homelink.href = ''
home.appendChild(homelink)
navbar.appendChild(home)


const menu = document.createElement('li')
menu.classList.add('menu')
const menulink = document.createElement('a')
menulink.textContent = 'Menu'


menu.appendChild(menulink)
navbar.appendChild(menu)

const contact = document.createElement('li')
contact.classList.add('contact')
const contactlink = document.createElement('a')
contactlink.textContent = 'Contact'



contact.appendChild(contactlink)
navbar.appendChild(contact)

const container = document.createElement('div')
container.classList.add('container')
main.appendChild(container)



const header = document.createElement('h1')
    header.classList.add('header')
    header.textContent = 'Welcome to Pasolini\'s!'
    container.appendChild(header)
    

    const paragraph = document.createElement('p')
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis enim ut tellus elementum. Faucibus vitae aliquet nec ullamcorper sit amet risus. Neque convallis a cras semper auctor. Lacus viverra vitae congue eu consequat. Et malesuada fames ac turpis egestas integer. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Proin nibh nisl condimentum id venenatis a condimentum. Nec dui nunc mattis enim ut tellus elementum. Sed egestas egestas fringilla phasellus faucibus scelerisque. Aenean sed adipiscing diam donec adipiscing tristique. Tortor id aliquet lectus proin nibh nisl condimentum id. Commodo odio aenean sed adipiscing diam donec. Elementum sagittis vitae et leo. Pulvinar neque laoreet suspendisse interdum consectetur. Ac tincidunt vitae semper quis lectus nulla at. Habitant morbi tristique senectus et netus et malesuada.'
    paragraph.classList.add('main-text')
    container.appendChild(paragraph)

function homePageRendering() {


    const header = document.createElement('h1')
    header.classList.add('header')
    header.textContent = 'Welcome to Pasolini\'s!'
    container.appendChild(header)
    
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis enim ut tellus elementum. Faucibus vitae aliquet nec ullamcorper sit amet risus. Neque convallis a cras semper auctor. Lacus viverra vitae congue eu consequat. Et malesuada fames ac turpis egestas integer. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Proin nibh nisl condimentum id venenatis a condimentum. Nec dui nunc mattis enim ut tellus elementum. Sed egestas egestas fringilla phasellus faucibus scelerisque. Aenean sed adipiscing diam donec adipiscing tristique. Tortor id aliquet lectus proin nibh nisl condimentum id. Commodo odio aenean sed adipiscing diam donec. Elementum sagittis vitae et leo. Pulvinar neque laoreet suspendisse interdum consectetur. Ac tincidunt vitae semper quis lectus nulla at. Habitant morbi tristique senectus et netus et malesuada.'
    paragraph.classList.add('main-text')
    container.appendChild(paragraph)


}


home.addEventListener('click', () => {
    container.innerHTML = ''
    homePageRendering()
})


menu.addEventListener('click', () => {
    container.innerHTML = ''
    menuPageRendering(container)
})

contact.addEventListener('click', () => {
    container.innerHTML = ''
    testFunction(container)
})