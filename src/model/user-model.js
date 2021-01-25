"user strict";
const maria = require("../config/maria-connection.js");
var db;
maria()
  .then((connection) => {
    db = connection;
  })
  .catch((error) => {
    throw error;
  });
var User = {
  getUserById: function (req, res) {
    return new Promise((resolve, reject) => {
      db.query("Select user from user where id = ? ", req.params.id)
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getAllUsers: function (req, res) {
    return new Promise((resolve, reject) => {
      db.query("select * from user")
        .then((rows) => {
          resolve(rows);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  userLogin: function (req, res) {
    return new Promise((resolve, reject) => {
      db.query(`Select user from user where email = ${req.params.email} and password = ${req.params.password}`)
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
module.exports = User;
