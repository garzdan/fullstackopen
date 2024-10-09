import { useState } from 'react';

const Person = ({ name, number }) => {
  return (
    <div>{name} {number}</div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [personFilter, setPersonFilter] = useState('');

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handlePersonFilterChange = event => setPersonFilter(event.target.value);

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

  const filteredPersons = personFilter ? persons.filter(
    person => person.name.toLowerCase().includes(personFilter.toLowerCase())
  ) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handlePersonFilterChange} value={personFilter}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={handlePersonAdd}>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person =>
        <Person key={person.name} name={person.name} number={person.number}/>
      )}
    </div>
  );
};

export default App;