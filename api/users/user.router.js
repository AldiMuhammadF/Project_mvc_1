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

router.post("/", controllerAddUser);
router.get("/", checkToken, controllerGetUsers);
router.get("/:id", checkToken, controllerGetUsersById);
router.patch("/", checkToken, controllerUpdateUser);
router.delete("/", checkToken, controllerDeleteUser);
router.post("/login", controllerLogin);

module.exports = router;
