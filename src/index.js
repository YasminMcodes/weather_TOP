import './styles.css';
import { getWeather } from './weather.js';
import { displayWeather, renderError } from './displayWeather.js';
import { coordsToCity } from './cityName.js';

const button = document.querySelector('.useLocation');
const SearchButton = document.querySelector('.searchButton');

button.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const weather = await getWeather({
        city: await coordsToCity(latitude, longitude),
      });
      displayWeather(weather);
    },
    (error) => {
      console.error('Error obtaining location:', error);
    }
  );
});
SearchButton.addEventListener('click', async () => {
  const input = document.querySelector('.searchInput');
  const city = input.value;
  try {
    const weather = await getWeather({ city });
    displayWeather(weather);
  } catch (error) {
    renderError(error.message);
  }
});
const weather = await getWeather();
displayWeather(weather);
