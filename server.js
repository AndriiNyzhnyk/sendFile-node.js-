var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){


    if(req.url == "/some.doc") {
        res.writeHead(200, {"Content-Type" : "application/msword"});
        fs.createReadStream("files/some.doc").pipe(res);
    }

    if(req.url == "/") {
        fs.readFile("public/index.html", function(error, data){

            if(error){
                res.statusCode = 404;
                res.end("Ресурс не знайдено!");
            } else {
                res.end(data);
            }

        });

    } else {
        res.statusCode = 404;
        res.end("Ресурс не знайдено!");
    }


}).listen(3000, function () { console.log("Server start - localhost:3000"); });
