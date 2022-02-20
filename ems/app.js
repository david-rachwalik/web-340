/*
    Title: app.js
    Author: David Rachwalik
    Date: 2022/02/13
    Description: Node.js server for WEB-340 site
*/

const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');
const Fruit = require('./models/fruit.js');
const Employee = require('./models/employee.js');

// --- Database Setup Steps ---

// Build database connection string
// const username = 'admin';
const database = 'ems';
// const mongoDB = `mongodb+srv://${username}:${password}@buwebdev-cluster-1.gfevl.mongodb.net/${database}?retryWrites=true&w=majority`;
const mongoDB = `mongodb+srv://buwebdev-cluster-1.gfevl.mongodb.net/${database}`;

// Setup connection to MongoDB
mongoose.connect(mongoDB, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// Database error handling
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Actions to perform once database connection is ready
db.once('open', () => {
  console.log('Application connected to mLab MongoDB instance');
});

// --- Application Setup Steps ---

// Setup app server, view engine, logger, static files
const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));
app.use(express.static(`${__dirname}/public`)); // declare static directory

// Instantiate models
const fruit = new Fruit({
  name: 'Apple',
});
const employee = new Employee({
  firstName: 'David',
  lastName: 'Rachwalik',
});

// Setup server routes (views)
app.get('/', (request, response) => {
  response.render('index', {
    title: 'Home page',
  });
});
app.get('/list', (request, response) => {
  response.render('list', {
    title: 'Tabular View',
  });
});
app.get('/new', (request, response) => {
  response.render('new', {
    title: 'Data Entry',
  });
});
app.get('/view', (request, response) => {
  response.render('view', {
    title: 'Employee Details',
  });
});

// Start the server
http.createServer(app).listen(8080, () => {
  console.log('Application started on port 8080!');
});

// --- Commands ---
// cd E:\Repos\web-340\ems
// * run server with command: node app.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
