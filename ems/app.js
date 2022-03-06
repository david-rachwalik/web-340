/*
    Title: app.js
    Author: David Rachwalik
    Date: 2022/03/05
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
const Employee = require('./models/employee.js');

// --- Database Setup Steps ---

// Build database connection string (https://www.urlencoder.org)
const database = 'ems';
// const mongoDB = `mongodb+srv://buwebdev-cluster-1.gfevl.mongodb.net/${database}`;
const mongoDB = `mongodb+srv://admin:admin@buwebdev-cluster-1.gfevl.mongodb.net/${database}`;

// Setup connection to MongoDB
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
  Employee.find({}, (error, employees) => {
    if (error) throw error;
    response.render('list', {
      title: 'Employee List',
      employees,
    });
  });
});
app.get('/view', (request, response) => {
  // response.render('view', {
  //   title: 'Employee Details',
  // });
  response.redirect('/list');
});
app.get('/view/:lastName/:firstName', (request, response) => {
  const { lastName } = request.params;
  const { firstName } = request.params;
  Employee.find({ lastName, firstName }, (error, employees) => {
    if (error) throw error;
    console.log(employees);
    if (employees.length > 0) {
      response.render('view', {
        title: 'Employee Record',
        employee: employees,
      });
    } else {
      response.redirect('/list');
    }
  });
});
app.get('/new', (request, response) => {
  response.render('new', {
    title: 'Data Entry',
    message: 'New Employee Entry Page',
  });
});
app.post('/process', (request, response) => {
  // console.log(request.body.txtName);
  if (!request.body.txtFirstName) {
    response.status(400).send('Entries must have a first name');
    return;
  }
  if (!request.body.txtLastName) {
    response.status(400).send('Entries must have a last name');
    return;
  }
  // get the request's form data
  const employeeFirstName = request.body.txtFirstName;
  const employeeLastName = request.body.txtLastName;
  // Create an employee
  const employee = new Employee({
    firstName: employeeFirstName,
    lastName: employeeLastName,
  });
  console.log(`preparing to save employee: ${employee}`);
  // save
  employee.save((error, result) => {
    if (error) {
      console.log(error);
      throw error;
    } else {
      // console.log(result);
      console.log(`${employee.firstName} ${employee.lastName} saved successfully!`);
      response.redirect('/');
    }
  });
});

// Start the server
app.set('port', process.env.PORT || 8080);
http.createServer(app).listen(app.get('port'), () => {
  console.log(`Application started on port ${app.get('port')}!`);
});

// --- Run Commands ---
// cd E:\Repos\web-340\ems
// node app.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080

// --- Create Heroku App Commands ---
// cd E:\Repos\web-340\ems
// heroku login
// heroku create
// heroku apps:rename <yourLastName>‐ems -–app <random‐app‐name-from-create>
// git init
// heroku git:remote -a <yourLastName>-ems
// git add .
// git commit -‐am "Initial Deployment"
// git push heroku master
// heroku ps:scale web=1
// heroku open

// --- Deploy Commands ---
// cd E:\Repos\web-340\ems
// npm run deploy
