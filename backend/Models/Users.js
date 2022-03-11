
var dbConn = require('../db.js');
var hasUser = function (params, result){
    try {
      var queryString = `SELECT *
          FROM users
          WHERE name='Ashriya'         
          `;
      dbConn.query(queryString, function (err, res) {
        if (err) {
          result(null, err);
        } else {
          result(null, res[0]);
        }
      });
    } catch (err) {
      result(null, err);
    }
  };
function hasUser(){

}
  module.exports = hasUser;