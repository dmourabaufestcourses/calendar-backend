const { Router } = require("express");
const {
  registerController,
  loginController,
  refreshTokenController,
} = require("../controllers/auth");
const { check, body } = require("express-validator");

const router = Router();

router.post(
  "/register",
  [
    body("name", "Name is required.").notEmpty(),
    body("email", "Email is required.").isEmail(),
    body(
      "password",
      "Password should be greather or equal than 6 characters"
    ).isLength({ min: 6 }),
  ],
  registerController
);

router.post(
  "/login",
  [
    body("email", "Email is required.").isEmail(),
    body(
      "password",
      "Password should be greather or equal than 6 characters"
    ).isLength({ min: 6 }),
  ],
  loginController
);

router.get("/refresh-token", refreshTokenController);

module.exports = router;
