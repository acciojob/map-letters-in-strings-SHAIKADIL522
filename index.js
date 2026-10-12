// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});

//your code here
app.use(express.json());

function mapLetters(word) {
  const result = {};
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!result[ch]) result[ch] = [];
    result[ch].push(i);
  }
  return result;
}

app.post('/mapLetters', (req, res) => {
  const { word } = req.body;
  res.status(200).json(mapLetters(word));
});

app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;