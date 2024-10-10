import {useEffect, useState} from "react";
import countryService from './services/country';
import CountryFilter from "./components/CountryFilter.jsx";
import Countries from "./components/Countries.jsx";

const App = () => {
  const [isFetchingCountries, setIsFetchingCountries] = useState(true);
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');

  useEffect(() => {
    countryService
      .getAll()
      .then(fetchedCountries => {
        setCountries(fetchedCountries);
        setIsFetchingCountries(false)
      })
  }, []);

  const handleCountryFilterChange = event => {
    setCountryFilter(event.target.value);
  }

  if (isFetchingCountries) {
    return (
      <div>Fetching countries information...</div>
    );
  }

  let filteredCountries = [];

  if (countryFilter.trim()) {
    filteredCountries = countries.filter(country => {
      return country.name.common.toLowerCase().includes(countryFilter.trim().toLowerCase());
    });
  }

  return (
    <>
      <CountryFilter value={countryFilter} onChange={handleCountryFilterChange} />
      <Countries countries={filteredCountries} />
    </>
  );
}

export default App;
