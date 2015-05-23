"use strict";
var Website = function(req, res){
  this.lib = require("./lib");
  req.tools = this.lib.tools(req, res);
  this.lib.pages(req, res);
};

module.exports = exports = Website;
