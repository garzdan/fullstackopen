import { useState } from 'react';

const Person = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);

  const handlePersonAdd = event => {
    event.preventDefault();

    if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`);

      return;
    }

    setPersons([
      ...persons,
      {
        name: newName,
        number: newNumber,
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
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  );
};

export default App;