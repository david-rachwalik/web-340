/*
    Title: employee.js
    Author: David Rachwalik
    Date: 2022/02/20
    Description: Employee model for WEB-340 site
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

// define the employeeSchema
const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
});
// define the employee model
const Employee = mongoose.model('Employee', employeeSchema);

// expose the employee to calling files
module.exports = Employee;
