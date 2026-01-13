export function normalizeWeatherData(data) {
  return {
    city: data.resolvedAddress,
    temperature: data.currentConditions.temp,
    feelslike: data.currentConditions.feelslike,
    description: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
    windspeed: data.currentConditions.windspeed,
    icon: data.currentConditions.icon,
  };
}
