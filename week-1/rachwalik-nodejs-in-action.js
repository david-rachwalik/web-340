/*
    Title: rachwalik-nodejs-in-action.js
    Author: David Rachwalik
    Date: 2022/01/09
    Description: Node.js server for WEB-330 site
 */

// Import declaration
let http = require("http")

function processRequest(req, res) {
    let body = "Hello World"
    let contentLength = body.length
    res.writeHead(200, {
        "Content-Length": contentLength,
        "Content-Type": "text/plain"
    })
    res.end(body)
}
let server = http.createServer(processRequest)
server.listen(8080)

// --- Demo Steps ---
// * run server with command: node rachwalik-nodejs-in-action.js
// * navigate to localhost:8080 or enter the command: curl -i localhost:8080
