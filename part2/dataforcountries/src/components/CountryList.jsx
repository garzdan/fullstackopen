import CountryListItem from "./CountryListItem.jsx";

const CountryList = ({ countries }) => {
  return (
    <>
      {
        countries.map(country =>
          <CountryListItem key={country.name.common} name={country.name.common} />
        )
      }
    </>
  )
};

export default CountryList;