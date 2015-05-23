var urlBurst;
var Req = function(req, res, lib){
  return {
    path: function(sel, key){
      urlBurst = req.url.match(/^\/(.*?)(?:[\/])?$/)[1].split(/\//);
      if (arguments.length === 1) {
        return urlBurst[sel];
      } else if (arguments.length === 2){
        return (urlBurst[sel]||"").match(new RegExp("^("+ key +")$"));
      } else {
        return urlBurst;
      }
    }, // End .path

    mime: function(input){
      return lib.mime.lookup(input||req.url);
    }
  }
};

module.exports = exports = Req;
