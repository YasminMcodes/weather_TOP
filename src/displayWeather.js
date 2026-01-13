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
  <button id = "toggleTemp">°F</button>
    <div class="weather-header"> 
  <h2 class = 'city'> ${data.city}</h2>  
  <img class = "weather-icon" src="https://raw.githubusercontent.com/VisualCrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${data.icon}.png" alt="${data.description}"/>
  </div>
  <div class="weather-main">
  <p class = 'temperature'>  🌡️ Temperature: <span id="temp">${data.temperature}°C</span></p>
  <p class = 'feelslike'> 🤗 Feels Like: <span id="feelslike">${data.feelslike}°C </span> </p>
  </div>
  <p class = 'description'> 🌥️ Conditions: ${data.description} </p>
  </div>
  <div class="weather-details">
  <div class = "detail">
  <p class = 'humidity'> <span> 💧 Humidity: </span> <span>${data.humidity}%</span> </p>
  </div>
    <div class = "detail">
  <p class = 'windspeed'> <span> 🌬️ Windspeed: </span> <span>${data.windspeed} km/h</span> </p>
  </div>
  </div>
  </div>`;
  const tempEl = document.getElementById('temp');
  const feelslikeEl = document.getElementById('feelslike');
  const toggleBtn = document.getElementById('toggleTemp');

  let iscelsius = true;
  toggleBtn.addEventListener('click', () => {
    if (iscelsius) {
      tempEl.textContent = ((data.temperature * 9) / 5 + 32).toFixed(2) + '°F';
      feelslikeEl.textContent =
        ((data.feelslike * 9) / 5 + 32).toFixed(2) + '°F';
      toggleBtn.textContent = '°C';
      iscelsius = false;
    } else {
      tempEl.textContent = data.temperature + '°C';
      feelslikeEl.textContent = data.feelslike + '°C';
      toggleBtn.textContent = '°F';
      iscelsius = true;
    }
  });
}
