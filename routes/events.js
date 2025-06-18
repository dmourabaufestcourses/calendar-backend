const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");
const {
  getEventsController,
  createEventController,
  uptateEventController,
  deleteEventController,
} = require("../controllers/events");

const router = Router();

//validar tokens para todas las rutas
router.use(validateJWT);

router.get("/", getEventsController);

// si quisiera que el get sea publico lo dejo arriba del middleware
// router.use(validateJWT)
router.post("/", createEventController);

router.put("/:id", uptateEventController);

router.delete("/:id", deleteEventController);

module.exports = router;
