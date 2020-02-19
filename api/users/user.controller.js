let {
  serviceAddUser,
  serviceGetUsers,
  serviceGetUsersById,
  serviceUpdateUser,
  serviceDeleteUser,
  serviceGetUserByEmail
} = require("./user.service");

let { genSaltSync, hashSync, compareSync } = require("bcrypt");
let { sign } = require("jsonwebtoken");

module.exports = {
  controllerAddUser: (req, res) => {
    let body = req.body;
    let salt = genSaltSync(10);
    body.password = hashSync(`${body.password}`, salt);
    serviceAddUser(body, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          succes: 0,
          message: "database connection error"
        });
      }
      return res.status(200).json({
        succes: 1,
        data: results
      });
    });
  },
  controllerGetUsersById: (req, res) => {
    let id = req.params.id;
    serviceGetUsersById(id, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!results) {
        return res.json({
          succes: 0,
          message: "Record not found"
        });
      } else {
        return res.json({
          succes: 1,
          data: results
        });
      }
    });
  },
  controllerGetUsers: (req, res) => {
    serviceGetUsers((err, results) => {
      if (err) {
        console.error(err);
        return;
      } else {
        return res.json({
          succes: 1,
          data: results
        });
      }
    });
  },
  controllerUpdateUser: (req, res) => {
    let body = req.body;
    let salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    serviceUpdateUser(body, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!results) {
        return res.json({
          succes: 0,
          message: "update failed"
        });
      } else {
        return res.json({
          succes: 1,
          message: "update lur"
        });
      }
    });
  },
  controllerDeleteUser: (req, res) => {
    let data = req.body
    serviceDeleteUser(data, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!results) {
        return res.json({
          succes: 0,
          message: "Record not found"
        });
      } else {
        return res.json({
          succes: 1,
          message: "user delete succesfuly"
        });
      }
    });
  },
  controllerLogin: (req, res) => {
    let body = req.body;
    serviceGetUserByEmail(body.email, (err, results) => {
      if (err) {
        console.error(err);
      }
      if (!results) {
        return res.json({
          succes: 0,
          message: "Invalid email or password"
        });
      }
      let result = compareSync(body.password, results.password);

      if (result) {
        results.password = undefined;
        let jsonwebtoken = sign({ result: results }, "secretkey", {
          expiresIn: "1h"
        });
        return res.json({
          succes: 1,
          message: "login succesfuly, your Account Already Use",
          account: results,
          token: jsonwebtoken
        });
      } else {
        return res.json({
          succes: 0,
          message: "email or password invalid"
        });
      }
    });
  }
};
