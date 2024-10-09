import { useState, useEffect } from 'react';
import { PersonFilter } from './components/PersonFilter';
import { PersonForm } from './components/PersonForm';
import { Persons} from './components/Persons';
import personService from './services/person.js';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [personFilter, setPersonFilter] = useState('');

  useEffect(() => {
    personService.getAll().then(persons => {
      setPersons(persons);
    })
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  }

  const handlePersonFilterChange = event => {
    setPersonFilter(event.target.value);
  }

  const deletePerson = (person) => {
    if(confirm(`Delete ${person.name}?`)) {
      personService.remove(person.id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id));
        });
    }
  }

  const handlePersonAdd = event => {
    event.preventDefault();

    if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`);

      return;
    }

    personService.create({
        name: newName,
        number: newNumber,
      }).then(createdPerson => {
      setPersons([...persons, createdPerson]);
    });
  };

  const filteredPersons = personFilter ? persons.filter(
    person => person.name.toLowerCase().includes(personFilter.toLowerCase())
  ) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter value={personFilter} onChange={handlePersonFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={handlePersonAdd}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} onPersonDelete={deletePerson} />
    </div>
  );
};

export default App;