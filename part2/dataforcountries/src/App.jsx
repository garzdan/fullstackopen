import {useEffect, useState} from "react";
import countryService from './services/country';
import weatherService from './services/weather';
import CountryFilter from './components/CountryFilter';
import CountryInfo from './components/CountryInfo';
import CountryList from './components/CountryList';

const App = () => {
  const [isFetchingCountries, setIsFetchingCountries] = useState(true);
  const [isFetchingWeatherInfo, setIsFetchingWeatherInfo] = useState(false);
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [capitalWeather, setCapitalWeather] = useState({});

  useEffect(() => {
    countryService
      .getAll()
      .then(fetchedCountries => {
        setCountries(fetchedCountries);
        setIsFetchingCountries(false)
      });
  }, []);

  useEffect(() => {
    if (!isFetchingWeatherInfo && filteredCountries.length === 1) {
      const filteredCountryInfo = getCountryInfo(filteredCountries[0]);

      if (capitalWeather && capitalWeather.capital === filteredCountryInfo.capital) {
        return;
      }

      setIsFetchingWeatherInfo(true);

      weatherService
        .get(filteredCountryInfo.capital)
        .then(fetchedCapitalWeather => {
          setCapitalWeather(fetchedCapitalWeather);
          setIsFetchingWeatherInfo(false);
        });
    }
  }, [filteredCountries]);

  if (isFetchingCountries) {
    return (
      <div>Fetching countries information...</div>
    );
  }

  const handleCountryFilterChange = event => {
    const countryFilter = event.target.value;

    const filteredCountries = countryFilter.trim() ?
      countries
        .filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase().trim()))
        .map(country => country.name)
      : [];

    setCountryFilter(countryFilter);
    setFilteredCountries(filteredCountries);
  }

  const showCountryInfo = countryName => {
    setFilteredCountries([countryName]);
  }

  const getCountryInfo = countryName => {
    return countries.find(country => country.name === countryName);
  }

  let countryInfo;

  if (filteredCountries.length === 1) {
    const filteredCountryInfo = getCountryInfo(filteredCountries[0]);

    countryInfo = {
      ...filteredCountryInfo,
      capitalWeather: {
        ...capitalWeather
      }
    };
  }

  return (
    <>
      <CountryFilter value={countryFilter} onChange={handleCountryFilterChange} />
      {
        countryInfo ? (
          <CountryInfo country={countryInfo} isFetchingWeatherInfo={isFetchingWeatherInfo} />
        ) : (
          <CountryList countries={filteredCountries} onCountrySelect={showCountryInfo} />
        )
      }
    </>
  );
}

export default App;
