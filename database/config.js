const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);

    console.log("DB online");
    
  } catch (error) {
    console.log(error);
    throw new Error("Error to connect to the DB");
  }
};

module.exports = {
    dbConnection
}