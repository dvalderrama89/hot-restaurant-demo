const express = require('express');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
const yoda = {
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  forcePoints: 2000,
};

const darthmaul = {
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  forcePoints: 1200,
};

const obiwankenobi = {
  name: 'Obi Wan Kenobi',
  role: 'Jedi Master',
  age: 200,
  forcePoints: 1500,
};

// Customers
const customers = [
  {
    name: 'Test Test',
    phone: '9512011234',
    email: 'test@test.com',
    uniqueID: '1234',
  }
];

// Routes
app.get('/', (req, res) => {
  res.end("Restaurant main page")
});

app.get('/api/tables', (req, res) => {
  res.json(yoda);
});

app.get('/api/waitlist', (req, res) => {
  res.json(obiwankenobi);
});

app.get('/tables', (req, res) => {
  res.end("tables");
});

app.get('/reserve', (req, res) => {
  res.end("resrve");
});

// Create New Characters - takes in JSON input
app.post('/api/tables', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newCharacter = req.body;
  console.log(req.body);

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.name = newCharacter.name.replace(/\s+/g, '').toLowerCase();
  console.log(newCharacter);

  customers.push(newCharacter);
  res.json(newCharacter);
});

// Create New Characters - takes in JSON input
app.post('/api/clear', (req, res) => {
  customers = [];
  res.json(customers);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
