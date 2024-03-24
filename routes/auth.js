const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/yandex/login",
  passport.authenticate("yandex"),
  function (req, res) {
    // The request will be redirected to Yandex for authentication, so
    // this function will not be called.
  }
);

router.get(
  "/yandex/callback",
  passport.authenticate("yandex", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/users/profile");
  }
);

router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;
