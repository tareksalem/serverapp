var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var port = process.env.PORT || 3000;

function handling(req, res, link, file) {
        if (req.method == "GET") {
            var filename = path.join(__dirname, "pages/" + file);
            fs.readFile(filename, "UTF-8", function (err, html) {
                res.writeHead(200, {"content-type": "text/html"});
                res.end(html);
            });
            if (req.url.match(/.css$/)) {
                var cssSource = path.join(__dirname, req.url);
                var cssStream = fs.createReadStream(cssSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/css"});
                cssStream.pipe(res);
            } else if (req.url.match(/.js$/)) {
                var jsSource = path.join(__dirname, req.url);
                var jsStream = fs.createReadStream(jsSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/js"});
                jsStream.pipe(res);
            } else if (req.url.match(/.jpg$/)) {
                var jpgSource = path.join(__dirname, req.url);
                var jpgStream = fs.createReadStream(jpgSource, "UTF-8");
                res.writeHead(200, {"content-type": "image/jpg"});
                jpgStream.pipe(res);
            } else if (req.url.match(/.png$/)) {
                var pngSource = path.join(__dirname, req.url);
                var pngStream = fs.createReadStream(pngSource, "UTF-8");
                res.writeHead(200, {"content-type": "image/png"});
                pngStream.pipe(res);
            } else if (req.url.match(/.jpeg$/)) {
                var jpegSource = path.join(__dirname, req.url);
                var jpegStream = fs.createReadStream(jpegSource, "UTF-8");
                res.writeHead(200, {"content-type": "image/jpeg"});
                jpegStream.pipe(res);
            }

        }
    }

/*

if (req.url.match(/.css$/)) {
                var cssSource = path.join(__dirname, req.url);
                var cssStream = fs.createReadStream(cssSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/css"});
                cssStream.pipe(res);
            } else if (req.url.match(/$/)) {
                var jsSource = path.join(__dirname, req.url);
                var jsStream = fs.createReadStream(jsSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/js"});
                jsStream.pipe(res);
            } else if (req.url.match(/.js$/)) {
                var jpgSource = path.join(__dirname, req.url);
                var jpgStream = fs.createReadStream(jpgSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/js"});
                jpgStream.pipe(res);
            } else if (req.url.match(/.js$/)) {
                var pngSource = path.join(__dirname, req.url);
                var pngStream = fs.createReadStream(pngSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/js"});
                pngStream.pipe(res);
            } else if (req.url.match(/.js$/)) {
                var jpegSource = path.join(__dirname, req.url);
                var jpegStream = fs.createReadStream(jpegSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/js"});
                jpegStream.pipe(res);
            }
        }
 */

var server = http.createServer(function (req, res) {
    handling(req, res, "/", "home.html");
});

//console.log(handle.get("/", "home.html"))
server.listen(port);
