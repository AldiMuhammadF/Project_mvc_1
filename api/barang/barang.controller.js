let { serviceAddBarang,
    serviceGetBarang,
    serviceUpdateBarang,
    serviceDeleteBarang } = require("./barang.service")
let { checkToken } = require("../../auth/token_validation")
let { verify } = require("jsonwebtoken")

module.exports = {
    controllerAddItem: (req, res) => {
        let body = req.body
        let token = req.get("authorization")
        if (token) {
            token = token.slice(7)
            verify(token, "secretkey", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "login firts"
                    })
                } else {
                    var user = decoded.result
                    const data_item = {
                        item_name: body.namaBarang,
                        price: body.harga,
                        stok: body.stok,
                        owner: user.first_name
                    }
                    serviceAddBarang(data_item, (err, results) => {
                        if (err) {
                            console.log(err)
                            return res.json({
                                success: 0,
                                message: "not success input item"
                            })
                        } else {
                            return res.json({
                                success: 1,
                                message: "succes input new item",
                                data: results
                            })
                        }
                    })
                }
            })
        }
    },
    controllerGetItem: (req, res) => {
        let token = req.get("authorization")
        if (token) {
            token = token.slice(7)
            verify(token, "secretkey", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "login firts"
                    })
                } else {
                    var user = decoded.result
                    const data = {
                        owner: user.first_name
                    }
                    serviceGetBarang(data, (err, results) => {
                        if (err) {
                            console.error(err);
                            return;
                        } else {
                            return res.json({
                                success: 1,
                                data: results
                            });
                        }
                    });
                }
            })
        }
    },
    controllerUpdateItem: (req, res) => {
        let body = req.body;
        let token = req.get("authorization")
        if (token) {
            token = token.slice(7)
            verify(token, "secretkey", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "login firts"
                    })
                } else {
                    var user = decoded.result
                    const data = {
                        item_name: body.namaBarang,
                        price: body.harga,
                        stok: body.stok,
                        item_code: body.id,
                        owner: user.first_name
                    }
                    serviceUpdateBarang(data, (err, results) => {
                        if (err) {
                            console.error(err);
                            return;
                        } if (!results) {
                            return res.json({
                                success: 0,
                                message: "update failed"
                            });
                        } else {
                            return res.json({
                                success: 1,
                                message: "update lur",
                                data: results
                            });
                        }
                    });
                }
            })
        }
    },
    controllerdeleteItem: (req, res) => {
        let body = req.body;
        let token = req.get("authorization")
        if (token) {
            token = token.slice(7)
            verify(token, "secretkey", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "login firts"
                    })
                } else {
                    var user = decoded.result
                    const data = {
                        item_code: body.id,
                        owner: user.first_name
                    }
                    serviceDeleteBarang(data, (err, results) => {
                        if (err) {
                            console.error(err);
                            return;
                        } if (!results) {
                            return res.json({
                                success: 0,
                                message: "Record not found"
                            });
                        } else {
                            return res.json({
                                success: 1,
                                message: "uwes ilang",
                                data: results
                            });
                        }
                    });
                }
            })

        }

    }
}