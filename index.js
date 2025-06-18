const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { dbConnection } = require("./database/config");

dotenv.config();

//crear el servidor de express-
const app = express();

//DB
dbConnection();

//cors
app.use(cors());

//Directorio publico
app.use(express.static("public"));

//lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

//escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});
