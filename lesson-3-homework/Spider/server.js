import { first, next, log } from './spider.js';
import {
    createRequire
} from "module";
const require = createRequire(
    import.meta.url);
import {
    stringify
} from "node:querystring";
let fs = require("fs");

var http = require("http");
var url = require("url");
var hostname = 'localhost';
var port = 2021;
 
function start() {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        log("Request for " + pathname + " received.");
        
        if (pathname === '/home') {
            first();
        res.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            res.end(fs.readFileSync('res.json'));
        }
        else if (pathname === '/more') {
            next();
            res.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin": '*'});
            res.end(fs.readFileSync('res.json'));
        }
        else if (pathname === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello world');
        }
        else {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('Bad Request.');
            log('Bad Request.');
        }
    }
 
    http.createServer(onRequest).listen(port);
    log(`Server running at http://${hostname}:${port}/`);
}
 
start();

// export { start }