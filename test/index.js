var http = require("http"),
    mst  = require("mustache"),
    handler = require("./../");

http.createServer(handler)
.listen(80, function(){
  console.log(" - Server online at http://localhost/");
});
