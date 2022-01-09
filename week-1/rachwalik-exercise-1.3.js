/*
    Title: rachwalik-exercise-1.3.js
    Author: David Rachwalik
    Date: 2022/01/09
    Description: Node.js script for WEB-330 site
 */

// Imports
let url = require("url")

let parsedURL = url.parse("https://github.com/david-rachwalik/web-340/commits?author=david-rachwalik")

console.log(parsedURL.protocol)
console.log(parsedURL.host)
console.log(parsedURL.query)
