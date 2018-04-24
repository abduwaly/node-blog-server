var dbUtil = require("../utils/dbUtil");

function Blog() {
  
  this.list = function(onSuccess, onErr) {
    var sql = 'SELECT * FROM blog';
    dbUtil.exeSql(sql, onSuccess, onErr);
  };
  
  this.getById = function(id, onSuccess, onErr) {
    var sqlStatement = 'SELECT * FROM blog WHERE id=?';
    var sqlParams = [id];
    dbUtil.exeSqlWithPrms(sqlStatement, sqlParams, onSuccess, onErr);
  }
  
  this.add = function(item, onSuccess, onErr){
    var sqlStatement = "INSERT INTO `blog`(`title`,`content`,`brief`,`tags`) VALUES(?,?,?,?)";
    var sqlParams = [item.title, item.content, item.brief, item.tags];
    dbUtil.exeSqlWithPrms(sqlStatement, sqlParams, onSuccess, onErr);
  }
}
module.exports = Blog;