// Requiring necessary npm packages
var express = require("express");
// var session = require("express-session");
// // Requiring passport as we've configured it
// var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
// var db = require("./models");      //  PA : uncomment this after fixing models/support.js and db schemas

// Creating express app and configuring middleware needed for authentication
var app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/images/*', express.static(__dirname + "/images/"));
app.use(express.static('public'));


// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


  // PA 06/03:  Commenting the CODE below because models/support.js has errors. uncomment this once that is fixed.

// Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(function () {
//   app.listen(PORT, function () {
//     console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   });
// });

  // PA 06/03 - COMMENT THIS CODE BELOW ONCE YOU've FIXED ISSUES IN models/support.js above. then uncomment code above

  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
