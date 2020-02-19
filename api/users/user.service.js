let db = require('../../config/connection');

module.exports = {
  serviceAddUser: (data, callBack) => {
    db.query(
      `insert into registration(first_name, last_name, gender, email, password, number)
          values (?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number
      ],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, result);
        }
      }
    );
  },
  serviceGetUsers: callBack => {
    db.query(`select * from registration`, [], (err, results, fields) => {
      if (err) {
        return callBack(err);
      } else {
        return callBack(null, results);
      }
    });
  },
  serviceGetUsersById: (id, callBack) => {
    db.query(
      `select * from registration where id = ?`,
      [id],
      (err, resuls, fields) => {
        if (err) {
          return callBack(err);
        } else {
          return callBack(null, resuls[0]);
        }
      }
    );
  },
  serviceUpdateUser: (data, callBack) => {
    db.query(
      `update registration set first_name=?, last_name=?, gender=?, email=?,  password=?, number=? where id=?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
      ],
      (err, results, fields) => {
        if (err) {
          return callBack(err);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
  serviceDeleteUser: (data, callBack) => {
    db.query(`select * from registration where id=?`,
      [data.id],
      (err, result) => {
        if (err) {
          callBack(err)
        } if (!result) {
          callBack(result)
        } else {
          db.query(`delete from registration where id=?`,
            [data.id])
          return callBack(null, result[0])
        }
      })
  },
  serviceGetUserByEmail: (email, callBack) => {
    db.query(
      `select first_name, email, password from registration where email = ?`,
      [email],
      (err, results, fields) => {
        if (err) {
          return callBack(err);
        } else {
          return callBack(null, results[0]);
        }
      }
    );
  }
};
