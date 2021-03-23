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

function log(msg) {
    var d = new Date();
    console.log(d.toISOString() + ': ' + msg);
}

function first() {
    var _url = 'https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true';
    var url = _url + '&_signature=' + _signature(_url)
    
    axios
    .get(url, {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4442.4 Safari/537.36",
        },
    })
    .then((res) => {
        fs.writeFileSync('res.json', JSON.stringify(res.data));
        log('SUCCESS ' + url);
    })
    .catch(() => {
        log('ERROR ' + url);
    });
}

// first();

function next() {
    var last = JSON.parse(fs.readFileSync('res.json'));
    var max_behot_time = last.next.max_behot_time;

    var _url = 'https://www.toutiao.com/api/pc/feed/?max_behot_time=' + max_behot_time + '&category=__all__&utm_source=toutiao&widen=1&tadrequire=true';
    var url = _url + '&_signature=' + _signature(_url);
    axios
    .get(url, {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4442.4 Safari/537.36",
        },
    })
    .then((res) => {
        fs.writeFileSync('res.json', JSON.stringify(res.data));
        log('SUCCESS ' + url);
    })
    .catch(() => {
        log('ERROR' + url);
    });
}

// next();

export { first, next, log };
