var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var port = process.env.PORT || 3000;
var handle = require("./backend/functions");

var server = http.createServer(function (req, res) {
    handle.get(req, res, "/", "home.html");
});

//console.log(handle.get("/", "home.html"))
server.listen(port);
