var Tools = function(req, res){
  if (!(this instanceof Tools)) return new Tools(req, res);
  this.req = req, this.res = res, this.fs = require("fs"), this.mst = require("mustache");
};

Tools.prototype.path = function(sel, key){
  this.urlBurst = this.req.url.match(/^\/(.*?)(?:[\/])?$/)[1].split(/\//);
  if (arguments.length === 2) {
    return (this.urlBurst[sel] || "").match(new RegExp("^("+key+")$"));
  } else if (arguments.length === 1) {
    return this.urlBurst[sel];
  } else {
    return this.urlBurst;
  }
}

Tools.prototype.endt = function(path, object){
  var me = this;
  this.fs.readFile(path, function(err, data){
    if (err) {
      me.res.end(JSON.stringify(err));
    } else {
      me.res.end(me.mst.render(data.toString(), object));
    }
  });
}

Tools.prototype.endf = function(path){
  var me = this;
  this.fs.readFile(path, function(err, data){
    if (err) {
      me.res.end(JSON.stringify(err));
    } else {
      me.res.end(data);
    }
  });
}

module.exports = exports = Tools;
