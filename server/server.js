require("dotenv").config();
const app = require("./express");
const PORT = process.env.PORT || 3001;


const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDb database");
});



app.listen(PORT, () => {
  console.log("server is running on port 3001");
});
