import { meanBy } from "lodash";

export default function  testFunction(container) {
    const header = document.createElement('h1')
    
    header.classList.add('header')
    container.appendChild(header)
    header.textContent = 'Contact'

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')
    container.appendChild(contactContainer);


    const numberDiv = document.createElement('div');
    numberDiv.classList.add('numberDiv')
    contactContainer.appendChild((numberDiv))

    const numberHeader = document.createElement('div')
    numberHeader.classList.add('numberHeader')
    numberHeader.textContent = "Phone Number: ";
    numberDiv.appendChild(numberHeader)


    const number = document.createElement('p')
    number.classList.add('number')
    number.textContent = '(111) - 222 - 333';
    numberDiv.appendChild(number)

    const number2 = document.createElement('p')
    number2.classList.add('number2')
    number2.textContent = '(999) - 888 - 7777';
    numberDiv.appendChild(number2)

    const emailDiv = document.createElement('div')
    emailDiv.classList.add('emailDiv')
    contactContainer.appendChild(emailDiv)

   const emailHeader = document.createElement('div')
   emailHeader.classList.add('emailHeader');
   emailHeader.textContent = 'E-mail: '
   emailDiv.appendChild(emailHeader)

   const email = document.createElement('p')
   email.classList.add('email')
   email.textContent = 'paolopasolini@gmail.com'
   emailDiv.appendChild(email)
}