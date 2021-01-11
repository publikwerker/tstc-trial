var orm = require("../config/orm");

var visitor = {
  all: function(cb) {
    orm.all("visitors", function(res) {
      cb(res);
    });
  },

  create: function(queryString, cb) {
    orm.create("visitors", queryString, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("visitors", objColVals, condition, function(res) {
      cb(res);
    });
  }, 

  delete: function(condition, cb) {
    orm.delete("visitors", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = visitor;