var Res = function(req, res, lib){
  return {
    endFile:function(file, object){
      lib.fs.readFile(file, function(err, data){
        if (err) {
          res.end(JSON.stringify(err));
        } else {
          res.end(( arguments.length === 1 ? data : lib.mst.render(data.toString(), object) ));
        }
      });
    } // End .endFile
  };
};

module.exports = exports = Res;
