const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Customers
let customers = [
  {
    name: 'Test Test',
    phone: '9512011234',
    email: 'test@test.com',
    uniqueID: '1234',
  }
];

// Waitlist
let waitlist = [
  {
    name: 'Test Test',
    phone: '9512011234',
    email: 'test@test.com',
    uniqueID: '1234',
  }
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/api/tables', (req, res) => {
  res.json(customers);
});

app.get('/api/waitlist', (req, res) => {
  res.json(waitlist);
});

app.get('/tables', (req, res) => {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', (req, res) => {
  res.sendFile(path.join(__dirname, 'reserve.html'));
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
  waitlist = [];
  res.json(customers);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
