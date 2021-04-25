var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

const protocol = 'http'
const hostname = 'localhost'
const port = 3000
const dir = './resources'

function svgPath(url) {
    return url.endsWith('.jpg') ? url : url.concat('.jpg')
}

function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname
    var query = url.parse(req.url).query

    if (pathname === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else {
        const etag = req.headers['if-none-match']
        var urlPath = svgPath(path.join(dir, pathname))

        fs.stat(urlPath, (err, stat) => {
            if (err) {
                return res.end('404 Not Found.')
            }

            var mtime = stat.mtimeMs.toString()

            if (etag === mtime) {
                // console.log('hit')
                res.writeHead(304, {
                    'Cache-Control': query,
                    'Etag': mtime
                })
                return res.end('')
            } else {
                // console.log('miss')
                res.writeHead(200, {
                    'Cache-Control': query,
                    'Etag': mtime
                })
            }
            
            fs.readFile(urlPath, (err, data) => {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        })
    }
}

http.createServer(onRequest).listen(port)
console.log(`Server is running on ${protocol}://${hostname}:${port} ...`)