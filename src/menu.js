import { meanBy } from "lodash";

export default function menuPageRendering(container) {
    const header = document.createElement('h1')
    
    header.classList.add('header')
    container.appendChild(header)
    header.textContent = 'Menu'
    container.style.backgroundColor = '#64748b';

    const menuList = document.createElement('div')
    menuList.classList.add('menuList')
    container.appendChild(menuList);

    const menuItems = document.createElement('p');
    menuItems.classList.add('menuItems');

    const itemPrice = document.createElement('p')
    itemPrice.classList.add('itemPrice')

    const listing = document.createElement('div');
    listing.classList.add('listing');

    
    
    menuList.appendChild(listing)

    listing.appendChild(menuItems)
    listing.appendChild(itemPrice)
    menuItems.textContent = 'Margherita'
    itemPrice.textContent = '$21'
    
   
}