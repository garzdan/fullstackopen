import { useState } from 'react';

const Person = ({ name }) => {
  return (
    <p>{name}</p>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [newName, setNewName] = useState('');

  const handleNameChange = event => setNewName(event.target.value);

  const handlePersonAdd = event => {
    event.preventDefault();

    if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`);

      return;
    }

    setPersons([
      ...persons,
      {
        name: newName
      }
    ]);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePersonAdd}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} name={person.name} />
      )}
    </div>
  );
};

export default App;