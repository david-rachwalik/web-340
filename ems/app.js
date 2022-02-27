/*
    Title: app.js
    Author: David Rachwalik
    Date: 2022/02/26
    Description: Node.js server for EMS site
*/

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
// security
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
// models
const Fruit = require('./models/fruit.js');
const Employee = require('./models/employee.js');

// Instantiate models
const fruit = new Fruit({
  name: 'Apple',
});
const employee = new Employee({
  firstName: 'David',
  lastName: 'Rachwalik',
});

// --- Database Setup Steps ---

// Build database connection string
const database = 'ems';
const mongoDB = `mongodb+srv://buwebdev-cluster-1.gfevl.mongodb.net/${database}`;

// Setup connection to MongoDB
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// Database error handling
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Actions to perform once database connection is ready
db.once('open', () => {
  console.log('Application connected to mLab MongoDB instance');
});

// --- Application Setup Steps ---

// Initialize Express app server
const app = express();
// Setup logger and static files
app.use(logger('short'));
app.use(express.static(`${__dirname}/public`)); // declare static directory
// Setup security
app.use(helmet.xssFilter()); // XSS prevention
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csrf({ cookie: true })); // setup csrf protection
app.use((request, response, next) => {
  const token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});
// Set the view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

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
app.get('/view', (request, response) => {
  response.render('view', {
    title: 'Employee Details',
  });
});
app.get('/new', (request, response) => {
  response.render('new', {
    title: 'Data Entry',
    message: 'New Fruit Entry Page',
  });
});
app.post('/process', (request, response) => {
  console.log(request.body.txtName);
  // response.redirect('/');
});

// Start the server
http.createServer(app).listen(8080, () => {
  console.log('Application started on port 8080!');
});

// --- Commands ---
// cd E:\Repos\web-340\ems
// * run server with command: node app.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
