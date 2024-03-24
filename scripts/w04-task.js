/* LESSON 3 - Programming Tasks */

/* Profile Object  */

/* Populate Profile Object with placesLive objects */

let myProfile = {
    name : "John Ihuoma Anochirionye", 
    photo : {
        src : 'images/Ajohn.jpg',
        alt : 'My Profile Picture'
    },
    favoriteFoods : [
        'Rice', 
        'Beans', 
        'Sharwama', 
        'Fried egg and yam', 
        'Plantain', 
        'Akara and custard', 
        'Goat meat peper soup'
    ],
    hobbies : [
        'Reading novels',
        'Playing chess',
        'Watching football',
        'Hanging out with friends',
        'Researching',
        'suffing the net'
    ],
    placesLived : []
};

myProfile.placesLived.push(
    {
        place : 'Lagos, Nigeria',
        length : '1 year'
    },
    {
        place : 'Owerri, Nigeria',
        length : '10 years'
    },
    {
        place : 'Kaduna, Nigeria',
        length : '1 year'
    },
); 



/* DOM Manipulation - Output */
 
/* Name */
document.getElementById('name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});



