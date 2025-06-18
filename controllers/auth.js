const { response } = require("express"); // esto es solo para volver a tener el intellisense
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generateJWT } = require("../helpers/jwt");

const registerController = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });
    console.log(usuario);

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Couldn't create the user",
      });
    }

    usuario = new Usuario(req.body);

    // encript password
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    //Generate JWT
    const token = await generateJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ups, algo salio mal",
    });
  }
};

const loginController = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Invalid credentials.",
      });
    }

    // validate passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Invalid credentials.",
      });
    }

    //Generate JWT
    const token = await generateJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ups, algo salio mal",
    });
  }
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
