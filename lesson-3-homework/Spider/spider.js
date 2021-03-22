import axios from "axios";
import {
    createRequire
} from "module";
const require = createRequire(
    import.meta.url);
import {
    stringify
} from "node:querystring";
let fs = require("fs");
import { _signature } from './acrawler.js';

var _url = 'https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true';

var url = _url + '&_signature=' + _signature(_url)

function log(msg) {
    var d = new Date();
    console.log(d.toUTCString() + ': ' + msg);
}

function batch() {
    axios
    .get(url, {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4442.4 Safari/537.36",
        },
    })
    .then((res) => {
        fs.writeFileSync('res.json', JSON.stringify(res.data));
        log('spider success!');
        console.log(res.data.next.max_behot_time);
        return res.data.next.max_behot_time;
    })
    .catch(() => {
        log('spider get error');
    });
}

log(batch())

// const http = require('http');
// const hostname = 'localhost';
// const port = 2021;
// const server = http.createServer((req, res) => {
//     console.log(batch());
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/json');
//     var data = fs.readFileSync('res.json');
//     res.end(data);
// });
// server.listen(port, hostname, () => {
//     log(`Server running at http://${hostname}:${port}/`);
// });