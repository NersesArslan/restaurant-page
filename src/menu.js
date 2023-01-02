import { meanBy } from "lodash";

export default function menuPageRendering(container) {
    const header = document.createElement('h1')
    
    header.classList.add('header')
    container.appendChild(header)
    header.textContent = 'Menu'
 

    const menuList = document.createElement('div')
    menuList.classList.add('menuList')
    container.appendChild(menuList);

    const menuFactory = (listing, item, price, itemClass) => {
        const makeListing = () => {
        const listing = document.createElement('div')
            listing.classList.add('listing');
            return listing;
        }
    
        const makeItem = () => {
        const food = document.createElement('p');
         food.classList.add(itemClass);
        food.textContent = item;
        return food;
    }
    
        const makePrice = () => {
        const money = document.createElement('p');
            money.textContent = price;
            return money
        }
    
       
        return {listing, item, price, itemClass, makeListing, makeItem, makePrice};
    }
    
    

    function appender (list, item, price) {
        list.appendChild(item);
        list.appendChild(price);
           return list;
       }

       const margerita = menuFactory('pizza', 'Margerita', '$21', 'margerita');
       appender(margerita.makeListing(), margerita.makeItem(), margerita.makePrice())
       menuList.appendChild(appender(margerita.makeListing(), margerita.makeItem(), margerita.makePrice()));

       const fungi = menuFactory('pizza', 'Fungi', '$27', 'fungi');
       appender(fungi.makeListing(), fungi.makeItem(), fungi.makePrice())
       menuList.appendChild(appender(fungi.makeListing(), fungi.makeItem(), fungi.makePrice()));

       const taglio = menuFactory('pizza', 'Al-Taglio', '$22', 'Al-Taglio');
       appender(taglio.makeListing(), taglio.makeItem(), taglio.makePrice())
       menuList.appendChild(appender(taglio.makeListing(), taglio.makeItem(), taglio.makePrice()));

       const siciliana = menuFactory('pizza', 'Siciliana', '$24', 'siciliana');
       appender(siciliana.makeListing(), siciliana.makeItem(), siciliana.makePrice())
       menuList.appendChild(appender(siciliana.makeListing(), siciliana.makeItem(), siciliana.makePrice()));

       const napoletana = menuFactory('pizza', 'Napoletana', '$28', 'napoletana');
       appender(napoletana.makeListing(), napoletana.makeItem(), napoletana.makePrice())
       menuList.appendChild(appender(napoletana.makeListing(), napoletana.makeItem(), napoletana.makePrice()));

       const allaPalla = menuFactory('pizza', 'Alla-Pala', '$30', 'allaPalla');
       appender(allaPalla.makeListing(), allaPalla.makeItem(), allaPalla.makePrice())
       menuList.appendChild(appender(allaPalla.makeListing(), allaPalla.makeItem(), allaPalla.makePrice()));
    }

    //al Taglio
    //Siciliana