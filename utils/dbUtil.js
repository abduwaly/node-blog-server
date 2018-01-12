var mysql = require("mysql");
var db = require("../config/db");


var pool = mysql.createPool(db.conf);

exports.exeSql = function(sql,onSuccess,onError){
		
	pool.query(sql, function (error, results) {
		if(error){
			//console.log(error);
			onError(error);
		}else{
			//console.log(results);
			onSuccess(results);
		}
		//pool.release();
		//console.log(pool.threadId);
	});
	
}

exports.exeSqlWithPrms = function(sql,onSuccess,onError){
	
}





