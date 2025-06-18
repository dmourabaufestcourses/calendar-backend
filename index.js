const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

//crear el servidor de express
const app = express();

//Directorio publico
app.use(express.static("public"));

//lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});
