import CountryListItem from './CountryListItem';

const CountryList = ({ countries, onCountrySelect }) => {
  if (!countries || !countries.length) {
    return null;
  }

  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter.</div>
    );
  }

  return (
    <>
      {
        countries.map(countryName =>
          <CountryListItem
            key={countryName}
            name={countryName}
            onShow={() => onCountrySelect(countryName)}
          />
        )
      }
    </>
  )
};

export default CountryList;