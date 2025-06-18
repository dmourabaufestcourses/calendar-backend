const { response } = require("express");
const { validationResult } = require("express-validator");

const validateFields = (req, res = response, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: result.mapped(),
    });
  }

  next();
};

module.exports = {
  validateFields,
};
