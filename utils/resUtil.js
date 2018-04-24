exports.success = function(data){
  return {
    code : 0,
    msg : 'success',
    data : data
  }
}

exports.error = function(err){
  return {
    code : -1,
    error : err || 'internal exception'
  }
}