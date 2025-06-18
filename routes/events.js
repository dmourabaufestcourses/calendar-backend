const { Router } = require("express");
const { body } = require("express-validator");

const { validateJWT } = require("../middlewares/validate-jwt");
const {
  getEventsController,
  createEventController,
  uptateEventController,
  deleteEventController,
} = require("../controllers/events");
const { validateFields } = require("../middlewares/fields-validator");
const { isDate } = require("../helpers/isDate");

const router = Router();

//validar tokens para todas las rutas
router.use(validateJWT);

router.get("/", getEventsController);

// si quisiera que el get sea publico lo dejo arriba del middleware
// router.use(validateJWT)
router.post(
  "/",
  [
    body("title", "Title is required.").notEmpty(),
    body("start", "Start is required.").custom(isDate),
    body("end", "End is required.").custom(isDate),
    validateFields,
  ],
  createEventController
);

router.put(
  "/:id",
  [
    body("title", "Title is required.").notEmpty(),
    body("start", "Start is required.").custom(isDate),
    body("end", "End is required.").custom(isDate),
    validateFields,
  ],
  uptateEventController
);

router.delete("/:id", deleteEventController);

module.exports = router;
