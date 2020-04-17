let {
    controllerAddItem,
    controllerGetItem,
    controllerUpdateItem,
    controllerdeleteItem

} = require("./barang.controller");

let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/tambah", checkToken, controllerAddItem);
router.get("/ambil", checkToken, controllerGetItem);
router.patch("/edit", checkToken, controllerUpdateItem);
router.delete("/hapus", checkToken, controllerdeleteItem);

module.exports = router;