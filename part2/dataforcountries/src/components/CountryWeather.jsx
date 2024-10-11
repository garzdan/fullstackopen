const CountryWeather = ({ isFetching, weather }) => {
  if (isFetching) {
    return (
      <div>Fetching weather data...</div>
    );
  }

  if (!weather) {
    return (
      <div>Weather data not available for this country.</div>
    );
  }

  return (
    <div>
      <div>temperature {weather.temperature} Celsius</div>
      <img src={weather.iconUrl} alt="Weather icon" />
      <div>wind {weather.windSpeed} km/h</div>
    </div>
  );
}

export default CountryWeather;