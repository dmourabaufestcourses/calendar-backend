const { Router } = require("express");
const {
  registerController,
  loginController,
  refreshTokenController,
} = require("../controllers/auth");
const router = Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/refresh-token", refreshTokenController);

module.exports = router;
