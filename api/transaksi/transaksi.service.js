const db = require('../../config/connection');
module.exports = {
    serviceCekBarang: (data, callBack) => {
        db.query(
            `select stok from item where item_code=?`,
            [data.id_barang],
            (err, rows) => {
                if (err) {
                    console.log(err)
                    return callBack(err);
                } if (rows.length < 1) {
                    return callBack("item not found")
                } if (rows[0].stok <= 0) {
                    console.log(rows[0].stok);
                    return callBack("out of stok");

                } else {
                    db.query(`select namaBarang from tb_transaksi where kategoriBarang=? `,
                        [data.kategori],
                        (err, rows) => {
                            if (err) {
                                console.log(err)
                                return callBack(err);
                            } else {
                                let kategori = [rows];
                                for (let i = 0; i < kategori.length; i++) {
                                    return callBack(null, kategori[i]);

                                }
                            }
                        })
                }
            }
        )
    },
    servicePesanBarang: (data, callBack) => {
        db.query(
            `select * from item where item_code=?`,
            [data.item_code], (err, results) => {
                if (err) {
                    console.log(err);
                    return callBack(err)
                } if (results.length < 1) {
                    return callBack("No-Id")
                } else if (results[0].stok <= 0) {
                    return callBack("out of stok")
                } else if (results[0].stok < data.stok) {
                    return callBack("stok tdk cukup")
                } else if (data.namaUser === results[0].owner) {
                    return callBack("myItem")
                }
                else {
                    const data_barang = results[0];
                    const total = data_barang.price * data.jumlah;
                    const sedia = data_barang.stok - data.jumlah;
                    // const kategori = data_barang.item_kategori;
                    // console.log(results[0].namaBarang);
                    db.query(
                        `update item set stok=? where item_code=?`,
                        [
                            sedia,
                            data.item_code
                            // data.kategori
                        ]
                    );
                    db.query(
                        `insert into tb_transaksi(namaBarang,kategoriBarang,namaUser,harga,jumlah,
                            harga_total,nama_pembeli)
                            values(?,?,?,?,?,?,?)`,
                        [
                            data_barang.item_name,
                            data_barang.item_kategori,
                            data_barang.owner,
                            data_barang.price,
                            data.jumlah,
                            total,
                            data.namaUser
                        ], //(err, res) => {
                        //     console.log(res, err);

                        // }
                    );
                    return callBack(null, results)
                }
            }
        )
    }
}