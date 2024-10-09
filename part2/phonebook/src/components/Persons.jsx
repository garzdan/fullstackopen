import { Person } from './Person';

const Persons = ({ persons, onPersonDelete }) => {
  return (
    <>
      {persons.map(person =>
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          onDelete={() => onPersonDelete(person)}
        />
      )}
    </>
  );
};

export { Persons };