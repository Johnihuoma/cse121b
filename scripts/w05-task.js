/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach(temple => {
    const articleElement = document.createElement('article');
    const h2Element = document.createElement('h2');
    const h3Element = document.createElement('h3');
    //const h4Element = document.createElement('h4');
    
    h2Element.textContent = temple.templeName;
    h3Element.textContent = temple.dedicated;
    //h4Element.textContent = temple.area;


    const imgElement = document.createElement('img');
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;


    articleElement.appendChild(h2Element);
    articleElement.appendChild(imgElement);
    articleElement.appendChild(h3Element);
    //articleElement.appendChild(h4Element);


    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (!response.ok) {
      throw new Error('Failed to fetch temple data');
    }

    //Converting response to JSON

    const templeData = await response.json();

    // Assinging the result to the templeList global array variable

    templeList = templeData;

    return templeList;
  } catch (error){
      console.error('Error fetching temple data:', error.message);

      return null;
  }

};

/* reset Function */
const reset = (templesElement) => {
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};


/* filterTemples Function */
let filterTemples = (temples) => {
  reset(templesElement);

  let filter = document.getElementById('filtered').value;

  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
      break;

    case 'notutah':
      displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
      break;

    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;

    case 'all':
      displayTemples(temples);
      break;
    
    default:
      console.error('Invalide filter value');
  }
};



/* Event Listener */
document.getElementById('filtered').addEventListener("change", () => {filterTemples(templeList)});

getTemples()
  .then(temples => {
    displayTemples(temples);
    
  }) 
  .catch(error => console.error('Error displaying temples:', error)); 
