import CountryWeather from './CountryWeather';
import CountryFlag from './CountryFlag';
import CountryLanguages from './CountryLanguages';


const CountryInfo = ({ country, isFetchingWeatherInfo }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h4>languages:</h4>
      <CountryLanguages languages={country.languages} />
      <CountryFlag image={country.flag.src} text={country.flag.alt} />
      <h3>Weather in {country.capital}</h3>
      <CountryWeather weather={country.capitalWeather} isFetching={isFetchingWeatherInfo} />
    </div>
  )
};

export default CountryInfo;