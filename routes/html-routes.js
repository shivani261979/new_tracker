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

  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/order");
    }
    res.sendFile(path.join(__dirname, "../public/supportLogin.html"));
  });

  // app.get("/neworder", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/customerNewOrder.html"));
  // });

    // Shivani's code - for serving orderstatus.html
  app.get("/orderStatus", isAuthenticated , function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    // }
    res.sendFile(path.join(__dirname, "../public/driverOrderStatus.html"));
  });

  app.get("/images/:imageFilename", function(req,res){

    res.sendFile(path.join(__dirname, "../images/" + req.params.imageFilename));
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });
// ***************** path for driver*********************************
  app.get("/signupdriver", function (req, res) {
    if (req.user) {
      res.redirect("/driverWelcomePage");
    }
    res.sendFile(path.join(__dirname, "../public/opsSignup.html"));
  });

  // app.get("/logindriver", function (req, res) {
  //   if (req.user) {
  //     res.redirect("/driverOrders");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/driverLogin.html"));
  // });
  
  app.get("/opsDash", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/opsDash.html"));
  });

  app.get("/opslogin", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/opsLogin.html"));
  });

  app.get("/opsSignup", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/opsSignup.html"));
  });

  app.get("/supportDash", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/supportDash.html"));
  });

  app.get("/supportlogin", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/supportLogin.html"));
  });

  app.get("/supportSignup", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/supportSignup.html"));
  });

  app.get("/todo", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/todo.html"));
  });

  app.get("/opsDash", isAuthenticated , function(req, res) {
  
    res.sendFile(path.join(__dirname, "../public/opsDash.html"));
  });
   
  // app.get("/orderStatusDriver", isAuthenticated , function(req, res) {
  
  //   res.sendFile(path.join(__dirname, "../public/driverOrderStatus.html"));
  // });
  
  // app.get("/driverSelect", isAuthenticated , function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/driverOrderSelect.html"));
  // });



};

