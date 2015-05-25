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
    "documentation": "docs"
  }

  // Home page
  res.writeHead(200, {"Content-Type": "text/html"});
  if (req.tools.path(0, "home|index|about|info|team|docs|doc|documentation") || !req.tools.path(0)) {
    res.tools.endFile(__dirname + "/../pages/" + map[req.tools.path(0)] + ".html", {
      "cdn": "static", // TEMPORARY
      "footer": (lib.mst.render(lib.fs.readFileSync(__dirname + "/../pages/footer.html").toString(), {"cdn": "/static"}) || ""),
    });
  }

  // TEMPORARY
  else if (req.tools.path(0, "static")) {
    res.writeHead(200, {"Content-Type": req.tools.mime()});
    res.tools.endFile(__dirname + "/../test" + req.url);
  }

  else {
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.end("404");
  }
};

module.exports = exports = Pages;
