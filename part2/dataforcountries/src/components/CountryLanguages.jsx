const CountryLanguages = ({ languages }) => {
  if (!languages || !languages.length) {
    return (
      <div>Language information not available for this country.</div>
    )
  }

  return (
    <ul>
      {
        languages.map(language =>
          <li key={language}>{language}</li>
        )
      }
    </ul>
  )
};

export default CountryLanguages;