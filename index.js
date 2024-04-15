// index.js

// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the innerHTML of the <h1> element to include the text "YOUR-NAME is the champion"
newHeader.innerHTML = "YOUR-NAME is the champion";

// Append the <h1> element to the <body> element
document.body.appendChild(newHeader);