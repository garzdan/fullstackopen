const CountryListItem = ({ name, onShow }) => {
  return (
    <div>{name} <button onClick={onShow}>show</button></div>
  )
};

export default CountryListItem;