// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");

// Requiring passport as we've configured it
const passport = require("./config/passport");
// Read and set environment variables
require("dotenv").config();

const flash = require("req-flash");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
flash({ locals: 'flash' })
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/handlebars-routes.js")(app);
require("./routes/api-routes.js")(app);


// Syncing our database and logging a message to the user upon success
<<<<<<< HEAD
db.sequelize.sync({force:true}).then(() => {
=======
db.sequelize.sync().then(() => {
>>>>>>> 161c399c04093fe04e1f914eee7c3b085591db8b
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
