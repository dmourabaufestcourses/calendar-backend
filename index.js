const express = require("express");
const PORT = 4000;

//crear el servidor de express
const app = express();

//Rutas
app.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

//escuchar peticiones
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
