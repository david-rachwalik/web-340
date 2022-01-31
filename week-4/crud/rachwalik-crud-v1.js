/*
    Title: rachwalik-crud-v1.js
    Author: David Rachwalik
    Date: 2022/01/30
    Description: CRUD operations in a Node.js API
*/

const express = require('express');

// Create new router section
const api = express.Router();

// Setup server routes
api.get('/', (req, res) => {
  res.send('API invoked as an HTTP GET request.');
});

api.put('/', (req, res) => {
  res.send('API invoked as an HTTP PUT request.');
});

api.post('/', (req, res) => {
  res.send('API invoked as an HTTP POST request');
});

api.delete('/', (req, res) => {
  res.send('API invoked as an HTTP DELETE request');
});

module.exports = api;
