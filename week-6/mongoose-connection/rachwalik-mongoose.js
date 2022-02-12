/*
    Title: rachwalik-mongoose.js
    Author: David Rachwalik
    Date: 2022/02/12
    Description: Exercise 6.3 for WEB-340 site
*/

// const express = require('express');
// const http = require('http');
// const logger = require('morgan');
const mongoose = require('mongoose');

// Build database connection string
// const username = 'admin';
const database = 'ems';
// const mongoDB = `mongodb+srv://${username}:${password}@buwebdev-cluster-1.gfevl.mongodb.net/${database}?retryWrites=true&w=majority`;
const mongoDB = `mongodb+srv://buwebdev-cluster-1.gfevl.mongodb.net/${database}`;

// Setup connection to MongoDB
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// Database error handling
db.on('error', console.error.bind(console, 'MongoDB connected error: '));

// Actions performed once database connection is open
db.once('open', () => {
  console.log('Application connected to mLab MongoDB instance');
});

// --- Commands ---
// cd E:\Repos\web-340\week-6\mongoose-connection
// * run server with command: node rachwalik-mongoose.js
