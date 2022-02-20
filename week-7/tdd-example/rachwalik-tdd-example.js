/*
    Title: rachwalik-tdd-example.js
    Author: David Rachwalik
    Date: 2022/02/20
    Description: Exercise 7.2 for WEB-340 site
*/

const assert = require('assert');

describe('String#split', () => {
  it('should return an array of fruits', () => {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});

// Passed function
function getFruits(str) {
  return str.split(',');
}
module.exports = getFruits;

// --- Commands ---
// cd E:\Repos\web-340\week-7\tdd-example
// * run tests: npm test
