const PersonFilter = ({ value, onChange }) => {
  return (
    <div>
      filter shown with: <input onChange={onChange} value={value} />
    </div>
  );
};

export { PersonFilter };