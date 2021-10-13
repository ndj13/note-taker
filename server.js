console.log("Starting server.js");

const express = require('express');

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./index.js);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//const { animals } = require('./data/animals');



















//Make server listen
app.listen(PORT, () => {
    console.log(`API server now on port!`);
  });