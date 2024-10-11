import { useState, useEffect } from 'react';
import { PersonFilter } from './components/PersonFilter';
import { PersonForm } from './components/PersonForm';
import { Persons} from './components/Persons';
import { Notification } from './components/Notification';
import personService from './services/person.js';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [personFilter, setPersonFilter] = useState('');
  const [notification, setNotification] = useState({
    message: '',
    isError: false,
  });

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
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id));

          showNotification(`Deleted ${person.name}`);
        });
    }
  }

  const handlePersonAdd = event => {
    event.preventDefault();

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

    if (existingPerson) {
      if(confirm(`${newName} is already added to the phonebook, replace the older number with the new one?`)) {
        personService.update(existingPerson.id, {
          ...existingPerson,
          number: newNumber,
        }).then(updatedPerson => {
          setPersons(persons.map(person => {
            return person.id !== updatedPerson.id ? person : updatedPerson;
          }));

          showNotification(`Updated ${updatedPerson.name}`)
        }).catch(error => {
          setPersons(persons.filter(person => person.id !== existingPerson.id));

          showNotification(
            `Information of ${existingPerson.name} has already been removed from server`,
            true
          );
        });
      }

      return;
    }

    personService.create({
      name: newName,
      number: newNumber,
    }).then(createdPerson => {
      setPersons([...persons, createdPerson]);

      showNotification(`Added ${createdPerson.name}`)
    });
  };

  const showNotification = (message, isError = false) => {
    setNotification({ message, isError });

    setTimeout(() => {
      setNotification({
        message: '',
        isError: false,
      });
    }, 3000)
  }

  const filteredPersons = personFilter ? persons.filter(
    person => person.name.toLowerCase().includes(personFilter.toLowerCase())
  ) : persons;

  return (
    <div>
      <Notification message={notification.message} isError={notification.isError} />
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