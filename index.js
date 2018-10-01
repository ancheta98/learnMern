const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

//requiring authroutes returns a function and is executed immediately bc of the second set
//of parentheses
require("./routes/authRoutes")(app);

//dynamically finds port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT);
