const { response } = require("express"); // esto es solo para volver a tener el intellisense

const registerController = (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "register",
    user: req.body,
  });
};

const loginController = (req, res = response) => {
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
