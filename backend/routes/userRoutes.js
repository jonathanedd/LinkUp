const router = require("express").Router();

//Controllers
const { register } = require("../controllers/usersController");

router.post("/register", register);

module.exports = router;
