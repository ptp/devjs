var Res = function(req, res, lib){
  return {
    endFile:function(file, object){
      var _al = arguments.length;
      lib.fs.readFile(file, function(err, data){
        if (err) {
          res.end(JSON.stringify(err));
        } else {
          res.end(( _al === 1 ? data : lib.mst.render(data.toString(), object) ), "binary");
        }
      });
    } // End .endFile
  };
};

module.exports = exports = Res;
