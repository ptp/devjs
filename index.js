"use strict";
var lib = require("./lib"), tools,
Website = function(req, res){
  tools = new lib.tools(req, res);
  req.tools = tools.req;
  res.tools = tools.res;

  lib.pages(req, res, tools.lib); 
};

module.exports = exports = Website;

var gith = require('gith').create(8081);
var exec = require('child_process');

gith({
	repo: 'developjavascript/Website-Platform'
}).on('all', function(payload) {
	exec('./lib/hook/hook.sh' + payload.branch, function(err, stdout, stderr) {
		if (err) return err;
		//console.log(stdout);
	});
});

