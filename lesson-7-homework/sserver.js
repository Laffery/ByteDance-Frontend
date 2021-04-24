var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer()
const port = 3000

var dir = './resources'

function svgPath(url) {
    return url.endsWith('.svg') ? url : url.concat('.svg')
}

server.on('req', function (req, res) {
    var url = req.url

    if (url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else {
        var index = url.indexOf('?')
        var param = url.substr(index + 1)
        console.log('hello world')

        // if (index !== -1 && param !== '') {
        //     console.log(req.headers)
        //     // res.setHeader('cache-control', param)

        //     const etag = req.headers['if-none-match']
        //     if (etag === '777') {
        //         res.writeHead(304, {
        //             'Cache-Control': 'max-age=20, no-cache',
        //             'Etag': '777'
        //         })
        //         res.end('') // 这里不传任何内容，即使有内容，浏览器也不会读取
        //     } else {
        //         res.writeHead(200, {
        //             'Cache-Control': 'max-age=20, no-cache', // 通过 no-cache，即使没过期浏览器也要向服务器验证，不会从缓存读取。
        //             'Etag': '777'
        //         })
        //     }
        // }

        var urlPath = svgPath(path.join(dir, index === -1 ? url : url.substr(0, index)))

        fs.readFile(urlPath, (err, data) => {
            if (err) {
                return res.end(urlPath + '404 Not Found.')
            }
            res.end(data)
        })
    }
})

server.listen(port, () => {
    console.log('Server is running on http://localhost:' + port, '...')
})