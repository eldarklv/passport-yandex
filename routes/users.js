const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

/* GET users listing. */
router.get("/profile", isAuthenticated, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
