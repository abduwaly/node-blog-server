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
	});
	
}

exports.exeSqlWithPrms = function(sqlStatement,sqlParams,onSuccess,onError){
  pool.query(sqlStatement, sqlParams, function (error, results) {
    console.log('***** db *****', error, results);
		if(error){
			console.log("----- ERR ----", error);
			onError(error);
		}else{
			console.log("----- SUCCESS ----", results);
			onSuccess(results);
		}
	});	
}





