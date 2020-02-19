let db = require('../../config/connection');

module.exports = {
    serviceAddBarang: (data, callBack) => {
        db.query(`insert into item set ?`,
            data,
            (err, result, fields) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, result);
                }
            }
        )
    },
    serviceGetBarang: (data, callBack) => {
        db.query(`select * from item`,
            [data.owner],
            (err, results, fields) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            })
    },
    serviceUpdateBarang: (data, callBack) => {
        db.query(`update item set item_name=?, price=?, stok=? where item_code=? and owner=?`,
            [
                data.item_name,
                data.price,
                data.stok,
                data.item_code,
                data.owner], (err, results, fields) => {
                    if (err) {
                        return callBack(err);
                    } else {
                        return callBack(null, results);
                    }
                })
    },
    serviceDeleteBarang: (data, callBack) => {
        db.query(`select * from item where item_code=? and owner=?`, [data.item_code, data.owner], (err, result) => {
            if (err) {
                callBack(err)
            } if (!result) {
                callBack(result)
            } else {
                db.query(`delete from item where item_code=? and owner=? `, [data.item_code, data.owner])
                return callBack(null, result[0])
            }
        })
    }
}