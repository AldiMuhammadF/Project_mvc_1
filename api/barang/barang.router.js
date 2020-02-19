let {
    controllerAddItem,
    controllerGetItem,
    controllerUpdateItem,
    controllerdeleteItem

} = require("./barang.controller");

let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, controllerAddItem);
router.get("/", checkToken, controllerGetItem);
router.patch("/", checkToken, controllerUpdateItem);
router.delete("/", checkToken, controllerdeleteItem);

module.exports = router;