let {
  controllerAddUser,
  controllerGetUsers,
  controllerGetUsersById,
  controllerUpdateUser,
  controllerDeleteUser,
  controllerLogin
} = require("./user.controller");

let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/tambahuser", controllerAddUser);
router.get("/ambiluser", checkToken, controllerGetUsers);
router.get("/:id", checkToken, controllerGetUsersById);
router.patch("/edituser", checkToken, controllerUpdateUser);
router.delete("/hapususer", checkToken, controllerDeleteUser);
router.post("/login", controllerLogin);

module.exports = router;
