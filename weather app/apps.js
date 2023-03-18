const form = document.querySelector('form');
const input = document.querySelector('input');
const locationEl = document.querySelector('.location');
const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');

const apiKey = 'fb71a38dd44db0cb0805d8197348a6a7';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = input.value;
  if (location) {
    getWeatherData(location);
    input.value = '';
  }
});

async function getWeatherData(location) {
  const url = `${apiUrl}&q=${location}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.log(error);
  }
}

function updateUI(data) {
  locationEl.textContent = `${data.name}, ${data.sys.country}`;
  temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
  descriptionEl.textContent = `${data.weather[0].description}`;
}

