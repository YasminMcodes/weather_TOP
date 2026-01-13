export function displayWeather(data, errorMessage = null) {
  const container = document.querySelector('.container');
  let errorDiv = container.querySelector('.error-message');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    container.appendChild(errorDiv);
  }
  if (errorMessage) {
    errorDiv.textContent = `❌ ${errorMessage}. Maybe you inserted an invalid city name. Please try another city.`;
    errorDiv.style.display = 'block';
    return;
  }
  errorDiv.style.display = 'none';
  container.innerHTML = `
  <div class="weather-card">
    <div class="weather-header"> 
  <h2 class = 'city'> ${data.city} </h2>;
  <img class = "weather-icon" src="https://raw.githubusercontent.com/VisualCrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${data.icon}.png" alt="${data.description}"/>
  </div>
  <div class="weather-main">
  <p class = 'temperature'> 🌡️Temperature: ${data.temperature}°C </p>
  <p class = 'feelslike'> 🤗Feels Like: ${data.feelslike}°C </p></div
  <p class = 'description'> 🌥️Conditions: ${data.description} </p>
  </div>
  <div class="weather-details">
  <div class = "detail">
  <p class = 'humidity'> <span> 💧Humidity: </span> <span>${data.humidity}%</span> </p>
  </div>
    <div class = "detail">
  <p class = 'windspeed'> <span> 🌬️Windspeed: </span> <span>${data.windspeed} km/h</span> </p>
  </div>
  </div>
  </div>`;
}
