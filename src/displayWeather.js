export function displayWeather(data) {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const city = document.createElement('h2');
  city.textContent = `Weather in ${data.city}`;

  const temp = document.createElement('p');
  temp.textContent = ` 🌡️Temperature: ${data.temperature}°C`;

  const feelslike = document.createElement('p');
  feelslike.textContent = `🤗Feels Like: ${data.feelslike}°C`;
  container.appendChild(feelslike);

  const description = document.createElement('p');
  description.textContent = `🌥️Conditions: ${data.description}`;

  const humidity = document.createElement('p');
  humidity.textContent = `💧Humidity: ${data.humidity}%`;

  const windspeed = document.createElement('p');
  windspeed.textContent = `🌬️Windspeed: ${data.windspeed} km/h`;

  const icon = document.createElement('img');
  icon.src = `https://raw.githubusercontent.com/VisualCrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${data.icon}.png`;
  icon.alt = data.description;
  container.append(
    city,
    icon,
    temp,
    feelslike,
    description,
    humidity,
    windspeed
  );
}
export function renderError(message) {
  const container = document.querySelector('.container');

  container.innerHTML = `
    <div class="error">
      ❌ ${message}. Please try another city.
    </div>
  `;
}
