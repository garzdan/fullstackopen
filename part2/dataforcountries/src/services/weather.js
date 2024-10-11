import axios from 'axios';

const baseUri = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

const get = (city) => {
  return axios.get(baseUri, {
    params: {
      q: city,
      APPID: apiKey,
      units: 'metric',
    }
  }).then(response => ({
    capital: response.data.name,
    iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    temperature: response.data.main.temp,
    windSpeed: response.data.wind.speed,
  }));
}

export default { get };