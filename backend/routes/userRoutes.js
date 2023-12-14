const router = require("express").Router();

//Controllers
const { register, login } = require("../controllers/usersController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
