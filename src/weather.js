import { normalizeWeatherData } from './normalizeData.js';
const API_KEY = 'BJLPFQD9FZGFV6KT7HVPS74TK';
const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export async function getWeather({
  city = null,
  coords = null,
  fallbackCity = 'Rome',
} = {}) {
  let location;
  if (city) {
    location = city;
  } else if (coords) {
    location = `${coords.latitude},${coords.longitude}`;
  } else {
    location = fallbackCity;
  }

  const url = `${BASE_URL}${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather data fetch failed');
    }

    const data = await response.json();
    return normalizeWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
