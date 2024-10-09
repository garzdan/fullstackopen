const Person = ({ name, number, onDelete }) => {
  return (
    <div>
      {name} {number} <button onClick={onDelete}>delete</button>
    </div>
  );
};

export { Person };