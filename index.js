const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] //in an array bc it can choose multiple keys
    })
);
app.use(passport.initialize());
app.use(passport.session());

//requiring authroutes returns a function and is executed immediately bc of the second set
//of parentheses
require("./routes/authRoutes")(app);

//dynamically finds port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT);
