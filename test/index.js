var http = require("http"),
    mst  = require("mustache"),
    handler = require("./../");

var server = http.createServer(handler)
.listen(3000, function(){
  console.log(" - Server online at http://localhost/ on port: " + server.address().port);
});
