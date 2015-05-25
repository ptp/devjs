var Pages = function(req, res, lib){

  var map = {
    "index": "index",
    "home": "index",
    "": "index",
    "about": "about",
    "info": "about",
    "team": "team",
    "docs": "docs",
    "doc": "docs",
    "documentation": "docs",
    "features":"features"
  }, wrap = [];

  for (key in map) { wrap.push(key); }
  wrap = wrap.join("|")

  // Basic pages
  res.writeHead(200, {"Content-Type": "text/html"});
  if (req.tools.path(0, wrap) || !req.tools.path(0)) {
    res.tools.endFile(__dirname + "/../pages/" + map[req.tools.path(0)] + ".html", {
      "cdn": "static", // TEMPORARY
      "footer": (function(data){
        return lib.mst.render(data, {
          "cdn": "/static"
        }) || "";
      }(lib.fs.readFileSync(__dirname + "/../pages/footer.html").toString())),
    });
  }

  // TEMPORARY
  else if (req.tools.path(0, "static")) {
    res.writeHead(200, {"Content-Type": req.tools.mime()});
    res.tools.endFile(__dirname + "/../test" + req.url);
  }

  // 404
  else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.tools.endFile(__dirname + "/../pages/error.html", {
      "code": 404,
      "message": "Not found",
      "description": "The file or directory '"+req.url+"' was not found on the server."
    }, function(){
      res.end("<h1>404</h1>")
    })
  }
};

module.exports = exports = Pages;
