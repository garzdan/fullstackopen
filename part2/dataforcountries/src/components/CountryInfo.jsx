const CountryInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country?.capital.join(', ')}</div>
      <div>area {country.area}</div>
      <h4>languages</h4>
      <ul>
        {
          Object.values(country.languages).map((language) =>
            <li key={language}>{language}</li>
          )
        }
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  )
};

export default CountryInfo;