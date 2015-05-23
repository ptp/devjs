var mime = require("mime");
var Pages = function(req, res){
  if (req.tools.path(0, "home|index") || !req.tools.path(0)) {
    req.tools.endt(__dirname + "/../pages/index.html", {
      "cdn": "/static" // TEMPORARY
    });
  }

  // TEMPORARY
  else if (req.tools.path(0, "static")) {
    res.writeHead(200, {"Content-Type": mime.lookup(req.url)});
    req.tools.endf(__dirname + "/../test" + req.url);
  }

  else {
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.end("<404>");
  }
};

module.exports = exports = Pages;
