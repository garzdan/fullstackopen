const CountryFlag = ({ image, text }) => {
  if (!image) {
    return text ? (
      <div>{text}</div>
    ) : null;
  }

  return (
    <img src={image} alt={text} />
  )
};

export default CountryFlag;