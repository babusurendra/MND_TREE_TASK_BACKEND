const Users = require("../model/user-model");
exports.getAllUsers = function (req, res) {
  Users.getAllUsers(req, res).then((result) => {
    result.sort(function (a, b) {
      return a.name - b.name;
    });
    res.send(result);
  }).catch((error) => {
    res.send(error);
  })
};
exports.getUserById = function (req, res) {
  Users.getUserById(req, res).then((user) => {
    res.send(user);
  }).catch((error) => {
    res.send(error);
  })
};
exports.userLogin = function (req, res) {
  Users.userLogin(err, user).then((user) => {
    if(user.role === 'admin'){
      getAllUsers(req,res).then((allUsers)=>{
        res.send(allUsers);
      })
    }else{
      res.send(user);
    }
  }).catch((error) => {
    res.send(error);
  })
};
