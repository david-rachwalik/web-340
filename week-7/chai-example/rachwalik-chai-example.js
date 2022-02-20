/*
    Title: rachwalik-chai-example.js
    Author: David Rachwalik
    Date: 2022/02/20
    Description: Exercise 7.3 for WEB-340 site
*/

// Unit Test
const chai = require('chai');
const fruits = require('./rachwalik-fruits.js');

const { assert } = chai;
describe('fruits', () => {
  it('should return an array of fruits', () => {
    const f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});

// --- Commands ---
// cd E:\Repos\web-340\week-7\chai-example
// * run tests: npm test
