import CountryInfo from "./CountryInfo.jsx";
import CountryList from "./CountryList.jsx";

const Countries = ({ countries }) => {
  if (!countries.length) {
    return null;
  }

  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  }

  if (countries.length === 1) {
    return (
      <CountryInfo country={countries[0]} />
    )
  }

  return (
    <CountryList countries={countries} />
  );
}

export default Countries;


