const express = require('express');

const app = express();
const PORT = 3000;

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

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json(yoda);
});

app.get('/darthmaul', (req, res) => {
  res.json(darthmaul);
});

app.get('/obiwankenobi', (req, res) => {
  res.json(obiwankenobi);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
