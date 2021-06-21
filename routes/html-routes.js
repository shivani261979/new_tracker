// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/frontFiles/home.html"));
  });

  app.get("/signup", function (req, res) {
    if (req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/supportSignup.html"));
  });


  app.get("/getStarted", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/frontFiles/common/Signup.html.html"));
  });

  app.get("/images/:imageFilename", function (req, res) {

    res.sendFile(path.join(__dirname, "../images/" + req.params.imageFilename));
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  app.get("/opsDash", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/opsDash.html"));
  });

  app.get("/opslogin", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/login.html"));
  });

  app.get("/opsSignup", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/Signup.html"));
  });

  app.get("/supportDash", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/support/supportDash.html"));
  });

  app.get("/supportlogin", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/supportLogin.html"));
  });

  app.get("/supportSignup", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/Signup.html"));
  });

  app.get("/todo", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/ops/todo.html"));
  });

  app.get("/jsonToExcel", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/ops/jsonToexcel.html"));
  });

  app.get("/callApi", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/callApi.html"));
  });

  app.get("/clientData", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/clientData.html"));
  });

  app.get("/clientPack", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/clientPack.html"));
  });

  app.get("/contact", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/contact.html"));
  });

  app.get("/eod", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/eodStatus.html"));
  });

  app.get("/icc", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/icc.html"));
  });

  app.get("/markers", isAuthenticated, function (req, res) {

    res.sendFile(path.join(__dirname, "../public/frontFiles/common/markers.html"));
  });



};