/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'John Ihuoma Anochirionye';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/Ajohn.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

let yearElement = document.querySelector('#year');

let imageElement = document.querySelector('picture > img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);




/* Step 5 - Array */
let favoriteFood = ['Rice', 'Beans', 'Sharwama', 'Fried egg and yam', 'Plantain', 'Akara and custard', 'Goat meat peper soup'];

foodElement.innerHTML = `<strong>${favoriteFood}</strong>`;

let addFood = 'Bread';

favoriteFood.push(addFood);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift([0]);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();

foodElement.innerHTML += `<br>${favoriteFood}`;