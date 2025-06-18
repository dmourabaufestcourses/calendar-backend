const { response } = require("express"); // esto es solo para volver a tener el intellisense

const registerController = (req, res = response) => {
    console.log(req.body);
    const {name, email, password} = req.body;

    if(name.length <= 5){
        return res.status(400).json({
            ok: false,
            msg: "name length grather than 5 required."
        })
    }
    
  res.json({
    ok: true,
    msg: "register",
    user: req.body
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
