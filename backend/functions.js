const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
var staticFolders = require("../config");
//functions


var handle = {
    get: function (req, res, link, file) {
        if (req.method == "GET") {
            var filename = staticFolders.htmlView + file;
            fs.readFile(filename, "UTF-8", function (err, html) {
                res.writeHead(200, {"content-type": "text/html"});
                res.end(html);
            });
            if (req.url.match(/.css$/)) {
                var cssSource = staticFolders.public + req.url;
                var cssStream = fs.createReadStream(cssSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/css"});
                cssStream.pipe(res);
            } else if (req.url.match(/.js$/)) {
                var jsSource = staticFolders.public + req.url;
                var jsStream = fs.createReadStream(jsSource, "UTF-8");
                res.writeHead(200, {"content-type": "text/js"});
                jsStream.pipe(res);
            } else if (req.url.match(/.jpg$/)) {
                var jpgSource = staticFolders.public + req.url;
                var jpgStream = fs.createReadStream(jpgSource, "UTF-8");
                res.writeHead(200, {"content-type": "image/jpg"});
                jpgStream.pipe(res);
            } else if (req.url.match(/.png$/)) {
                var pngSource = staticFolders.public + req.url;
                var pngStream = fs.createReadStream(pngSource, "UTF-8");
                res.writeHead(200, {"content-type": "image/png"});
                pngStream.pipe(res);
            } else if (req.url.match(/.jpeg$/)) {
                var jpegSource = staticFolders.public + req.url;
                var jpegStream = fs.createReadStream(jpegSource, "UTF-8");
                res.writeHead(200, {"content-type": "image/jpeg"});
                jpegStream.pipe(res);
            }

        }
    }
};
module.exports = handle;