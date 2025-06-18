const { response } = require("express"); // esto es solo para volver a tener el intellisense
const { validationResult } = require("express-validator");

const registerController = (req, res = response) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: result.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: "register",
    user: req.body,
  });
};

const loginController = (req, res = response) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: result.mapped(),
    });
  }

  res.json({
    ok: true,
    msg: "login",
  });
};

const refreshTokenController = (req, res = response) => {
  res.json({
    ok: true,
    msg: "refrest-token",
  });
};

module.exports = {
  registerController,
  loginController,
  refreshTokenController,
};
