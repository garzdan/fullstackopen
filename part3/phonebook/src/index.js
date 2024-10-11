const express = require('express');

const PORT = 3001;
const MAX_ID = 1000000;

let persons = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];
const app = express();

app.use(express.json());

app.get('/info', (req, res) => {
  res.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
  `);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const person = persons.find((person) => person.id === req.params.id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "person's data are missing"
    });
  }

  const person = {
    id: String(Math.ceil(Math.random() * MAX_ID)),
    name: String(body.name),
    number: String(body.number),
  };

  persons = [...persons, person];

  res.status(201).json(person);
})

app.delete('/api/persons/:id', (req, res) => {
  persons = persons.filter((person) => person.id !== req.params.id);

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

