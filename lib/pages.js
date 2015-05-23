var Pages = function(req, res, lib){
  if (req.tools.path(0, "home|index") || !req.tools.path(0)) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.tools.endFile(__dirname + "/../pages/index.html", {
      "cdn": "/static", // TEMPORARY
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
    res.end("<404>");
  }
};

module.exports = exports = Pages;
