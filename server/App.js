const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      "==============Mongodb Database Connected Successfully=============="
    )
  )
  .catch((err) => console.log("Database Not Connected !!!"));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));

//import routes
const customerauth = require("./route/customer/auth");
const banner=require("./route/admin/banner");
const slider=require("./route/admin/slider");

//routes
app.use("/api", customerauth);
app.use("/api",banner);
app.use("/api",slider);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
