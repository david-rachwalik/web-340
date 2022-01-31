/*
    Title: rachwalik-crud-v2.js
    Author: David Rachwalik
    Date: 2022/01/30
    Description: CRUD operations in a Node.js API
*/

const express = require('express');

// Create new router section
const api = express.Router();

// Setup server routes
api.get('/', (req, res) => {
  res.send('API returning a superior HTTP GET response.');
});

api.put('/', (req, res) => {
  res.send('API returning a superior HTTP PUT response.');
});

api.post('/', (req, res) => {
  res.send('API returning a superior HTTP POST response.');
});

api.delete('/', (req, res) => {
  res.send('API returning a superior HTTP DELETE response.');
});

module.exports = api;
