var dbUtil = require("../utils/dbUtil");

function Blog(){
	
	this.list = function(onSuccess,onErr){
		var sql = 'SELECT * FROM blog';
		dbUtil.exeSql(sql,onSuccess,onErr);
	},
	
	this.getById = function(id,onSuccess,onErr){
		var sql = 'Select * from blog where id='+id;
		dbUtil.exeSql(sql,onSuccess,onErr);
	}
	
}
module.exports = Blog;