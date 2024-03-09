require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

mongoose.connect(process.env.DATABASE_URL, { usenewurlparser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to the database!"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("uploads"));

app.set("view engine", "ejs");

//route prefix
app.use("", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
