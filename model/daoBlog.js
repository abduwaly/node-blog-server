var dbUtil = require("../utils/dbUtil");

function Blog() {
  
  this.list = function(onSuccess, onErr) {
    var sql = 'SELECT * FROM blog';
    dbUtil.exeSql(sql, onSuccess, onErr);
  };
  
  this.getById = function(id, onSuccess, onErr) {
    var sqlStatement = 'SELECT * FROM blog WHERE id=?';
    var sqlParams = [id];
    dbUtil.exeSqlWithPrms(sqlStatement, sqlParams, function(s){
      onSuccess(s);
    }, function(e){
      onErr(e);
    });
  }
  
  this.add = function(item, onSuccess, onErr){
    var sqlStatement = "INSERT INTO `blog`(`title`,`content`,`brief`,`tags`) VALUES(?,?,?,?)";
    var sqlParams = [item.title, item.content, item.brief, item.tags];
    dbUtil.exeSqlWithPrms(sqlStatement, sqlParams, function(s){
      onSuccess(s);
    }, function(e){
      onErr(e);
    });
  }
  
  this.update = function(item, onSuccess, onErr){
    var sqlStatement = "UPDATE `blog` SET `title`=?,`content`=?,`brief`=?,`tags`=? WHERE `id`=?";
    var sqlParams = [item.title, item.content, item.brief, item.tags, item.id];
    dbUtil.exeSqlWithPrms(sqlStatement, sqlParams, function(s){
      onSuccess(s);
    }, function(e){
      onErr(e);
    });
  }
  
  this.like = function(body, onSuccess, onErr){
    var increment = body.like ? 1 : -1;
    var sqlStatement = "UPDATE `blog` SET `like`=`like`+? WHERE `id`=?";
    var sqlParams = [increment, body.id];
    dbUtil.exeSqlWithPrms(sqlStatement, sqlParams, function(s){
      // dbUtil.exeSql();
      onSuccess(s);
    }, function(e){
      onErr(e);
    });
  }
  
  this.addView = function(body, onSuccess, onErr){
    var sqlStatement = "UPDATE `blog` SET `view`=`view`+1 WHERE `id`=?";
    var sqlParams = [body.id];
    dbUtil.exeSqlWithPrms(sqlStatement, sqlParams, function(s){
      // dbUtil.exeSql();
      onSuccess(s);
    }, function(e){
      onErr(e);
    });
  }
  
}
module.exports = Blog;