/* W06: Project */


function fetchWeather() {
  const locationInput = document.getElementById('locationInput').value.trim();
  const apiKey = '1692a9b071aa275e87052d8df06925f0'; // API key obtained from the OpenWeathermap personal account

  // Validate input
  if (!locationInput) {
    alert('Please enter a city name.');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = ''; // This Clears previous weather info

      if (data.cod === '404') {
        weatherInfo.textContent = 'City not found';
        return;
      }

      const cityName = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;

      const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
      `;

      weatherInfo.innerHTML = weatherHTML;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      alert('There was an error fetching weather data. Please try again later.');
    });
}
