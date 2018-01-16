var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var port = process.env.PORT || 3000;
var staticFolders = require("./config");
var server = http.createServer();
server.listen(port);


function SampleJs() {
    this.get = function (pass, cb) {
        server.on("request", function (request, response) {
            var getUrl = url.parse(request.url).pathname;
            var req = request;
            var res = response;
            res.render = function (pathFile, file, data) {
                if (pass == getUrl) {
                    var htmlSource = path.join(__dirname, pathFile, file);
                    fs.readFile(htmlSource, function (err, html) {
                        res.writeHead(200, {"content-type": "text/html"});
                        res.write(html);
                        res.end();
                    });
                }
                if (req.url.match(/.css$/)) {
                    var cssSource = path.join(staticFolders.public, req.url);
                    var cssStream = fs.createReadStream(cssSource);
                    res.writeHead(200, {"content-type": "text/css"});
                    cssStream.pipe(res);
                }
                if (req.url.match(/.js$/)) {
                    var jsSource = path.join(staticFolders.public, req.url);
                    var jsStream = fs.createReadStream(jsSource);
                    res.writeHead(200, {"content-type": "text/js"});
                    jsStream.pipe(res);
                }
                if (req.url.match(/.jpg$/)) {
                    var jpgSource = path.join(staticFolders.public, req.url);
                    var jpgStream = fs.createReadStream(jpgSource);
                    res.writeHead(200, {"content-type": "image/jpg"});
                    jpgStream.pipe(res);
                }
                if (req.url.match(/.png$/)) {
                    var pngSource = path.join(staticFolders.public, req.url);
                    var pngStream = fs.createReadStream(pngSource);
                    res.writeHead(200, {"content-type": "image/png"});
                    pngStream.pipe(res);
                }
                if (req.url.match(/.jpeg$/)) {
                    var jpegSource = path.join(staticFolders.public, req.url);
                    var jpegStream = fs.createReadStream(jpegSource);
                    res.writeHead(200, {"content-type": "image/jpeg"});
                    jpegStream.pipe(res);
                }
                
                console.log(req.url);
            };
            cb(req, res);
        });
    }
}


var Handle = new SampleJs();


Handle.get("/manage", function (req, res) {
    res.render("pages", "manage.html", "hello");
});
Handle.get("/", function (req, res) {
    res.render("pages", "home.html", "hello");
});
Handle.get("/profile", function (req, res) {
    res.render("pages", "profile.html", "hello");
});