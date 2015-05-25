"use strict";
var lib = require("./lib"), tools,
Website = function(req, res){
  tools = new lib.tools(req, res);
  req.tools = tools.req;
  res.tools = tools.res;

  lib.pages(req, res, tools.lib);
};

module.exports = exports = Website;
