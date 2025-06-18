const { Router } = require("express");
const {
  registerController,
  loginController,
  refreshTokenController,
} = require("../controllers/auth");
const { body } = require("express-validator");
const { validateFields } = require("../middlewares/fields-validator");

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
    validateFields,
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
    validateFields,
  ],
  loginController
);

router.get("/refresh-token", refreshTokenController);

module.exports = router;
