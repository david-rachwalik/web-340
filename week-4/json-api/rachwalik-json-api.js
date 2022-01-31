/*
    Title: rachwalik-json-api.js
    Author: David Rachwalik
    Date: 2022/01/30
    Description: Exercise 4.2 for WEB-340 site
*/

const express = require('express');
const http = require('http');

const app = express();

class Customer {
  constructor(firstName, lastName, employeeId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeId = employeeId;
  }
}

// Setup server routes
app.get('/customer/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  response.json({
    firstName: 'Leo',
    lastName: 'Tolstoy',
    employeeId: id,
  });
});

app.get('/customers', (request, response) => {
  const id = parseInt(request.params.id, 10);
  response.json([new Customer('Gandalf', 'the Grey', 1007), new Customer('Samwise', 'Gamgee', 1008), new Customer('Tom', 'Bombadil', 1009)]);
});

// Start the server
http.createServer(app).listen(8080, () => {
  console.log('Application started on port 8080');
});

// --- Commands ---
// cd E:\Repos\web-340\week-4\json-api
// * run server with command: node rachwalik-json-api.js
// * navigate to localhost:8080/customers or enter the command: curl -i localhost:8080/customers
